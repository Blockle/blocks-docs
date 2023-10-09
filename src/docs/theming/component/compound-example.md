```typescript
export const button = makeComponentTheme('button', {
  base: '...',
  variants: {
    variant: { ... },
    size: { ... },
  },
  compoundVariants: [
    {
      // When the variant is 'solid' and the size is 'large'
      variants: {
        variant: 'solid',
        size: 'large',
      },
      // These styles will be applied
      style: style({
        transform: 'scale(2)',
      }),
    },
  ]
});
```
