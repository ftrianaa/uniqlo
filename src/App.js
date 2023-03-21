import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './Theme';
import Routers from './Routers/Routers';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routers />
    </ChakraProvider>
  );
}

export default App;
