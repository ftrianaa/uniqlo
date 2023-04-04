import { Box, Divider, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const Coupon = () => {
  return (
    <>
      <Box>
        <Text textTransform="uppercase" fontSize="32px" fontWeight="bold">
          Kupon
        </Text>
      </Box>
      <Text my="3">Kupon Toko Online | 0 Kupon yang Tersedia</Text>
      <Text color="#7d7d7d">
        Kupon toko online hanya dapat ditebus selama pembayaran.
      </Text>
      <Text my="3">Tidak ada kupon.</Text>
      <Divider />
      <Text my="3">Kupon Toko Retail | 0 Kupon yang Tersedia</Text>
      <Text color="#7d7d7d">
        Kupon toko retail hanya dapat ditukar di dalam toko.
      </Text>
      <Text my="3">Tidak ada kupon.</Text>
    </>
  );
};

export default Coupon;
