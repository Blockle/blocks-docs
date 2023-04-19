const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');

const externals = ['@blockle/blocks-v2', 'outdent'];
const withVanillaExtract = createVanillaExtractPlugin({
  externals,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   appDir: true,
  // },
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: externals,
};

module.exports = withVanillaExtract(nextConfig);
