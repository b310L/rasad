/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // hostname: 'http://0.0.0.0:8088/',

        remotePatterns: [
            {
              protocol: "http",
              hostname: "**",
            },
          ],
      },
}

module.exports = nextConfig
