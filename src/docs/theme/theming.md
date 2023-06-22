# Theming

## Create your own theme

Theming in Blocks is split into two parts: tokens and component styles.

## Tokens

```ts
import { BlocksTokens } from '@blockle/blocks';

export const tokens: BlocksTokens = {
  border: {
    radius: {
      small: '4px',
      medium: '8px',
      large: '16px',
      xlarge: '32px',
    },
    width: {
      small: '1px',
      medium: '2px',
      large: '4px',
    },
  },
  color: {
    white: '#fff',
    black: '#000',
    body: '#F4F6FA',
    primaryLight: '#E4DFFF',
    primary: '#7265E3',
    primaryDark: '#4D3CAB',
    secondaryLight: '#7265E3',
    secondary: '#7FE3F0',
    secondaryDark: '#4D3CAB',
    text: '#2D3142',
    textLight: '#9C9EB9',
    textDark: '#4C5980',
    caution: '#FF9B90',
    link: '#7265E3',
  },
  shadow: {
    small: '0px 4px 8px rgba(0, 0, 0, 0.08)',
    medium: '0px 8px 16px rgba(0, 0, 0, 0.08)',
    large: '0px 16px 24px rgba(0, 0, 0, 0.08)',
  },
  space: {
    none: '0px',
    gutter: '28px',
    xsmall: '4px',
    small: '8px',
    medium: '12px',
    large: '16px',
    xlarge: '24px',
  },
  transition: {
    slow: '0.5s',
    normal: '0.3s',
    fast: '0.1s',
  },
  typography: {
    fontFamily: {
      standard: '"Rubik", sans-serif',
      secondary: '"Rubik", sans-serif',
    },
    fontSize: {
      xsmall: '12px',
      small: '14px',
      medium: '16px',
      large: '20px',
      xlarge: '24px',
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      strong: 700,
    },
    lineHeight: {
      xsmall: '1rem',
      small: '1.25rem',
      medium: '1.5rem',
      large: '1.75rem',
      xlarge: '2rem',
    },
  },
};
```

## Component styles

## Putting it all together

_`myTheme.css.ts`_

```tsx
import { makeTheme } from '@blockle/blocks';
import { tokens } from './tokens';
// Add component styles here

export const theme = makeTheme({
  name: 'myTheme',
  tokens,
});
```

## Using an existing theme

```tsx
import { theme } from '@blockle/blocks/themes/momotaro';
import { BlocksProvider, Button } from '@blockle/blocks';

const App = () => (
  <ThemeProvider theme={theme}>
    <Button>Click me</Button>
  </ThemeProvider>
);
```

## Extending a theme
