import { Box, Heading, Stack, Text } from '@blockle/blocks';
import type { NextPage } from 'next';
import { Link } from '../components/Link/Link';

const HomePage: NextPage = () => {
  return (
    <Box padding="gutter">
      <Stack gap="large" alignX="center">
        <Heading level={1}>
          Build acccesible React apps with{' '}
          <Text fontWeight="strong" color="secondary">
            @blockle/blocks
          </Text>
        </Heading>

        <Text as="p">
          <Text as="strong" fontWeight="strong">
            @blockle/blocks
          </Text>{' '}
          is a design system for React written in TypeScript and vanilla-extract.
        </Text>

        <Stack gap="small" alignX="center">
          <Link href="/docs">Get started</Link>
        </Stack>
      </Stack>
    </Box>
  );
};

export default HomePage;
