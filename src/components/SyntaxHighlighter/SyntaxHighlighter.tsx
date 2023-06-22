// Funcky import, see https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/493
import ReactSyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export type SyntaxHighlighterProps = {
  children: string;
  language: string;
};

export const SyntaxHighlighter: React.FC<SyntaxHighlighterProps> = ({ children, language }) => {
  return (
    <ReactSyntaxHighlighter language={language} style={docco}>
      {children}
    </ReactSyntaxHighlighter>
  );
};
