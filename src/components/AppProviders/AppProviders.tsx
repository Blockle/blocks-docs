'use client';

import { BlocksProvider } from '@blockle/blocks-v2';
import '@blockle/blocks-v2/src/reset.css';
import { theme } from '@blockle/blocks-v2/src/Themes/Momotaro';
import Link from 'next/link';
import { FC, ReactNode } from 'react';

export type AppProvidersProps = {
  children: ReactNode;
};

export const AppProviders: FC<AppProvidersProps> = ({ children }) => {
  return (
    <BlocksProvider theme={theme} spriteUrl="/icons.svg" linkComponent={Link}>
      {children}
    </BlocksProvider>
  );
};
