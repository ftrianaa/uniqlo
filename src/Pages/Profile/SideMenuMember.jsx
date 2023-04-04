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
        <Text
          onClick={() => navigate('/member/details')}
          fontSize="14px"
          my="1"
          cursor="pointer"
        >
          Profil
        </Text>
        <Text
          onClick={() => navigate('/member/coupon')}
          fontSize="14px"
          my="1"
          cursor="pointer"
        >
          Kupon
        </Text>
        <Text
          onClick={() => navigate('/member/purchase/history')}
          fontSize="14px"
          cursor="pointer"
        >
          Riwayat pembelian
        </Text>
        <Text
          onClick={() => navigate('/member/orders')}
          fontSize="14px"
          my="1"
          cursor="pointer"
        >
          Riwayat pesanan
        </Text>
      </Box>
      <Text fontWeight="bold" fontSize="16px">
        Pengaturan Profil
      </Text>
      <Box ml={5}>
        <Text
          onClick={() => navigate('/member/edit')}
          fontSize="14px"
          my="1"
          cursor="pointer"
        >
          Sunting profil
        </Text>
        <Text
          onClick={() => navigate('/member/addresses')}
          fontSize="14px"
          my="1"
          cursor="pointer"
        >
          Buku alamat
        </Text>
        <Text
          onClick={() => navigate('/member/edit/password')}
          fontSize="14px"
          my="1"
          cursor="pointer"
        >
          Ubah kata sandi saya
        </Text>
        <Text
          onClick={() => navigate('/member/wallets')}
          fontSize="14px"
          my="1"
          cursor="pointer"
        >
          Kartu kredit saya
        </Text>
        <Text
          onClick={() => navigate('/member/unsubscribe')}
          fontSize="14px"
          my="1"
          cursor="pointer"
        >
          Pembatalan keanggotaan
        </Text>
      </Box>
    </>
  );
};

export default SideMenuMember;
