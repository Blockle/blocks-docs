import { Box, Heading, Stack, Text } from '@blockle/blocks';
import type { NextPage } from 'next';
import { readMarkdownFile } from '../../../../api/readFile';
import { Link } from '../../../../components/Link/Link';
import { Markdown } from '../../../../components/Markdown/Markdown';

const Page: NextPage = async () => {
  const makeThemeExample = await readMarkdownFile('theming/make-theme-example');

  return (
    <Stack spacing="xlarge">
      <Stack spacing="small">
        <Heading level={1}>Customizing Your Theme with @blockle/blocks</Heading>
        <Text tag="p">
          <code>@blockle/blocks</code> comes equipped with a versatile theming system, empowering
          you to tailor the look of its components to align seamlessly with your brand.
        </Text>
        <Text tag="p">
          The theme object acts as a repository for tokens and component themes. Tokens set the
          groundwork for base styles, while component themes specify variations and styling rules
          for individual components.
        </Text>
      </Stack>

      <Stack spacing="small">
        <Heading level={2}>Creating a Theme</Heading>
        <Text tag="p">
          Crafting a theme is a breeze with <code>makeTheme</code>. This function yields a theme
          object that seamlessly integrates with the ThemeProvider.
        </Text>
        <Markdown>{makeThemeExample}</Markdown>
      </Stack>

      <Text tag="p">
        For comprehensive examples of component theming and tokens, refer to our GitHub repository.{' '}
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
