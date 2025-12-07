/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'toolsforbusiness.ai',
      },
      {
        protocol: 'https',
        hostname: 'taai.gitury.com',
      },
    ],
  },

  turbopack: {
    rules: {
      '*.svg': {
        loaders: [
          {
            loader: '@svgr/webpack',
            options: {
              dimensions: false,
              titleProp: true,
            },
          },
        ],
        as: '*.js',
      },
    },
  },
};

module.exports = nextConfig;
