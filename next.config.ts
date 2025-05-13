import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import type { NextConfig } from 'next';

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  // experimental: {
  //   appDir: true,
  // },
  // output: 'export',
  reactStrictMode: true,
  // swcMinify: true,
  images: { unoptimized: true },
} satisfies NextConfig;

module.exports = withVanillaExtract(nextConfig);
