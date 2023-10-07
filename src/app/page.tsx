import { Box } from '@blockle/blocks';
import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <Box>
      <menu>
        <ul>
          <li>
            <Link href="/docs">Get started (404)</Link>
          </li>
          <li>
            <Link href="/docs/theme/theming">Theming</Link>
          </li>
          <li>Layout</li>
          <ul>
            <li>
              <Link href="/docs/layout/box">Box</Link>
            </li>
            <li>
              <Link href="/docs/layout/stack">Stack</Link>
            </li>
            <li>
              <Link href="/docs/layout/inline">Inline</Link>
            </li>
          </ul>
          <li>Components</li>
          <ul>
            <li>
              <Link href="/docs/components/button">Button</Link>
            </li>
          </ul>
        </ul>
      </menu>
    </Box>
  );
};

export default Home;
