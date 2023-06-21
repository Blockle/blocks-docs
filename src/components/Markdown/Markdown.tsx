import { MarkdownRenderer } from '@md-parser/react';
import { components } from './markdownComponents';

export type MarkdownProps = {
  children: string;
};

export const Markdown: React.FC<MarkdownProps> = ({ children }) => {
  return <MarkdownRenderer components={components}>{children}</MarkdownRenderer>;
};
