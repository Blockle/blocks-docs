import { Text } from '@blockle/blocks';
import type { FC } from 'react';

import { dependencies } from '../../../package.json';

function toVersionString(version: string) {
  if (version.startsWith('^') || version.startsWith('~')) {
    return version.slice(1);
  }

  return version;
}

export const BlocksVersion: FC = () => {
  return (
    <Text fontStyle="italic" fontSize="xsmall" color="neutral-600">
      @blockle/blocks: v{toVersionString(dependencies['@blockle/blocks'])}
    </Text>
  );
};
