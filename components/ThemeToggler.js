import React from 'react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useColorMode } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/button';

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      mt={4}
      position="fixed"
      right="24px"
      aria-label="Toggle Mode"
      onClick={toggleColorMode}
    >
      {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
    </IconButton>
  );
}
