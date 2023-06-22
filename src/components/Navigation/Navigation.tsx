'use client';

import { Box } from '@blockle/blocks';
import { FC } from 'react';

export type NavigationProps = {};

export const Navigation: FC<NavigationProps> = () => {
  return (
    <Box backgroundColor="primary" padding="medium">
      Navigation
      {/* <Input
        label="REMOVE ME"
        name="search"
        placeholder="Search"
        startSlot={<Icon icon="magnifying-glass" marginLeft="medium" />}
        endSlot={
          <Text paddingRight="medium" whiteSpace="nowrap">
            ⌘ + K
          </Text>
        }
      /> */}
    </Box>
  );
};
