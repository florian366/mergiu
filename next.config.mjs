const nextConfig = {
  trailingSlash: true,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/pers%C3%B6nlich',
          destination: '/persoenlich/',
        },
        {
          source: '/pers%C3%B6nliche-betreuung',
          destination: '/persoenliche-betreuung/',
        },
      ],
    };
  },
};

export default nextConfig;
