import { Box } from '@blockle/blocks';
import type { NextPage } from 'next';

type Params = {
  group: string;
  id: string;
};

const Page: NextPage<{ params: Params }> = ({ params: { group, id } }) => {
  return (
    <Box>
      {/* <Heading level={1}>Homepage</Heading> */}

      <div style={{ height: 1000 }}>
        {group} - {id}
      </div>
    </Box>
  );
};

// export async function generateStaticParams() {
//   const groups = [
//     'theme',
//     'layout',
//     'forms',
//     'typography',
//     'icons',
//     'utilities',
//     'hooks',
//     'components',
//   ];
//   const ids = ['getting-started', 'usage', 'customization', 'contributing'];

//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// }

export default Page;
