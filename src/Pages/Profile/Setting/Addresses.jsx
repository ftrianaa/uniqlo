import { CheckIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  CloseButton,
  Divider,
  Flex,
  Heading,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';
import { addresses, memberAddress } from '../data';

const Addresses = () => {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <>
      <Box
        bgColor="white"
        p={{ base: '5', md: 8, lg: '0' }}
        boxShadow={{ base: '0 2px 2px rgba(0,0,0,0.16)', lg: 'none' }}
      >
        <Text
          textTransform="uppercase"
          fontSize={{ base: '16px', lg: '32px' }}
          fontWeight="bold"
        >
          Alamat keanggotaan
        </Text>
        <Flex my={{ base: 0, lg: '5' }} flexDir={{ base: 'column', lg: 'row' }}>
          <Box w={{ base: '100%', lg: '30%' }}>{memberAddress.name}</Box>
          <Box w={{ base: '100%', lg: '35%' }}>
            {memberAddress.address}
            {memberAddress.telp}
          </Box>
          <Flex
            direction={{ base: 'row', lg: 'column' }}
            w={{ base: '100%', lg: '35%' }}
            align={{ base: 'right', lg: 'center' }}
            justify={{ base: 'right', lg: 'center' }}
            my={{ base: 3, lg: 0 }}
          >
            <Button
              textTransform="uppercase"
              w={{ base: '40%', lg: '70%' }}
              variant="outline"
              borderColor="black"
              bgColor="white"
              color="black"
              borderRadius="0"
              size="sm"
              leftIcon={<CheckIcon color="green" />}
              fontWeight="bold"
              fontSize="14px"
              mx={{ base: 4, lg: 0 }}
            >
              Alamat saat ini
            </Button>
            <Button
              mt={{ base: 0, lg: '3' }}
              textTransform="uppercase"
              w={{ base: '40%', lg: '70%' }}
              variant="outline"
              borderColor="black"
              bgColor="white"
              color="black"
              borderRadius="0"
              size="sm"
              fontWeight="bold"
              fontSize="14px"
            >
              sunting profil
            </Button>
          </Flex>
        </Flex>
      </Box>
      <Divider />
      <Box
        bgColor="white"
        p={{ base: '5', md: 8, lg: '0' }}
        mt={{ base: 5, lg: 0 }}
        boxShadow={{ base: '0 2px 2px rgba(0,0,0,0.16)', lg: 'none' }}
      >
        <Text
          textTransform="uppercase"
          fontSize={{ base: '16px', lg: '32px' }}
          fontWeight="bold"
        >
          alamat pengiriman ({addresses.length})
        </Text>
        <Text>Dapat menyimpan hingga 10 alamat.</Text>
        {addresses.map((item, index) => (
          <Flex key={index} my="5" flexDir={{ base: 'column', lg: 'row' }}>
            <Flex
              justify="space-between"
              align="center"
              w={{ base: '100%', lg: '30%' }}
            >
              <Box> {item.name}</Box>
              <CloseButton display={{ base: 'block', lg: 'none' }} />
            </Flex>
            <Box w={{ base: '100%', lg: '35%' }}>
              {item.address}
              {item.telp}
            </Box>
            <Flex
              w={{ base: '100%', lg: '35%' }}
              direction={{ base: 'row', lg: 'column' }}
              align={{ base: 'right', lg: 'center' }}
              justify={{ base: 'right', lg: 'center' }}
              my={{ base: 3, lg: 0 }}
            >
              <Button
                textTransform="uppercase"
                variant="outline"
                borderColor="black"
                bgColor="white"
                color="black"
                borderRadius="0"
                size="sm"
                fontWeight="bold"
                w={{ base: '60%', lg: '70%' }}
                fontSize="14px"
                mx={{ base: 4, lg: 0 }}
              >
                pasang sebagai default
              </Button>
              <Button
                mt={{ base: 0, lg: '3' }}
                textTransform="uppercase"
                variant="outline"
                borderColor="black"
                bgColor="white"
                color="black"
                borderRadius="0"
                size="sm"
                w={{ base: '40%', lg: '70%' }}
                fontSize="14px"
                fontWeight="bold"
              >
                sunting profil
              </Button>
            </Flex>
          </Flex>
        ))}
        <Button
          textTransform="uppercase"
          variant="outline"
          borderColor="black"
          bgColor="black"
          color="white"
          borderRadius="0"
          w={{ base: '100%', lg: '35%' }}
          fontWeight="bold"
          size={{ base: 'lg', lg: 'md' }}
        >
          daftar alamat baru
        </Button>
      </Box>
    </>
  );
};

export default Addresses;
