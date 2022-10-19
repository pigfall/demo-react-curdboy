import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import {SimpleApp} from './cdb/CDBSimpleApp'

function App() {
  return (
    <ChakraProvider theme={theme}>
     <SimpleApp /> 
    </ChakraProvider>
  );
}

export default App;
