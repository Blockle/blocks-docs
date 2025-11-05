import withBundleAnalyzer from '@next/bundle-analyzer';
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import type { NextConfig } from 'next';

const vanillaExtract = createVanillaExtractPlugin();
const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  // experimental: {
  //   appDir: true,
  // },
  // output: 'export',
  reactStrictMode: true,
  // swcMinify: true,
  images: { unoptimized: true },
} satisfies NextConfig;

export default vanillaExtract(bundleAnalyzer(nextConfig));
