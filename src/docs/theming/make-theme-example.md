```typescript
import { makeTheme } from '@blockle/blocks';

// Local imports to your theme files
import { components } from './components';
import { tokens } from './tokens.css';

export const myTheme = makeTheme({
  name: 'MyTheme',
  tokens,
  components,
});
```
