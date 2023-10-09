import { Stack } from '@blockle/blocks';
import { GFM } from '@md-parser/parser';
import { MarkdownRenderer } from '@md-parser/react';
import { components } from './markdownComponents';

export type MarkdownProps = {
  children?: string;
  markdown?: string;
};

export const Markdown: React.FC<MarkdownProps> = ({ children, markdown }) => {
  return (
    <Stack gap="medium">
      <MarkdownRenderer presets={GFM()} components={components}>
        {children || markdown || ''}
      </MarkdownRenderer>
    </Stack>
  );
};
