'use client';

import { Box, Button, Dialog, Stack, TextInput } from '@blockle/blocks';
import { type FC, useState } from 'react';

export const Search: FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <Button
        type="button"
        intent="neutral"
        onClick={() => {
          setDialogOpen(true);
        }}
      >
        🔍 Search
      </Button>

      <Dialog open={dialogOpen} onRequestClose={() => setDialogOpen(false)}>
        <Stack gap={4}>
          <TextInput
            name="search"
            placeholder="Search"
            autoFocus
            startSlot={<Box marginInlineStart={2}>🔍</Box>}
          />

          <Box>RESULTS</Box>
        </Stack>
      </Dialog>
    </>
  );
};
