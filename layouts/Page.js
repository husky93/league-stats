import { Box } from '@chakra-ui/react';

export default function Home({ children }) {
  return (
    <Box minH="100vh">
      <main h="100%">{children}</main>
    </Box>
  );
}
