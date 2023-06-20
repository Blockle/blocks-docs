const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');

const externals = [];
const withVanillaExtract = createVanillaExtractPlugin({
  externals,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: externals,
  images: { unoptimized: true },
};

module.exports = withVanillaExtract(nextConfig);
