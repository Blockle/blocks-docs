import { BlocksProvider } from '@blockle/blocks';
import { momotaro } from '@blockle/blocks-theme-momotaro';
import '@blockle/blocks/reset';
import { Rubik } from 'next/font/google';
import { Header } from '../components/Header/Header';
import { Navigation } from '../components/Navigation/Navigation';

export const metadata = {
  title: '@blockle/blocks - React design system',
  description:
    '@blockle/blocks - Design system for React written in TypeScript and vanilla-extract',
};

const rubik = Rubik({ weight: ['400', '500', '700'], subsets: ['latin'], display: 'swap' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={rubik.className}>
        <BlocksProvider theme={momotaro}>
          {/* TODO add spriteUrl="/icons.svg" and linkComponent={Link} */}
          <Header />
          <Navigation>{children}</Navigation>
        </BlocksProvider>
      </body>
    </html>
  );
}
