module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["naturallifes.com", "admin.naturallifes.com"],
    deviceSizes: [600, 640, 750, 828, 1080, 1200, 1920, 2048],
  },
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
