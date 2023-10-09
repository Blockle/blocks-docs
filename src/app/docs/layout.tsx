import { Box } from '@blockle/blocks';
import { SideNav } from '../../components/SideNav/SideNav';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box display="flex">
      <SideNav />

      <Box padding="gutter" flexGrow={1}>
        {children}
      </Box>
    </Box>
  );
}
