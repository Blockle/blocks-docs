import { Stack } from '@blockle/blocks';
import { MarkdownRenderer } from '@md-parser/react';
import { components } from './markdownComponents';

export type MarkdownProps = {
  children: string;
};

export const Markdown: React.FC<MarkdownProps> = ({ children }) => {
  return (
    <Stack gap="medium">
      <MarkdownRenderer components={components}>{children}</MarkdownRenderer>
    </Stack>
  );
};
