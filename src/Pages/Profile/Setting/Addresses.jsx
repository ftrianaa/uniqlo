import { CheckIcon } from '@chakra-ui/icons';
import { Box, Button, Divider, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { addresses, memberAddress } from '../data';

const Addresses = () => {
  return (
    <>
      <Box>
        <Text textTransform="uppercase" fontSize="32px" fontWeight="bold">
          Alamat keanggotaan
        </Text>
        <Flex my="5">
          <Box w="30%">{memberAddress.name}</Box>
          <Box w="35%">
            {memberAddress.address}
            {memberAddress.telp}
          </Box>
          <Flex direction="column" w="35%" align="center" justify="center">
            <Button
              textTransform="uppercase"
              w="70%"
              variant="outline"
              borderColor="black"
              bgColor="white"
              color="black"
              borderRadius="0"
              size="sm"
              leftIcon={<CheckIcon color="green" />}
              fontWeight="bold"
              fontSize="14px"
            >
              Alamat saat ini
            </Button>
            <Button
              mt="3"
              textTransform="uppercase"
              w="70%"
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
      <Box>
        <Heading textTransform="uppercase" fontSize="32px" fontWeight="bold">
          alamat pengiriman ({addresses.length})
        </Heading>
        <Text>Dapat menyimpan hingga 10 alamat.</Text>
        {addresses.map((item, index) => (
          <Flex key={index} my="5">
            <Box w="30%"> {item.name}</Box>
            <Box w="35%">
              {item.address}
              {item.telp}
            </Box>
            <Flex w="35%" direction="column" align="center" justify="center">
              <Button
                textTransform="uppercase"
                variant="outline"
                borderColor="black"
                bgColor="white"
                color="black"
                borderRadius="0"
                size="sm"
                fontWeight="bold"
                w="70%"
                fontSize="14px"
              >
                pasang sebagai default
              </Button>
              <Button
                mt="3"
                textTransform="uppercase"
                variant="outline"
                borderColor="black"
                bgColor="white"
                color="black"
                borderRadius="0"
                size="sm"
                w="70%"
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
          w="35%"
          fontWeight="bold"
        >
          daftar alamat baru
        </Button>
      </Box>
    </>
  );
};

export default Addresses;
