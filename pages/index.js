import Head from 'next/head';
import Page from '../layouts/Page';
import { Box } from '@chakra-ui/react';
import ThemeToggler from '../components/ThemeToggler';
import SearchBar from '../components/SearchBar';

export default function Home() {
  return (
    <Page>
      <Head>
        <title>Recipes Web App</title>
        <meta name="description" content="Recipes Web App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <ThemeToggler />
      </div>
      <SearchBar />
    </Page>
  );
}
