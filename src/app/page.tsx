import { Box } from '@blockle/blocks';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Box>
      {/* <Heading level={1}>Homepage</Heading> */}

      <menu>
        <ul>
          <li>
            <a href="/docs">Get started (404)</a>
          </li>
          <li>
            <a href="/docs/theme/theming">Theming</a>
          </li>
          <li>Layout</li>
          <ul>
            <li>
              <a href="/docs/layout/box">Box</a>
            </li>
            <li>
              <a href="/docs/layout/stack">Stack</a>
            </li>
            <li>
              <a href="/docs/layout/inline">Inline</a>
            </li>
          </ul>
        </ul>
      </menu>
    </Box>
  );
};

export default Home;
