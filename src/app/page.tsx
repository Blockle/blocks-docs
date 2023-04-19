import { Box } from '@blockle/blocks-v2';
import type { NextPage } from 'next';
import { Navigation } from '../components/Navigation/Navigation';

const Home: NextPage = () => {
  return (
    <Box>
      <Navigation />
    </Box>
  );
};

export default Home;
