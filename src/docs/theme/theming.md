# Theming

## Create your own theme

Theming in Blocks is split into two parts: tokens and component styles.

## Tokens

Tokens are the building blocks of your theme. They are used to define the values of your theme, such as colors, spacing, and typography. Tokens are passed to the `makeTheme` function to create a theme.

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

Component styles are used to define the styles of components in your theme. They are passed to the `makeTheme` function to create a theme.

Every component can be styled using the `componentStyles` object. The key of the object is the name of the component, and the value is a function that returns the styles for that component.

In this example we are styling the `Button` component. The `base` object contains the base styles for the component. The `variants` object contains styles for different variants of the component. The `compoundVariants` object contains styles for combinations of variants. The `defaultVariants` object contains the default variants for the component.

Note that when styling a component, you have to work with the variants that are defined in the component. For example, if the `Button` component has a `size` variant, you can't use the `size` variant.

```ts
export const button = makeComponentTheme({
  // Name of the component
  type: 'button',
  // Base styles for the component
  base: {
    // ...
  },
  // Styles for different variants of the component
  variants: {
    // ...
  },
  compoundVariants: {
    // ...
  },
  defaultVariants: {
    // ...
  },
});
```

## Putting it all together

_`myTheme.css.ts`_

```tsx
import { makeTheme } from '@blockle/blocks';
import { tokens } from './tokens';
import { components } from './components';

export const theme = makeTheme({
  name: 'myTheme',
  tokens,
  components,
});
```

## Using a theme with react context

```tsx
import { theme } from '@blockle/blocks/themes/momotaro';
import { BlocksProvider, Button } from '@blockle/blocks';

const App = () => (
  <ThemeProvider theme={theme}>
    <Button>Click me</Button>
  </ThemeProvider>
);
```

## Using with SSR

To use `@blockle/blocks` with Server Side Rendering, you need to use `setGlobalTheme` function. This will set the theme globally, so you don't need to use `ThemeProvider` in your app.

```ts
import { setGlobalTheme } from '@blockle/blocks';
import { theme } from '@blockle/blocks/themes/momotaro';

setGlobalTheme(theme);
```

Note `setGlobalTheme` and `BlocksProvider` can be used together. You probably won't need to use both.

## Extending a theme ??
