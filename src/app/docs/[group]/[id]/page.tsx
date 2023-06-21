import { Box } from '@blockle/blocks';
import { readFile } from 'fs/promises';
import type { NextPage } from 'next';
import { Markdown } from '../../../../components/Markdown/Markdown';
import { validParams } from '../../../../utils/readMarkdown';

type Params = {
  group: string;
  id: string;
};

const Page: NextPage<{ params: Params }> = async ({ params: { group, id } }) => {
  if (!validParams(group, id)) {
    return (
      <Box>
        <pre>Invalid params</pre>
      </Box>
    );
  }

  let contents = '404';

  try {
    contents = await readFile(`src/docs/${group}/${id}.md`, 'utf8');
  } catch (e) {
    console.log(e);
  }

  return (
    <Box>
      <Markdown>{contents}</Markdown>
    </Box>
  );
};

export default Page;
