const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   appDir: true,
  // },
  // output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  images: { unoptimized: true },
};

module.exports = withVanillaExtract(nextConfig);
