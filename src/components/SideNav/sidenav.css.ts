import { breakpointQuery, style } from '@blockle/blocks';

export const container = style({
  minWidth: 220,
  position: 'absolute',
  transform: 'translateX(-100%)',
  background: 'white',
  boxShadow: 'medium',
  overflow: 'auto',
  zIndex: 1,
  selectors: {
    '&[data-open="true"]': {
      transform: 'translateX(0)',
      opacity: 1,
    },
  },
  '@media': {
    '(prefers-reduced-motion: no-preference)': {
      opacity: 0,
      transition: 'all 160ms',
    },
    [breakpointQuery('tablet')]: {
      position: 'static !important' as 'static',
      opacity: 1,
      transform: 'unset',
    },
  },
});
