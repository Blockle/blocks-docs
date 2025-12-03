import { createIconMask } from '@blockle/blocks';

import type { HeroIconName } from './heroicons';

function getIconUrl(name: HeroIconName): string {
  return `/heroicons/outline/${name}.svg`;
}

// Create a HeroIcon component with the icon URL resolver
export const HeroIcon = createIconMask(getIconUrl);
