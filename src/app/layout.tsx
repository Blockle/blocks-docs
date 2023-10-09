import { BlocksProvider } from '@blockle/blocks';
import { momotaro } from '@blockle/blocks/themes/momotaro';
import { Rubik } from 'next/font/google';
import { Header } from '../components/Header/Header';
import { Navigation } from '../components/Navigation/Navigation';

// TODO Why is '@blockle/blocks/reset.css' not working?
// import '@blockle/blocks/reset.css';
import '../css/reset.css';

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

          {children}
        </BlocksProvider>
      </body>
    </html>
  );
}
