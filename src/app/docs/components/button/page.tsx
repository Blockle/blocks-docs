import { Button } from '@blockle/blocks';
import type { NextPage } from 'next';
import { Markdown } from '../../../../components/Markdown/Markdown';

const Page: NextPage = async () => {
  return (
    <>
      <Markdown>
        {`
# Button

## Usage

\`\`\`tsx
import { Button } from '@blockle/blocks';

const Page = () => {
  return (
    <Button variant="solid">Button</Button>
  );
};
\`\`\`
        `}
      </Markdown>

      <Button variant="solid">Button</Button>
    </>
  );
};

export default Page;
