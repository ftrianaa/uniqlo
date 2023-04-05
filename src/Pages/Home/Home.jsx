import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import { Box, Heading } from '@chakra-ui/react';
import { images } from './_data';
import { Gallery } from './Gallery';
import AppBenefits from '../../Components/AppBenefits/AppBenefits';
// console.log(images, 'ini imageesss');
export const Home = () => {
  return (
    <>
      <Header />
      {/* <Box
        maxW="3xl"
        mx="auto"
        px={{
          base: '4',
          md: '8',
          lg: '12',
        }}
        py={{
          base: '6',
          md: '8',
          lg: '12',
        }}
      > */}
      {/* <Gallery images={images} /> */}
      <Gallery images={images} />
      <Box bgColor="white" pb="4">
        <Heading
          fontWeight="bold"
          fontSize="36px"
          textTransform="uppercase"
          mx="4"
        >
          app benefits
        </Heading>
        <AppBenefits />
      </Box>
      {/* </Box> */}
      <Footer />
    </>
  );
};
