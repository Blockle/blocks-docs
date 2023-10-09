'use client';

import { Box, Button } from '@blockle/blocks';
import { FC } from 'react';
import { Markdown } from '../Markdown/Markdown';

export type CopyCodeBlockProps = {
  children: string;
  language: 'sh' | 'ts' | 'tsx';
};

export const CopyCodeBlock: FC<CopyCodeBlockProps> = ({ children, language }) => {
  // Render as markdown for syntax highlighting
  const markdown = '```' + language + '\n' + children + '\n```';

  return (
    <Box display="flex" gap="large" justifyContent="space-between" alignItems="center">
      <Box flexGrow={1}>
        <Markdown markdown={markdown} />
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
