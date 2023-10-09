```typescript
import { createVar, style } from '@vanilla-extract/css';
import { makeComponentTheme, atoms, vars } from '@blockle/blocks';

const primaryColor = createVar();

export const button = makeComponentTheme('button', {
  base: style([
    atoms({
      display: 'inline-flex',
    }),
  ]),
  variants: {
    variant: {
      solid: style({
        color: vars.color.white,
        backgroundColor: primaryColor,
        border: 'none',
      }),
      outline: style({
        color: primaryColor,
        borderWidth: vars.borderWidth.small,
        borderStyle: 'solid',
        borderColor: primaryColor,
        background: 'transparent',
      }),
      ghost: style({
        color: primaryColor,
        background: 'transparent',
      }),
    },
    size: {
      small: style({
        height: 40,
      }),
      medium: style({
        height: 56,
      }),
      large: style({
        height: 72,
      }),
    },
    intent: {
      neutral: style({
        vars: {
          [primaryColor]: vars.color.primary,
        },
      }),
      danger: style({
        vars: {
          [primaryColor]: vars.color.danger,
        },
      }),
    },
  },
  defaultVariants: {
    size: 'small',
    variant: 'ghost',
    intent: 'neutral',
  },
});
```
