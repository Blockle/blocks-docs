import { Box } from '@blockle/blocks-v2';
import { FC } from 'react';

export type HeaderProps = {};

export const Header: FC<HeaderProps> = () => {
  return <Box as="header">HEADER</Box>;
};
