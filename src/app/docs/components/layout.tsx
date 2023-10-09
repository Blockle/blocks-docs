import { Box } from '@blockle/blocks';
import Link from 'next/link';

export const metadata = {
  title: '@blockle/blocks - React design system',
  description:
    '@blockle/blocks - Design system for React written in TypeScript and vanilla-extract',
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Box paddingX="xsmall" paddingY="medium">
        <Link href="/">Back</Link>
      </Box>

      {children}
    </>
  );
}
