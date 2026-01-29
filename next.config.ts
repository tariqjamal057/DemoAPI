import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/admin",
        destination: "/admin/dashboard",
        permanent: true,
      },
      {
        source: "/accounts",
        destination: "/accounts/dashboard",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
