// Funcky import, see https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/493
import { Prism } from 'react-syntax-highlighter';
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { ghcolors } from 'react-syntax-highlighter/dist/esm/styles/prism';

export type SyntaxHighlighterProps = { children: string; language: string };

export const SyntaxHighlighter: React.FC<SyntaxHighlighterProps> = ({ children, language }) => {
  return (
    <Prism language={language} style={ghcolors}>
      {children}
    </Prism>
  );
};
