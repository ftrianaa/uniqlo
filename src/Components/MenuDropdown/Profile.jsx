import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  return (
    <Box fontSize="14px">
      <Text mb="2" cursor="pointer" onClick={() => navigate('/member/details')}>
        Profil
      </Text>
      <Text mb="2" cursor="pointer" onClick={() => navigate('/member/coupon')}>
        Kupon
      </Text>
      <Text
        mb="2"
        cursor="pointer"
        onClick={() => navigate('/member/purchase/history')}
      >
        Riwayat pembelian
      </Text>
      <Text mb="2" cursor="pointer" onClick={() => navigate('/member/orders')}>
        Riwayat pesanan
      </Text>
      <Text mb="2" cursor="pointer" onClick={() => navigate('/wishlist')}>
        Wishlist
      </Text>
      <Text>keluar</Text>
    </Box>
  );
};

export default Profile;
