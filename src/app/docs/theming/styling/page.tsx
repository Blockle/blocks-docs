import { Heading, Stack, Switch, Text } from '@blockle/blocks';
import type { NextPage } from 'next';
import { readMarkdownFile } from '../../../../api/readFile';
import { Link } from '../../../../components/Link/Link';
import { Markdown } from '../../../../components/Markdown/Markdown';

const Page: NextPage = async () => {
  const vanillaExample = await readMarkdownFile('theming/style/vanilla-example');
  const blocksExample = await readMarkdownFile('theming/style/blocks-example');

  return (
    <Stack spacing="xlarge">
      <Stack spacing="small">
        <Switch />

        <Heading level={1}>Styling with Blocks</Heading>
        <Text tag="p">
          When it comes to styling your components with Blocks, the process is made effortless
          through the <code>style</code> function. This function accepts a blend of atoms and raw
          CSS values as its parameters.
        </Text>
        <Text tag="p">
          This function is a drop-in replacement for the <code>style</code> function from{' '}
          <Link href="https://vanilla-extract.style/" target="_blank" rel="noopener">
            @vanilla-extract/css
          </Link>
          .
        </Text>
      </Stack>

      <Stack spacing="small">
        <Heading level={2}>Example</Heading>
        <Text tag="p">
          Let&apos;s dive into an example. Instead of the somewhat intricate code structure using
          atoms and @vanilla-extract/css:
        </Text>
        <Markdown>{vanillaExample}</Markdown>

        <Text tag="p">With Blocks, you can achieve the same outcome with cleaner code:</Text>
        <Markdown>{blocksExample}</Markdown>

        <Text tag="p">
          Simply replace the style function from <code>@vanilla-extract/css</code> with Blocks{' '}
          <code>style</code> function. They share the same arguments and produce identical results.
          The only distinction is that with Blocks, you can use atoms directly, eliminating the need
          to wrap them in the atoms function. Streamlining your styling process.
        </Text>
      </Stack>

      <Stack spacing="small">
        <Heading level={2}>Limitations</Heading>
        <Text tag="p">
          Atoms can only be used in the root level of the style object. This means that you cannot
          use atoms in selectors or complexer style objects. For example:
        </Text>
        <Markdown>{`
\`\`\`typescript
import { style, vars } from '@blockle/blocks';

const styles = style({
  // ✅ Works
  color: 'primary',
  ':hover': {
    // ❌ Does not work
    color: 'secondary',
  },
});
\`\`\`
          `}</Markdown>
        <Text tag="p">
          To workaround this, you can use <code>vars</code> from <code>@blockle/blocks</code>{' '}
          instead. For example:
        </Text>
        <Markdown>{`
\`\`\`typescript
import { style, vars } from '@blockle/blocks';

const styles = style({
  // ✅ Works
  color: 'primary',
  ':hover': {
    // ✅ Works
    color: vars.color.secondary,
  },
});
\`\`\`
          `}</Markdown>
      </Stack>
    </Stack>
  );
};

export default Page;
