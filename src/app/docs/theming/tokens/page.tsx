import { Box, Heading, Stack, Text } from '@blockle/blocks';
import type { NextPage } from 'next';
import { readMarkdownFile } from '../../../../api/readFile';
import { Link } from '../../../../components/Link/Link';
import { Markdown } from '../../../../components/Markdown/Markdown';

const Page: NextPage = async () => {
  const tokens = await readMarkdownFile('theming/tokens/tokens');

  return (
    <Stack gap="xlarge">
      <Stack gap="small">
        <Heading level={1}>Tokens</Heading>

        <Text tag="p">
          Tokens are the building blocks of Blockle design system. They are used to define the
          visual style of components and are the foundation of the theming system.
        </Text>

        <Markdown>{tokens}</Markdown>
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
