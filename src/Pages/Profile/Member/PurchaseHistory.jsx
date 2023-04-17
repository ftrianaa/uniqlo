import {
  Box,
  Divider,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import React from 'react';

const PurchaseHistory = () => {
  return (
    <>
      <Box display={{ base: 'none', lg: 'block' }}>
        <Text textTransform="uppercase" fontSize="32px" fontWeight="bold">
          Riwayat Pembelian
        </Text>
        <UnorderedList>
          <ListItem my="2">
            Anda dapat melihat riwayat pembelian Anda di toko retail dan toko
            online.
          </ListItem>
          <ListItem my="2">
            Riwayat pembelian toko retail Anda akan terlihat pada hari
            berikutnya, jika Anda memindai barcode keanggotaan Anda dengan
            pembelian Anda.
          </ListItem>
          <ListItem my="2">
            Riwayat pembelian tidak menunjukkan barang yang dikembalikan atau
            ditukar.
          </ListItem>
          <ListItem my="2">
            Riwayat pembelian bukanlah bukti pembelian yang sah.
          </ListItem>
          <ListItem my="2">
            Harap bawa tanda terima jika Anda ingin mengembalikan atau menukar
            barang di toko.
          </ListItem>
        </UnorderedList>
        <Divider my="4" />
        <Text
          fontWeight="bold"
          fontSize="16px"
          textTransform="uppercase"
          mb="5"
        >
          item
        </Text>
      </Box>
      <Box p={{ base: '5', md: '10', lg: '0' }} bgColor="white">
        <Text
          fontWeight="bold"
          fontSize={{ base: '15px', lg: '20px' }}
          textTransform="uppercase"
        >
          KAMI TIDAK MEMILIKI PESANAN UNTUK AKUN INI.
        </Text>
        <Text fontSize={{ base: '15px', lg: '16px' }}>
          Jika Anda menunjukkan barcode keanggotaan Anda di toko, produk
          pembelian Anda akan ditambahkan ke riwayat akun Anda.
        </Text>
      </Box>
    </>
  );
};

export default PurchaseHistory;
