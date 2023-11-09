```typescript
import { createVar } from '@vanilla-extract/css';
import { makeComponentTheme, atoms, vars, style } from '@blockle/blocks';

const primaryColor = createVar();

export const button = makeComponentTheme('button', {
  base: style({
    display: 'inline-flex',
  }),
  variants: {
    variant: {
      solid: style({
        color: vars.color.white,
        backgroundColor: primaryColor,
        border: 'none',
      }),
      outline: style({
        color: primaryColor,
        borderWidth: 'small',
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
        paddingX: 'large',
        height: 40,
      }),
      medium: style({
        paddingX: 'xlarge',
        height: 56,
      }),
      large: style({
        paddingX: 'xlarge',
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
