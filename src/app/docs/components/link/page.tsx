import { Link } from '@blockle/blocks';
import type { NextPage } from 'next';
import { Markdown } from '../../../../components/Markdown/Markdown';

const Page: NextPage = async () => {
  return (
    <>
      <Markdown>
        {`
# Links

## Usage

\`\`\`tsx
import { Link } from '@blockle/blocks';

const Page = () => {
  return (
    <Link href="/">Home</Link>
  );
};
\`\`\`
        `}
      </Markdown>

      <Link href="javascript:;">Home</Link>
    </>
  );
};

export default Page;
