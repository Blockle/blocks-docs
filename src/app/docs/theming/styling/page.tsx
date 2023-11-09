import { Heading, Stack, Text } from '@blockle/blocks';
import type { NextPage } from 'next';
import { readMarkdownFile } from '../../../../api/readFile';
import { Link } from '../../../../components/Link/Link';
import { Markdown } from '../../../../components/Markdown/Markdown';

const Page: NextPage = async () => {
  const vanillaExample = await readMarkdownFile('theming/style/vanilla-example');
  const blocksExample = await readMarkdownFile('theming/style/blocks-example');

  return (
    <Stack gap="xlarge">
      <Stack gap="small">
        <Heading level={1}>Styling</Heading>
        <Text tag="p">
          With blocks, you can style your components using the <code>style</code> function. This
          function takes a combination of atoms and raw CSS values as arguments.
        </Text>
        <Text tag="p">
          This function is a drop-in replacement for the <code>style</code> function from{' '}
          <Link href="https://vanilla-extract.style/" target="_blank" rel="noopener">
            @vanilla-extract/css
          </Link>
          .
        </Text>
      </Stack>

      <Stack gap="small">
        <Heading level={2}>Example</Heading>
        <Text tag="p">
          So instead of writing code like this where we need to use <code>atoms</code> and the code
          becomes somewhat harder to read:
        </Text>
        <Markdown>{vanillaExample}</Markdown>

        <Text tag="p">
          With the <code>style</code> function of blocks, we can write the same code like this:
        </Text>
        <Markdown>{blocksExample}</Markdown>

        <Text tag="p">
          Here we replaced the <code>style</code> function from <code>@vanilla-extract/css</code>{' '}
          with the <code>style</code> function from blocks. It takes the same arguments and returns
          the same result. The only difference is that you can use atoms directly instead of having
          to wrap them in the <code>atoms</code> function.
        </Text>
      </Stack>
    </Stack>
  );
};

export default Page;
