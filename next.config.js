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
  serverRuntimeConfig: {
    mapbox_key:
      "pk.eyJ1IjoidXJ0aGVhbWFuIiwiYSI6ImNsMTI2MzVjNzAwMnkzbXJ6OWY4aTRvMXQifQ.Y79bto09mWZaw5AWbXlZIQ",
  },
  publicRuntimeConfig: {
    mapbox_style: "mapbox://styles/urtheaman/cl12773u4001g14l91i9pzsha",
  },
};

module.exports = nextConfig;
