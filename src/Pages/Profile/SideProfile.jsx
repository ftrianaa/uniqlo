import { Box, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

const SideProfile = () => {
  const [page, setPage] = useState('');
  return (
    <>
      <Text fontWeight="bold" fontSize="16px">
        Keanggotaan
      </Text>
      <Box ml={5}>
        <Text onClick={() => setPage('details')}>Profil</Text>
        <Text onClick={() => setPage('coupon')}>Kupon</Text>
        <Text onClick={() => setPage('history')}>Riwayat pembelian</Text>
        <Text onClick={() => setPage('orders')}>Riwayat pesanan</Text>
      </Box>
      <Text fontWeight="bold" fontSize="16px">
        Keanggotaan
      </Text>
      <Box ml={5}>
        <Text>Sunting profil</Text>
        <Text>Buku alamat</Text>
        <Text>Ubah kata sandi saya</Text>
        <Text>Kartu kredit saya</Text>
        <Text>Pembatalan keanggotaan</Text>
      </Box>
    </>
  );
};

export default SideProfile;
