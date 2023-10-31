import { Box, Heading, Stack, Text } from '@blockle/blocks';
import type { NextPage } from 'next';
import { readMarkdownFile } from '../../../../api/readFile';
import { Link } from '../../../../components/Link/Link';
import { Markdown } from '../../../../components/Markdown/Markdown';

const Page: NextPage = async () => {
  const makeThemeExample = await readMarkdownFile('theming/make-theme-example');

  return (
    <Stack gap="xlarge">
      <Stack gap="small">
        <Heading level={1}>Creating your own Theme</Heading>
        <Text tag="p">
          <Text fontWeight="strong" color="secondary">
            @blockle/blocks
          </Text>{' '}
          is built using a theming system that allows you to customize the appearance of the
          components to match your brand.
        </Text>
        <Text tag="p">
          The theme object is a collection of tokens and component themes. Tokens are used to define
          the base styles. Component themes are used to define the variants and styling rules for
          each component.
        </Text>
      </Stack>

      <Stack gap="small">
        <Heading level={2}>makeTheme</Heading>
        <Text tag="p">
          To create a theme, you can use <code>makeTheme()</code>.
          <br />
          The result is a theme object that can be used with the <code>ThemeProvider</code>.
        </Text>
        <Markdown>{makeThemeExample}</Markdown>
      </Stack>

      <Text tag="p">
        For a complete examples of component theming and tokens, see{' '}
        <Link
          href="https://github.com/Blockle/blocks/tree/main/src/themes/momotaro"
          target="_blank"
        >
          GitHub
        </Link>
        .
      </Text>

      <Box display="flex" justifyContent="center">
        <Text>
          Next <Link href="/docs/theming/tokens">Theming tokens</Link>
        </Text>
      </Box>
    </Stack>
  );
};

export default Page;
