import { Box, Button, Divider, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { pesanan } from '../data';

const Orders = () => {
  return (
    <>
      <Text textTransform="uppercase" fontSize="32px" fontWeight="bold" mb="5">
        Riwayat pesanan
      </Text>
      <Divider />
      <Text fontWeight="bold" fontSize="20px" textTransform="uppercase" my="4">
        {pesanan.length} Produk dari {pesanan.length}
      </Text>
      {pesanan.map((item, index) => (
        <Box key={index}>
          <Flex justify="space-between" align="center" my="4">
            <Text fontWeight="bold" fontSize="20px" textTransform="uppercase">
              Tanggal pemesanan {item.date} WIB
            </Text>
            <Button
              textTransform="uppercase"
              variant="outline"
              borderColor="black"
              size="sm"
              w="18%"
              borderRadius="0"
            >
              detail
            </Button>
          </Flex>
          <Text my="1">Nomor pesanan: {item.orderId}</Text>
          <Text my="1">Kelas pesanan: {item.orderClass}</Text>
          <Text my="1">Status pesanan: {item.status}</Text>
          <Text my="1">
            (Temukan detail pengiriman dalam email pemberitahuan setelah
            peletakan order)
          </Text>
        </Box>
      ))}
    </>
  );
};

export default Orders;
