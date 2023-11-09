import { Box } from '@blockle/blocks';
import { FC } from 'react';
import { Search } from '../Search/Search';

export type NavigationProps = {};

export const Navigation: FC<NavigationProps> = () => {
  return (
    <Box display="flex" justifyContent="space-between" backgroundColor="primary" padding="medium">
      Navigation
      <Search />
    </Box>
  );
};
