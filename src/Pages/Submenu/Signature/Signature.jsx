import React from 'react';
import Header from '../../../Components/Header/Header';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { SliderSignature } from './Slider/SliderSignature';

const Signature = () => {
  return (
    <>
      <Header />
      <Box h="75vh" w="100%">
        <SliderSignature />
      </Box>
      <Flex
        gap="20"
        alignItems="center"
        justifyContent="center"
        bgColor="#f4f4f4"
        py="5"
        w="100%"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Image
            src="https://cdn-icons-png.flaticon.com/512/6475/6475938.png"
            w="75px"
            objectFit="obtain"
          />
          <Text>Loyalty point</Text>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Image
            src="https://cdn-icons-png.flaticon.com/512/218/218390.png"
            w="75px"
            objectFit="obtain"
          />
          <Text>Payment secured</Text>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Image
            src="https://ccs-safety.org/wp-content/uploads/2019/12/programs-certification.png"
            w="75px"
            objectFit="obtain"
          />
          <Text>Quality gruanteed</Text>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Image
            src="https://www.pngmart.com/files/7/Good-PNG-Transparent.png"
            w="75px"
            objectFit="obtain"
          />
          <Text>Trust review</Text>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Image
            src="https://static.vecteezy.com/system/resources/previews/014/069/831/non_2x/motorbike-for-food-delivery-service-online-ordering-concept-png.png"
            w="75px"
            objectFit="obtain"
          />
          <Text>Secure deliver</Text>
        </Box>
      </Flex>
    </>
  );
};

export default Signature;
