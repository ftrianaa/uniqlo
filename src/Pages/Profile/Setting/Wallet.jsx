import { Heading, Text } from '@chakra-ui/react';
import React from 'react';

const Wallet = () => {
  return (
    <>
      <Heading textTransform="uppercase" fontSize="32px" fontWeight="bold">
        kartu kredit saya
      </Heading>
      <Text>Dapat menyimpan hingga 5 kartu kredit.</Text>
      <Text mt="5"> Tidak ada kartu kredit yang terdaftar.</Text>
    </>
  );
};

export default Wallet;
