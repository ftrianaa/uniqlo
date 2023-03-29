import { Box, Button, Divider, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { addresses, memberAddress } from '../data';

const Addresses = () => {
  return (
    <>
      <Box>
        <Heading textTransform="uppercase" fontSize="32px" fontWeight="bold">
          sunting profil
        </Heading>
        <Flex>
          <Box w="33.3%">{memberAddress.name}</Box>
          <Box w="33.3%">
            {memberAddress.address}
            {memberAddress.telp}
          </Box>
          <Box w="33.3%">
            <Button textTransform="uppercase" variant="outline">
              Alamat saat ini
            </Button>
            <Button textTransform="uppercase" variant="outline">
              sunting profil
            </Button>
          </Box>
        </Flex>
      </Box>
      <Divider />
      <Box>
        <Heading textTransform="uppercase" fontSize="32px" fontWeight="bold">
          alamat pengiriman {addresses.length}
        </Heading>
        <Text>Dapat menyimpan hingga 10 alamat.</Text>
        {addresses.map((item, index) => (
          <Flex key={index}>
            <Box w="33.3%"> {item.name}</Box>
            <Box w="33.3%">
              {item.address}
              {item.telp}
            </Box>
            <Box w="33.3%">
              <Button textTransform="uppercase" variant="outline">
                pasang sebagai default
              </Button>
              <Button textTransform="uppercase" variant="outline">
                sunting profil
              </Button>
            </Box>
          </Flex>
        ))}
        <Button textTransform="uppercase" fontWeight="bold">
          daftar alamat baru
        </Button>
      </Box>
    </>
  );
};

export default Addresses;
