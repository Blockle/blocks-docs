import { fontFace, style } from '@vanilla-extract/css';

const fontWithASyntaxHighlighter = fontFace({
  src: "url('/FontWithASyntaxHighlighter-Regular.woff2') format('woff2')",
});

export const syntaxFont = style({
  fontFamily: fontWithASyntaxHighlighter,
  color: '#f1f1f1',
});
