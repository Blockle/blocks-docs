import { BlocksProvider } from '@blockle/blocks-v2';
import '@blockle/blocks-v2/src/reset.css';
import { theme } from '@blockle/blocks-v2/src/Themes/Momotaro';
import Link from 'next/link';

export const metadata = {
  title: '@blockle/blocks react design system',
  description: '@blockle/blocks design system for React written in TypeScript and vanilla-extract',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <BlocksProvider theme={theme} spriteUrl="/icons.svg" linkComponent={Link}>
          {children}
        </BlocksProvider>
      </body>
    </html>
  );
}
