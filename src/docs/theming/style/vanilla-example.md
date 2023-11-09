```typescript
import { style } from '@vanilla-extract/css';
import { atoms } from '@blockle/blocks';

export const myClass = style([
  atoms({
    padding: ['small', 'large'],
  }),
  {
    color: '#c0c',
  },
]);
```
