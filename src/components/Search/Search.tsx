'use client';

import { Box, Button, Dialog, Input, Stack } from '@blockle/blocks';
import { FC, useState } from 'react';

export const Search: FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <Box>
      <Button
        type="button"
        variant="solid"
        intent="danger"
        onClick={() => {
          setDialogOpen(true);
        }}
      >
        🔍 Search
      </Button>

      <Dialog open={dialogOpen} onRequestClose={() => setDialogOpen(false)}>
        <Stack gap="large">
          <Input
            name="search"
            placeholder="Search"
            autoFocus
            startSlot={<Box marginLeft="medium">🔍</Box>}
          />

          <Box>RESULTS</Box>
        </Stack>
      </Dialog>
    </Box>
  );
};
