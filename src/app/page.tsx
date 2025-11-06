import { Box, Heading, Stack, Text, Tooltip } from '@blockle/blocks';
import type { NextPage } from 'next';

import { Link } from '../components/Link/Link';

const HomePage: NextPage = () => {
  return (
    <Box padding={6}>
      <Stack gap={4} alignX="center">
        <Heading level={1}>
          Build accessible React apps with{' '}
          <Text fontWeight="strong" color="secondary-500">
            @blockle/blocks
          </Text>
        </Heading>

        <Text tag="p">
          <Text tag="strong" fontWeight="strong">
            @blockle/blocks
          </Text>{' '}
          is a design system for React written in TypeScript and
          vanilla-extract.
        </Text>

        <Stack gap={2} alignX="center">
          <Tooltip content="Continue to learn more">
            <span>
              <Link href="/docs">Get started</Link>
            </span>
          </Tooltip>
        </Stack>
      </Stack>
    </Box>
  );
};

export default HomePage;
