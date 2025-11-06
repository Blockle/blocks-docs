import { Box, Divider, Stack, Text } from '@blockle/blocks';
import { FC } from 'react';
import { Link } from '../Link/Link';
import * as styles from './sidenav.css';

type SideNavProps = {
  open: boolean;
  onClose: () => void;
};

export const SideNav: FC<SideNavProps> = ({ open, onClose }) => {
  return (
    <Box asChild padding="small" className={styles.container} data-open={open}>
      <nav>
        <Stack spacing="medium">
          <Stack spacing="small">
            <Text color="text-900" fontWeight="medium">
              General
            </Text>
            <Divider color="text-400" />
            <Link href="/docs">Get started</Link>
          </Stack>

          <Stack spacing="small">
            <Text color="text-900" fontWeight="medium">
              Theming
            </Text>
            <Divider color="text-400" />
            <Link href="/docs/theming/customize">Customize theme</Link>
            <Link href="/docs/theming/tokens">Tokens</Link>
            <Link href="/docs/theming/styling">Styling</Link>
            <Link href="/docs/theming/component">Component theming</Link>
          </Stack>

          <Stack spacing="small">
            <Text color="text-900">Layout</Text>
            <Divider color="text-400" />
            <Link href="/docs/layout/box">Box</Link>
            <Link href="/docs/layout/stack">Stack</Link>
            <Link href="/docs/layout/inline">Inline</Link>
          </Stack>

          <Stack spacing="small">
            <Text color="text-900">Typography</Text>
            <Divider color="text-400" />
            <Link href="/docs/layout/text">Text</Link>
            <Link href="/docs/layout/heading">Heading</Link>
          </Stack>

          <Stack spacing="small">
            <Text color="text-900">Navigation</Text>
            <Divider color="text-400" />
            <Link href="/docs/layout/link">Link</Link>
            <Link href="/docs/layout/xxx">ButtonLink?</Link>
          </Stack>

          <Stack spacing="small">
            <Text color="text-900">Data Entry</Text>
            <Divider color="text-400" />
            <Link href="/docs/layout/input">Input</Link>
            <Link href="/docs/layout/switch">Input</Link>
          </Stack>

          <Stack spacing="small">
            <Text color="text-900">Notifications</Text>
            <Divider color="text-400" />
            <Link href="/docs/components/toast">Toast</Link>
          </Stack>
        </Stack>
      </nav>
    </Box>
  );
};
