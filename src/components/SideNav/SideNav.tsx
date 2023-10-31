import { Box, Divider, Stack, Text } from '@blockle/blocks';
import { FC } from 'react';
import { Link } from '../Link/Link';
import * as styles from './sidenav.css';

export const SideNav: FC = () => {
  return (
    <Box asChild paddingTop="gutter" paddingX="small" className={styles.container}>
      <nav>
        <Stack gap="medium">
          <Stack gap="small">
            <Text color="textLight">General</Text>
            <Divider color="textLight" />
            <Link href="/docs">Get started</Link>
          </Stack>

          <Stack gap="small">
            <Text color="textLight">Theming</Text>
            <Divider color="textLight" />
            <Link href="/docs/theming/customize">Customize theme</Link>
            <Link href="/docs/theming/tokens">Tokens</Link>
            <Link href="/docs/theming/component">Component theming</Link>
          </Stack>

          <Stack gap="small">
            <Text color="textLight">Layout</Text>
            <Divider color="textLight" />
            <Link href="/docs/layout/box">Box</Link>
            <Link href="/docs/layout/stack">Stack</Link>
            <Link href="/docs/layout/inline">Inline</Link>
          </Stack>

          <Stack gap="small">
            <Text color="textLight">Typography</Text>
            <Divider color="textLight" />
            <Link href="/docs/layout/text">Text</Link>
            <Link href="/docs/layout/heading">Heading</Link>
          </Stack>

          <Stack gap="small">
            <Text color="textLight">Navigation</Text>
            <Divider color="textLight" />
            <Link href="/docs/layout/link">Link</Link>
            <Link href="/docs/layout/xxx">ButtonLink?</Link>
          </Stack>

          <Stack gap="small">
            <Text color="textLight">Data Entry</Text>
            <Divider color="textLight" />
            <Link href="/docs/layout/input">Input</Link>
          </Stack>

          <Stack gap="small">
            <Text color="textLight">Notifications</Text>
            <Divider color="textLight" />
            <Link href="/docs/components/toast">Toast</Link>
          </Stack>
        </Stack>
      </nav>
    </Box>
  );
};
