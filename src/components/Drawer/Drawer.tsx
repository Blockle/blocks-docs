// import { useVisibilityState } from '@blockle/blocks';
import { Box } from '@blockle/blocks';
import { FC, ReactNode, useState } from 'react';

export type DrawerProps = {
  children?: ReactNode;
  onRequestClose: () => void;
  open: boolean;
};

export const Drawer: FC<DrawerProps> = ({ children, onRequestClose, open }) => {
  const [visible, setVisible] = useState(open);
  // const { visible, hide } = useVisibilityState(open);

  if (!visible) {
    return null;
  }

  return <Box>Drawer</Box>;
};
