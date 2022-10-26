import Head from 'next/head';
import Page from '../layouts/Page';
import { useColorMode } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import SearchBar from '../components/SearchBar';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/button';

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Page>
      <Head>
        <title>Recipes Web App</title>
        <meta name="description" content="Recipes Web App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <IconButton mt={4} aria-label="Toggle Mode" onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </IconButton>
      </div>
      <SearchBar />
    </Page>
  );
}
