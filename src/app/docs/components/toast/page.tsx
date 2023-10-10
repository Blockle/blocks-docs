import { Box, Button, Heading, Stack, Text } from '@blockle/blocks';
import type { NextPage } from 'next';
import { readMarkdownFile } from '../../../../api/readFile';
import { Link } from '../../../../components/Link/Link';
import { Markdown } from '../../../../components/Markdown/Markdown';

const Page: NextPage = async () => {
  const tokens = await readMarkdownFile('components/toast/toast-example');

  return (
    <Stack gap="xlarge">
      <Stack gap="small">
        <Heading level={1}>Toast</Heading>

        <Text as="p">
          Tokens are the building blocks of Blockle design system. They are used to define the
          visual style of components and are the foundation of the theming system.
        </Text>

        <Markdown>{tokens}</Markdown>
      </Stack>

      <Stack gap="small">
        <Heading level={2}>Example</Heading>

        <Box display="flex" justifyContent="center" gap="medium">
          <Button variant="solid">Show toast</Button>
          <Button variant="solid" intent="danger">
            Show toast
          </Button>
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
