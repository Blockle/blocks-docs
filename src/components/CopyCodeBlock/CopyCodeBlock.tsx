'use client';

import { Alert, Box, Button, Toast } from '@blockle/blocks';
import { type FC, useState } from 'react';

import { SyntaxHighlighter } from '../SyntaxHighlighter/SyntaxHighlighter';

export type CopyCodeBlockProps = {
  children: string;
  language: 'bash' | 'ts' | 'tsx';
};

export const CopyCodeBlock: FC<CopyCodeBlockProps> = ({
  children,
  language,
}) => {
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'error'>(
    'idle',
  );

  return (
    <Box
      display="flex"
      gap={4}
      justifyContent="space-between"
      alignItems="center"
    >
      <Box flexGrow={1}>
        <SyntaxHighlighter language={language}>{children}</SyntaxHighlighter>
      </Box>

      <Button
        size="small"
        variant="solid"
        onClick={() => {
          navigator.clipboard.writeText(children).then(
            () => {
              setCopyState('copied');
            },
            () => {
              setCopyState('error');
            },
          );
        }}
      >
        COPY
      </Button>

      <Toast
        open={copyState !== 'idle'}
        onRequestClose={() => setCopyState('idle')}
        duration={3000}
      >
        <Alert
          intent={copyState === 'error' ? 'error' : 'success'}
          open
          onRequestClose={() => setCopyState('idle')}
        >
          {copyState === 'copied'
            ? 'Copied to clipboard'
            : 'Failed to copy to clipboard'}
        </Alert>
      </Toast>
    </Box>
  );
};
