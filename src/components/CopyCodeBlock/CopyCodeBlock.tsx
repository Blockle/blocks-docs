'use client';

import { Box, Button } from '@blockle/blocks';
import type { FC } from 'react';
import { SyntaxHighlighter } from '../SyntaxHighlighter/SyntaxHighlighter';

export type CopyCodeBlockProps = { children: string; language: 'bash' | 'ts' | 'tsx' };

export const CopyCodeBlock: FC<CopyCodeBlockProps> = ({ children, language }) => {
  return (
    <Box display="flex" gap="large" justifyContent="space-between" alignItems="center">
      <Box flexGrow={1}>
        <SyntaxHighlighter language={language}>{children}</SyntaxHighlighter>
      </Box>

      <Button
        size="small"
        variant="solid"
        onClick={() => {
          navigator.clipboard.writeText(children).then(
            () => {
              // TODO Should show a toast instead of an alert
              alert('Copied to clipboard');
            },
            () => {
              // TODO Should show a toast instead of an alert
              alert('Failed to copy to clipboard');
            },
          );
        }}
      >
        COPY
      </Button>
    </Box>
  );
};
