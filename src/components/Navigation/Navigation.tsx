'use client';

import { Box, Button } from '@blockle/blocks';
import { FC, useState } from 'react';
import { Search } from '../Search/Search';
import { SideNav } from '../SideNav/SideNav';

export type NavigationProps = {
  children: React.ReactNode;
};

export const Navigation: FC<NavigationProps> = ({ children }) => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  return (
    <>
      <Box display="flex" justifyContent="space-between" backgroundColor="primary" padding="medium">
        <Box asChild display={['block', 'none']}>
          <Button onClick={() => setIsSideNavOpen((a) => !a)}>Navigation</Button>
        </Box>

        <Box alignSelf="flex-end">
          <Search />
        </Box>
      </Box>

      <Box display="flex">
        <SideNav open={isSideNavOpen} onClose={() => setIsSideNavOpen(false)} />

        <Box padding="gutter" flexGrow={1} overflow="auto">
          {children}
        </Box>
      </Box>
    </>
  );
};
