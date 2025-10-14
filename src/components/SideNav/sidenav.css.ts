import { atoms, minMediaQuery } from '@blockle/blocks';
import { style } from '@vanilla-extract/css';

export const container = style([
  atoms({ backgroundColor: 'white', boxShadow: 'medium', overflow: 'auto' }),
  {
    position: 'absolute',
    minWidth: 220,
    transform: 'translateX(-100%)',
    zIndex: 1,
    selectors: { '&[data-open="true"]': { transform: 'translateX(0)', opacity: 1 } },
    '@media': {
      '(prefers-reduced-motion: no-preference)': {
        opacity: 0,
        transition: 'transform 160ms, opacity 160ms',
      },
      [minMediaQuery('desktop')]: { position: 'static', opacity: 1, transform: 'unset' },
    },
  },
]);
