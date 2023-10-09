# Theming

## Create your own theme

Theming in Blocks is split into two parts: tokens and component styles.

## Tokens

Tokens are the building blocks of your theme. They are used to define the values of your theme, such as colors, spacing, and typography. Tokens are passed to the `makeTheme` function to create a theme.

```typescript
import { BlocksTokens } from 'lib/css/theme/tokenType';

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
    danger: '#FF9B90',
    link: '#7265E3',
  },
  shadow: {
    small: '0px 4px 8px rgba(0, 0, 0, 0.08)',
    medium: '0px 8px 16px rgba(0, 0, 0, 0.08)',
    large: '0px 16px 24px rgba(0, 0, 0, 0.08)',
  },
  focus: {
    boxShadow: '0 0 4px 2px #AF8EFF',
  },
  spacing: {
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
      primary: '"Rubik", sans-serif',
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

_`components/button.ts`_

```typescript
export const button = makeComponentTheme('button', {
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

Then combine all the component styles into one object.

_`components/index.ts`_

```typescript
import { button } from './button.css';

export const components = {
  button,
  // ...
} as const;
```

## Putting it all together

_`myTheme.css.ts`_

```typescript
import { makeTheme } from '@blockle/blocks';
import { tokens } from './tokens';
import { components } from './components';

export const myTheme = makeTheme({
  name: 'myTheme',
  tokens,
  components,
});
```
