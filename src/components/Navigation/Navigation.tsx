'use client';

import { Box, Button } from '@blockle/blocks';
import { type FC, useState } from 'react';

import { HeroIcon } from '../HeroIcon/HeroIcon';
import { Search } from '../Search/Search';
import { SideNav } from '../SideNav/SideNav';

export type NavigationProps = {
  children: React.ReactNode;
};

export const Navigation: FC<NavigationProps> = ({ children }) => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        backgroundColor="primary-200"
        padding={2}
      >
        <Box asChild display={['block', 'block', 'none']}>
          <Button
            size="small"
            onClick={() => setIsSideNavOpen((isOpen) => !isOpen)}
            aria-label="Toggle navigation"
          >
            <HeroIcon name="bars-3" />
          </Button>
        </Box>

        <Box marginInlineStart="auto">
          <Search />
        </Box>
      </Box>

      <Box display="flex">
        <SideNav open={isSideNavOpen} onClose={() => setIsSideNavOpen(false)} />

        <Box padding={6} flexGrow={1} overflow="auto">
          {children}
        </Box>
      </Box>
    </>
  );
};
