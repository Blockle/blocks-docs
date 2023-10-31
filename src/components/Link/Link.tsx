import { Link as BlocksLink, LinkProps as BlocksLinkProps } from '@blockle/blocks';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import type { FC } from 'react';

export type LinkProps = Omit<NextLinkProps, 'as'> & Omit<BlocksLinkProps, 'as'>;

export const Link: FC<LinkProps> = ({ children, href, ...props }) => {
  return (
    <BlocksLink asChild {...props}>
      <NextLink href={href}>{children}</NextLink>
    </BlocksLink>
  );
};
