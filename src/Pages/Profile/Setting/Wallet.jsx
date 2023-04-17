import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const Wallet = () => {
  return (
    <>
      <Heading
        textTransform="uppercase"
        fontSize="32px"
        fontWeight="bold"
        display={{ base: 'none', lg: 'block' }}
      >
        kartu kredit saya
      </Heading>
      <Box p={{ base: '5', md: '10', lg: '0' }} bgColor="white">
        <Text>Dapat menyimpan hingga 5 kartu kredit.</Text>
        <Text mt="5"> Tidak ada kartu kredit yang terdaftar.</Text>
      </Box>
    </>
  );
};

export default Wallet;
