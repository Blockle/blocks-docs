'use client';

import { Box, classnames } from '@blockle/blocks';
import { FC } from 'react';
import * as styles from './navigation.css';

export type NavigationProps = {};

export const Navigation: FC<NavigationProps> = () => {
  return (
    <Box backgroundColor="primary" padding="medium">
      Navigation
      <div className={classnames(styles.frameworkStyle, styles.appStyle)}>YOOO</div>
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
