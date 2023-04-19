import { BlocksProvider } from '@blockle/blocks-v2';
import '@blockle/blocks-v2/src/reset.css';
import { theme } from '@blockle/blocks-v2/src/Themes/Momotaro';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';
import { FC } from 'react';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>@blockle/blocks</title>
        <meta
          name="description"
          content="@blockle/blocks design system for React written in TypeScript and vanilla-extract"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BlocksProvider theme={theme} spriteUrl="/icons.svg" linkComponent={Link}>
        <Component {...pageProps} />
      </BlocksProvider>
    </>
  );
};

export default MyApp;
