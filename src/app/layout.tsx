import { BlocksProvider, Box } from '@blockle/blocks';
import '@blockle/blocks/reset.css';
import { theme } from '@blockle/blocks/themes/momotaro';
import { Header } from '../components/Header/Header';
import { Navigation } from '../components/Navigation/Navigation';

export const metadata = {
  title: '@blockle/blocks react design system',
  description: '@blockle/blocks design system for React written in TypeScript and vanilla-extract',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* TODO add spriteUrl="/icons.svg" and linkComponent={Link} */}
        <BlocksProvider theme={theme}>
          <Header />

          <Navigation />

          <Box padding="gutter">{children}</Box>
        </BlocksProvider>
      </body>
    </html>
  );
}
