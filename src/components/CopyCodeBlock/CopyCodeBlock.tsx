'use client';

import { Box, Button, useToast } from '@blockle/blocks';
import type { FC } from 'react';

import { SyntaxHighlighter } from '../SyntaxHighlighter/SyntaxHighlighter';

export type CopyCodeBlockProps = {
  children: string;
  language: 'bash' | 'ts' | 'tsx';
};

export const CopyCodeBlock: FC<CopyCodeBlockProps> = ({
  children,
  language,
}) => {
  const { showToast } = useToast();

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
              showToast({
                children: 'Copied to clipboard',
                intent: 'success',
                duration: 3000,
              });
            },
            () => {
              showToast({
                children: 'Failed to copy to clipboard',
                intent: 'error',
                duration: 3000,
              });
            },
          );
        }}
      >
        COPY
      </Button>
    </Box>
  );
};
