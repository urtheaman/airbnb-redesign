/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    mapbox_key:
      "pk.eyJ1IjoidXJ0aGVhbWFuIiwiYSI6ImNsMTI2MzVjNzAwMnkzbXJ6OWY4aTRvMXQifQ.Y79bto09mWZaw5AWbXlZIQ",
  },
};

module.exports = nextConfig;
