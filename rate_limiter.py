import time
from collections import defaultdict
from fastapi import HTTPException, Request


class RateLimiter:
    def __init__(self, requests: int, window: int):
        self.requests = requests
        self.window = window
        self.requests_log = defaultdict(list)

    def is_allowed(self, client_ip: str) -> bool:
        now = time.time()
        self.requests_log[client_ip] = [
            req_time
            for req_time in self.requests_log[client_ip]
            if now - req_time < self.window
        ]
        if len(self.requests_log[client_ip]) >= self.requests:
            return False
        self.requests_log[client_ip].append(now)
        return True


rate_limiter = RateLimiter(requests=10, window=60)  # 10 requests per minute


def check_rate_limit(request: Request):
    client_ip = request.client.host
    if not rate_limiter.is_allowed(client_ip):
        raise HTTPException(status_code=429, detail="Rate limit exceeded")
