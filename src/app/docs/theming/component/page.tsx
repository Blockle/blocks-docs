import { Heading, Stack, Text } from '@blockle/blocks';
import type { NextPage } from 'next';
import { readMarkdownFile } from '../../../../api/readFile';
import { Link } from '../../../../components/Link/Link';
import { Markdown } from '../../../../components/Markdown/Markdown';

const Page: NextPage = async () => {
  const buttonExample = await readMarkdownFile('theming/component/button-example');
  const compoundExample = await readMarkdownFile('theming/component/compound-example');

  return (
    <Stack gap="xlarge">
      <Stack gap="small">
        <Heading level={1}>Component theming</Heading>
        <Text as="p">
          Blockle components are built using a theming system that allows you to customize the
          appearance of the components to match your brand.
        </Text>
      </Stack>

      <Stack gap="small">
        <Heading level={2}>Button example</Heading>
        <Text as="p">
          Below is an example of a button component with a custom theme applied. To create a theme
          for a specific component, you can use <code>makeComponentTheme()</code>. This function
          takes a component name and a theme object.
        </Text>
        <Text as="p">We set the base styles and variants for the button component.</Text>
        <Text as="p">
          The default variants can be specficied with <code>defaultVariants</code>
        </Text>
        <Markdown>{buttonExample}</Markdown>
      </Stack>

      <Stack gap="small">
        <Heading level={2}>Compound variants</Heading>
        <Text as="p">
          To apply custom styling rules to a combination of variants, you can use compound variants.
        </Text>
        <Markdown>{compoundExample}</Markdown>
      </Stack>

      <Text as="p">
        For more examples of component theming, see{' '}
        <Link
          href="https://github.com/Blockle/blocks/tree/main/src/themes/momotaro/components"
          target="_blank"
        >
          GitHub
        </Link>
        .
      </Text>
    </Stack>
  );
};

export default Page;
