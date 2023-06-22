import { Stack } from '@blockle/blocks';
import { GFM } from '@md-parser/parser';
import { MarkdownRenderer } from '@md-parser/react';
import { components } from './markdownComponents';

export type MarkdownProps = {
  children: string;
};

export const Markdown: React.FC<MarkdownProps> = ({ children }) => {
  return (
    <Stack gap="medium">
      <MarkdownRenderer presets={GFM()} components={components}>
        {children}
      </MarkdownRenderer>
    </Stack>
  );
};
