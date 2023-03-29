import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { pesanan } from '../data';

const Orders = () => {
  return (
    <>
      <Box>
        <Heading textTransform="uppercase" fontSize="32px" fontWeight="bold">
          Riwayat pesanan
        </Heading>
      </Box>
      {pesanan.map((item, index) => (
        <Box key={index}>
          <Text fontWeight="bold" fontSize="20px" textTransform="uppercase">
            {item.length} Produk dari {item.length}
          </Text>
          <Flex justify="space-between" align="center">
            <Text fontWeight="bold" fontSize="20px" textTransform="uppercase">
              Tanggal pemesanan {item.date} WIB
            </Text>
            <Button textTransform="uppercase">detail</Button>
          </Flex>
          <Text>Nomor pesanan: {item.orderId}</Text>
          <Text>Kelas pesanan: {item.orderClass}</Text>
          <Text>Status pesanan: {item.status}</Text>
          <Text>
            (Temukan detail pengiriman dalam email pemberitahuan setelah
            peletakan order)
          </Text>
        </Box>
      ))}
    </>
  );
};

export default Orders;
