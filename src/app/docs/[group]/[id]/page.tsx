import { Box } from '@blockle/blocks';

import { Markdown } from '../../../../components/Markdown/Markdown';
import { validParams } from '../../../../utils/readMarkdown';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

type Params = { group: string; id: string };

type PageProps = {
  params: Promise<Params>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const Page = async ({ params }: PageProps) => {
  const { group, id } = await params;

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
