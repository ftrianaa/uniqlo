import React from 'react';
import { ChakraProvider, Container } from '@chakra-ui/react';
import { theme } from './Theme';
import Routers from './Routers/Routers';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Routers />

      <Footer />
    </>
  );
}

export default App;
