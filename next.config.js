/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          {
            key: "Access-Control-Allow-Origin",
            value: "https://nextjs-issue-48798.vercel.app",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, OPTIONS, PATCH, DELETE, POST, PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization, baggage, sentry-trace",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
