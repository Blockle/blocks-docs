// Funcky import, see https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/493
import { FC } from 'react';
import ReactSyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// Typing issue.. tmp workaround
const Highlighter = ReactSyntaxHighlighter as unknown as FC<
  SyntaxHighlighterProps & { style: Record<string, React.CSSProperties> }
>;

export type SyntaxHighlighterProps = {
  children: string;
  language: string;
};

export const SyntaxHighlighter: React.FC<SyntaxHighlighterProps> = ({ children, language }) => {
  return (
    <Highlighter language={language} style={docco}>
      {children}
    </Highlighter>
  );
};
