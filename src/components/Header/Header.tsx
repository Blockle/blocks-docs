import { Box, Inline, Text } from '@blockle/blocks';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import * as styles from './header.css';

export type HeaderProps = {};

export const Header: FC<HeaderProps> = () => {
  return (
    <Box
      as="header"
      backgroundColor="white"
      position={['sticky', 'static']}
      top={0}
      padding="small"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      boxShadow="medium"
    >
      <Link href="/">
        <Inline gap="small" alignY="center">
          <Image src="/blockle.png" alt="Logo" width={100} height={100} className={styles.logo} />
          <Text fontSize="large">@blockle/blocks</Text>
        </Inline>
      </Link>
      {/*
      <IconButton icon="bars-3" label="Open navigation" color="primary" /> */}
    </Box>
  );
};
