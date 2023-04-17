import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';
import { pesanan } from '../data';

const Orders = () => {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <>
      {isDesktop ? (
        <>
          <Text
            textTransform="uppercase"
            fontSize="32px"
            fontWeight="bold"
            mb="5"
          >
            Riwayat pesanan
          </Text>
          <Divider />
          <Text
            fontWeight="bold"
            fontSize="20px"
            textTransform="uppercase"
            my="4"
          >
            {pesanan.length} Produk dari {pesanan.length}
          </Text>
          {pesanan.map((item, index) => (
            <Box key={index}>
              <Flex justify="space-between" align="center" my="4">
                <Text
                  fontWeight="bold"
                  fontSize="20px"
                  textTransform="uppercase"
                >
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
      ) : (
        <Box bgColor="white" px={{ base: '5', md: '8' }} py="4">
          <Text
            fontWeight="bold"
            fontSize="15px"
            textTransform="uppercase"
            mb="4"
          >
            {pesanan.length} Produk dari {pesanan.length}
          </Text>
          {pesanan.map((item, index) => (
            <Box key={index} borderBottom="solid 1px #ababab">
              <Text fontWeight="bold" fontSize="15px" textTransform="uppercase">
                Tanggal pemesanan {item.date} WIB
              </Text>
              <Box my="2" fontSize="15px">
                <Text>Nomor pesanan: {item.orderId}</Text>
                <Text>Kelas pesanan: {item.orderClass}</Text>
                <Text>Status pesanan: {item.status}</Text>
              </Box>
              <Text fontSize="15px">
                (Temukan detail pengiriman dalam email pemberitahuan setelah
                peletakan order)
              </Text>
              <Flex py="4" justify="right" align="center">
                <Button
                  fontSize="14px"
                  textTransform="uppercase"
                  variant="outline"
                  borderColor="black"
                  size="sm"
                  w="20%"
                  fontWeight="bold"
                  borderRadius="0"
                >
                  detail
                </Button>
              </Flex>
            </Box>
          ))}
        </Box>
      )}
    </>
  );
};

export default Orders;
