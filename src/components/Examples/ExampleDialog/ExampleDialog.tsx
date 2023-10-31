'use client';

import { Button, Dialog, Heading, Stack, Text } from '@blockle/blocks';
import { FC, useState } from 'react';

export const ExampleDialog: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="solid" onClick={() => setOpen(true)}>
        Open dialog
      </Button>
      <Dialog open={open} onRequestClose={() => setOpen(false)}>
        <Stack gap="large">
          <Stack gap="xsmall">
            <Heading level={1}>Dialog</Heading>

            <Text tag="p">
              Dialog is a component that is used to display content on top of the current page.
            </Text>
          </Stack>

          <Button variant="solid" onClick={() => setOpen(false)}>
            Close dialog
          </Button>
        </Stack>
      </Dialog>
    </>
  );
};
