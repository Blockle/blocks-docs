import { Box, Inline, Text } from '@blockle/blocks';
import Image from 'next/image';
import type { FC } from 'react';

import { Link } from '../Link/Link';
import * as styles from './header.css';

export const Header: FC = () => {
  return (
    <Box
      asChild
      backgroundColor="white"
      position={['sticky', 'static']}
      insetBlockStart={0}
      padding={2}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      boxShadow={2}
    >
      <header>
        <Link variant="primary" href="/">
          <Inline gap={2} alignY="center">
            <Image
              src="/blockle.png"
              alt="Logo"
              width={100}
              height={100}
              className={styles.logo}
            />
            <Text fontSize="large" fontWeight="normal">
              @blockle/blocks
            </Text>
          </Inline>
        </Link>
      </header>
      {/*
      <IconButton icon="bars-3" label="Open navigation" color="primary" /> */}
    </Box>
  );
};
