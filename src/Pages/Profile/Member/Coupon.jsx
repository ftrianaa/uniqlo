import { Box, Divider, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const Coupon = () => {
  return (
    <>
      <Box>
        <Heading textTransform="uppercase" fontSize="32px" fontWeight="bold">
          Kupon
        </Heading>
      </Box>
      <Text>Kupon Toko Online | 0 Kupon yang Tersedia</Text>
      <Text color="#7d7d7d">
        Kupon toko online hanya dapat ditebus selama pembayaran.
      </Text>
      <Text>Tidak ada kupon.</Text>
      <Divider />
      <Text>Kupon Toko Retail | 0 Kupon yang Tersedia</Text>
      <Text color="#7d7d7d">
        Kupon toko retail hanya dapat ditukar di dalam toko.
      </Text>
      <Text>Tidak ada kupon.</Text>
    </>
  );
};

export default Coupon;
