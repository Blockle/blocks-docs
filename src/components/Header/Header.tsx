import { Box, Inline, Text } from '@blockle/blocks';
import Image from 'next/image';
import { FC } from 'react';
import { Link } from '../Link/Link';
import * as styles from './header.css';

export type HeaderProps = {};

export const Header: FC<HeaderProps> = () => {
  return (
    <Box
      asChild
      backgroundColor="white"
      position={['sticky', 'static']}
      insetBlockStart={0}
      padding="small"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      boxShadow="medium"
    >
      <header>
        <Link variant="primary" href="/">
          <Inline spacing="small" alignY="center">
            <Image src="/blockle.png" alt="Logo" width={100} height={100} className={styles.logo} />
            <Text fontSize="large">@blockle/blocks</Text>
          </Inline>
        </Link>
      </header>
      {/*
      <IconButton icon="bars-3" label="Open navigation" color="primary" /> */}
    </Box>
  );
};
