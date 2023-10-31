import { Box, Button, Heading, Stack, Text } from '@blockle/blocks';
import type { NextPage } from 'next';
import { readMarkdownFile } from '../../../../api/readFile';
import { Link } from '../../../../components/Link/Link';
import { Markdown } from '../../../../components/Markdown/Markdown';

const Page: NextPage = async () => {
  const tokens = await readMarkdownFile('components/button/button-example');

  return (
    <Stack gap="xlarge">
      <Stack gap="small">
        <Heading level={1}>Button</Heading>

        <Text tag="p">
          Tokens are the building blocks of Blockle design system. They are used to define the
          visual style of components and are the foundation of the theming system.
        </Text>
      </Stack>

      <Stack gap="small">
        <Heading level={2}>Example</Heading>

        <Markdown>{tokens}</Markdown>

        <Box padding="small">
          <Button variant="solid">Button text</Button>
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
