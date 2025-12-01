import { Box } from '@blockle/blocks';
import { Prism as ReactSyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export type SyntaxHighlighterProps = {
  children: string;
  language: string;
};

export const SyntaxHighlighter: React.FC<SyntaxHighlighterProps> = ({
  children,
  language,
}) => {
  if (ReactSyntaxHighlighter.supportedLanguages.indexOf(language) === -1) {
    throw new Error(`Unsupported language "${language}" for SyntaxHighlighter`);
  }

  return (
    <Box asChild fontSize="small">
      <ReactSyntaxHighlighter
        language={language}
        style={a11yDark}
        useInlineStyles={true}
      >
        {children}
      </ReactSyntaxHighlighter>
    </Box>
  );
};
