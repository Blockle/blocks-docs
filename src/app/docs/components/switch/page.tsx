import { Box, Heading, Stack, Switch, Text } from '@blockle/blocks';
import type { NextPage } from 'next';
import { Link } from '../../../../components/Link/Link';

const Page: NextPage = async () => {
  // const tokens = await readMarkdownFile('components/button/button-example');

  return (
    <Stack spacing="xlarge">
      <Stack spacing="small">
        <Heading level={1}>Switch</Heading>

        <Text tag="p">
          Tokens are the building blocks of Blockle design system. They are used to define the
          visual style of components and are the foundation of the theming system.
        </Text>
      </Stack>

      <Stack spacing="small">
        <Heading level={2}>Example</Heading>

        {/* <Markdown>{tokens}</Markdown> */}

        <Box padding="small">
          <Switch />
        </Box>
      </Stack>

      <Box display="flex" justifyContent="center">
        <Text>
          Next <Link href="/docs/theming/component">Component theming</Link>
        </Text>
      </Box>
    </Stack>
  );
};

export default Page;
