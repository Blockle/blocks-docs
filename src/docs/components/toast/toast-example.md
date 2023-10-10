```typescript
import { ToastProvider, useToast } from '@blockle/blocks';

const App = () => {
  return (
    <ToastProvider>
      <ToastExample />
    </ToastProvider>
  );
};

const ToastExample = () => {
  const { addToast } = useToast();

  return (
    <button
      onClick={() =>
        addToast({
          {/* id: 'xx', optional when provided makes this message unique */}
          type: 'success', // variant?
          message: 'Hello World!',
          body: <Text>This is a toast message</Text>,
          duration: 5000, // optional, defaults to 5000
        })
      }
    >
      Add Toast
    </button>
  );
};
```
