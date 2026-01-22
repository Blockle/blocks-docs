'use client';

import { type FC, useEffect } from 'react';

export const CenterInput: FC = () => {
  useEffect(() => {
    // Should this functionality be part of Dialog, Drawer, ..?
    function onResize() {
      if (
        document.activeElement &&
        document.activeElement.nodeName === 'INPUT'
      ) {
        document.activeElement.scrollIntoView({ block: 'center' });
      }
    }

    // Scroll to active input whenever viewport changes size
    // This is most useful on mobile devices, input is not (always) visible after opening the virtual keyboard.
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return null;
};
