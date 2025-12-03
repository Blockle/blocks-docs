'use client';

import { Box, Button, Dialog, Stack, TextInput } from '@blockle/blocks';
import { type FC, useState } from 'react';

import { HeroIcon } from '../HeroIcon/HeroIcon';

export const Search: FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <Button
        type="button"
        intent="secondary"
        size="small"
        onClick={() => {
          setDialogOpen(true);
        }}
        endSlot={<HeroIcon name="magnifying-glass" size="small" />}
      >
        Search
      </Button>

      <Dialog open={dialogOpen} onRequestClose={() => setDialogOpen(false)}>
        <Stack gap={4}>
          <TextInput
            name="search"
            placeholder="Search"
            autoFocus
            startSlot={<HeroIcon name="magnifying-glass" size="small" />}
          />

          <Box>RESULTS</Box>
        </Stack>
      </Dialog>
    </>
  );
};
