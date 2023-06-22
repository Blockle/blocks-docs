import { Box } from '@blockle/blocks';
import { readFile } from 'fs/promises';
import type { NextPage } from 'next';
import path from 'path';
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
    const srcPath = path.join(process.cwd(), 'src');
    contents = await readFile(`${srcPath}/docs/${group}/${id}.md`, 'utf8');
  } catch (e) {
    console.log('Failed to read file', e);
  }

  return <Markdown>{contents}</Markdown>;
};

export default Page;
