import { style } from '@vanilla-extract/css';

// const layerName = globalLayer('framework');

export const frameworkStyle = style({
  // '@layer': {
  //   [layerName]: {
  //     color: 'red',
  //   },
  // },
  color: 'pink',
});

export const appStyle = style({
  color: 'blue',
});
