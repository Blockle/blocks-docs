export type SyntaxHighlighterProps = { children: string; language: string };
import * as styles from './SyntaxHighlighter.css';

export const SyntaxHighlighter: React.FC<SyntaxHighlighterProps> = ({ children, language }) => {
  return <pre className={styles.syntaxFont}>{children}</pre>;
};
