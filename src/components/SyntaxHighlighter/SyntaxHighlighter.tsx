export type SyntaxHighlighterProps = { children: string; language: string };

// TODO Geimplemnt syntax highlighting
export const SyntaxHighlighter: React.FC<SyntaxHighlighterProps> = ({ children, language }) => {
  return <pre>{children}</pre>;
};
