import { Box, Button, Container, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { useNavigate, useParams } from 'react-router-dom';
import Profile from './Member/Profile';
import Coupon from './Member/Coupon';
import Orders from './Member/Orders';

const MobileMember = () => {
  const navigate = useNavigate();
  const { pages } = useParams();

  // console.log(pages, 'page di mobile member');
  return (
    <Box display="flex" flexDirection="column" minH="100vh" bgColor="#f4f4f4">
      <Box
        borderBottom="1px solid #dadada"
        px={{ base: 5, md: 10, lg: 20 }}
        py="2"
        bgColor="white"
        W="8xl"
      >
        <Flex height="4.5rem" align="center" mx="auto" justify="space-between">
          <Image
            src="https://cdn.shopify.com/s/files/1/0608/6724/8340/files/Logo_klamby_baru_banget_140x@2x.png?v=1643345083"
            h="9"
            onClick={() => navigate('/')}
          />
          <Box>
            <Flex align="center" justify="center">
              <AiOutlineUser cursor="pointer" />
            </Flex>
            <Text fontWeight="bold" textTransform="uppercase" fontSize="13px">
              akun
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box bgColor={'#f4f4f4'}>
        <Text
          fontSize="20px"
          textTransform="uppercase"
          fontWeight="bold"
          textAlign="left"
          p={5}
          px={{ base: 5, md: 10 }}
        >
          {pages}
        </Text>
      </Box>
      {pages === 'details' ? (
        <Profile />
      ) : pages === 'coupon' ? (
        <Coupon />
      ) : pages === 'orders' ? (
        <Orders />
      ) : (
        <></>
      )}
      <Box bgColor={'#f4f4f4'} px={{ base: '5', md: '10' }} py="5">
        <Button
          textTransform="uppercase"
          borderRadius="0"
          fontWeight="bold"
          bgColor="white"
          border="1px black solid"
          w="100%"
          mb="5"
          onClick={() => navigate('/member')}
          size="lg"
        >
          kembali ke keanggotaan
        </Button>
        <Flex borderY="solid 1px #ababab" py="5">
          <Text>English </Text>
          <Text mx="3">|</Text>
          <Text fontWeight="bold">Bahasa Indonesia</Text>
        </Flex>
        <Box mt="3">
          <Text
            textTransform="uppercase"
            fontSize="11px"
            fontWeight="normal"
            color="#ababab"
            textAlign="center"
          >
            HAK CIPTA © UNIQLO CO., LTD. SEMUA HAK DILINDUNGI UNDANG-UNDANG.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default MobileMember;
