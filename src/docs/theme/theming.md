# Theming

## Create your own theme

Theming in Blocks is split into two parts: tokens and component styles.

## Tokens

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
