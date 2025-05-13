import { Heading, Stack } from '@blockle/blocks';
import type { NextPage } from 'next';
import { CopyCodeBlock } from '../../components/CopyCodeBlock/CopyCodeBlock';

const GetStartedPage: NextPage = () => {
  return (
    <>
      <Stack tag="section" spacing="medium">
        <Heading level={1}>Get started</Heading>
        <Heading level={2}>Install</Heading>
        <Heading level={3}>NPM</Heading>
        <CopyCodeBlock language="bash">npm install @blockle/blocks</CopyCodeBlock>
        <Heading level={3}>Yarn</Heading>
        <CopyCodeBlock language="bash">yarn add @blockle/blocks</CopyCodeBlock>
        Vanilla extract
      </Stack>
    </>
  );
};

export default GetStartedPage;
