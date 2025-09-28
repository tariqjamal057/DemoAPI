import time
import pytest
from faker import Faker
from rate_limiter import RateLimiter


class TestRateLimiter:
    def test_allow_initial_requests(self):
        fake = Faker()
        limiter = RateLimiter(requests=3, window=10)
        client_ip = fake.ipv4()

        # Should allow first 3 requests
        assert limiter.is_allowed(client_ip) is True
        assert limiter.is_allowed(client_ip) is True
        assert limiter.is_allowed(client_ip) is True

    def test_block_after_limit(self):
        fake = Faker()
        limiter = RateLimiter(requests=2, window=10)
        client_ip = fake.ipv4()

        limiter.is_allowed(client_ip)
        limiter.is_allowed(client_ip)
        # Third should be blocked
        assert limiter.is_allowed(client_ip) is False

    def test_reset_after_window(self):
        fake = Faker()
        limiter = RateLimiter(requests=2, window=1)
        client_ip = fake.ipv4()

        limiter.is_allowed(client_ip)
        limiter.is_allowed(client_ip)
        assert limiter.is_allowed(client_ip) is False

        time.sleep(1.1)

        assert limiter.is_allowed(client_ip) is True

    def test_different_clients(self):
        fake = Faker()
        limiter = RateLimiter(requests=1, window=10)
        client1 = fake.ipv4()
        client2 = fake.ipv4()

        assert limiter.is_allowed(client1) is True
        assert limiter.is_allowed(client1) is False  # client1 blocked

        assert limiter.is_allowed(client2) is True  # client2 allowed
