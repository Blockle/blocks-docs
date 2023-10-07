import { BlocksProvider, Box } from '@blockle/blocks';
import '@blockle/blocks/reset.css';
import { momotaro } from '@blockle/blocks/themes/momotaro';
import { Rubik } from 'next/font/google';
import { Header } from '../components/Header/Header';
import { Navigation } from '../components/Navigation/Navigation';

export const metadata = {
  title: '@blockle/blocks - React design system',
  description:
    '@blockle/blocks - Design system for React written in TypeScript and vanilla-extract',
};

const rubik = Rubik({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head></head>
      <body className={rubik.className}>
        {/* TODO add spriteUrl="/icons.svg" and linkComponent={Link} */}
        <BlocksProvider theme={momotaro}>
          <Header />

          <Navigation />

          <Box padding="gutter">{children}</Box>
        </BlocksProvider>
      </body>
    </html>
  );
}
