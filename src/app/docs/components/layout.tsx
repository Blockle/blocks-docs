import { Box } from '@blockle/blocks';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '@blockle/blocks - React design system',
  description:
    '@blockle/blocks - Design system for React written in TypeScript and vanilla-extract',
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Box paddingInline={1} paddingBlock={3}>
        <Link href="/">Back</Link>
      </Box>

      {children}
    </>
  );
}
