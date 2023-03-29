import {
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
      <Heading textTransform="uppercase" fontSize="32px" fontWeight="bold">
        Riwayat Pembelian
      </Heading>
      <UnorderedList>
        <ListItem>
          Anda dapat melihat riwayat pembelian Anda di toko retail dan toko
          online.
        </ListItem>
        <ListItem>
          Riwayat pembelian toko retail Anda akan terlihat pada hari berikutnya,
          jika Anda memindai barcode keanggotaan Anda dengan pembelian Anda.
        </ListItem>
        <ListItem>
          Riwayat pembelian tidak menunjukkan barang yang dikembalikan atau
          ditukar.
        </ListItem>
        <ListItem>
          Riwayat pembelian bukanlah bukti pembelian yang sah.
        </ListItem>
        <ListItem>
          Harap bawa tanda terima jika Anda ingin mengembalikan atau menukar
          barang di toko.
        </ListItem>
      </UnorderedList>
      <Divider />
      <Text fontWeight="bold" fontSize="16px" textTransform="uppercase">
        item
      </Text>
      <Text fontWeight="bold" fontSize="20px" textTransform="uppercase">
        KAMI TIDAK MEMILIKI PESANAN UNTUK AKUN INI.
      </Text>
      <Text fontSize="16px">
        Jika Anda menunjukkan barcode keanggotaan Anda di toko, produk pembelian
        Anda akan ditambahkan ke riwayat akun Anda.
      </Text>
    </>
  );
};

export default PurchaseHistory;
