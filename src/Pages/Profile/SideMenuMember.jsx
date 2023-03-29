import { Box, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SideMenuMember = () => {
  const navigate = useNavigate();
  return (
    <>
      <Text fontWeight="bold" fontSize="16px">
        Keanggotaan
      </Text>
      <Box ml={5}>
        <Text onClick={() => navigate('/member/details')}>Profil</Text>
        <Text onClick={() => navigate('/member/coupon')}>Kupon</Text>
        <Text onClick={() => navigate('/member/purchase/history')}>
          Riwayat pembelian
        </Text>
        <Text onClick={() => navigate('/member/orders')}>Riwayat pesanan</Text>
      </Box>
      <Text fontWeight="bold" fontSize="16px">
        Pengaturan Profil
      </Text>
      <Box ml={5}>
        <Text onClick={() => navigate('/member/edit')}>Sunting profil</Text>
        <Text onClick={() => navigate('/member/addresses')}>Buku alamat</Text>
        <Text onClick={() => navigate('/member/edit/password')}>
          Ubah kata sandi saya
        </Text>
        <Text onClick={() => navigate('/member/wallets')}>
          Kartu kredit saya
        </Text>
        <Text onClick={() => navigate('/member/unsubscribe')}>
          Pembatalan keanggotaan
        </Text>
      </Box>
    </>
  );
};

export default SideMenuMember;
