import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';

const EditPassword = () => {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <>
      <Box p={{ base: '5', md: '10', lg: '0' }} bgColor="white">
        <Flex justify={{ base: 'right', lg: 'space-between' }} align="center">
          <Text
            textTransform="uppercase"
            fontSize="32px"
            fontWeight="bold"
            display={{ base: 'none', lg: 'block' }}
          >
            ubah kata sandi saya
          </Text>
          <Text color="#378694">Wajib diisi*</Text>
        </Flex>
        <Box>
          <FormControl my="5">
            <Flex flexDir={{ base: 'column', lg: 'row' }}>
              <Box w={{ base: '100%', lg: '30%' }}>
                <FormLabel
                  textTransform="uppercase"
                  fontSize="16px"
                  fontWeight="bold"
                >
                  <Flex>
                    kata sandi saat ini
                    <Text
                      verticalAlign="super"
                      fontSize="smaller"
                      color="#378694"
                    >
                      *
                    </Text>
                  </Flex>
                </FormLabel>
              </Box>
              <Box w={{ base: '100%', lg: '70%' }}>
                <Input
                  type="password"
                  variant="flushed"
                  w={{ base: '100%', lg: '80%' }}
                />
                <FormHelperText>
                  Kata sandi minimal harus 8 karakter, dan terdiri dari huruf
                  dan angka.
                </FormHelperText>
                <Text
                  textTransform="uppercase"
                  textDecor="underline"
                  fontWeight="bold"
                  my={{ base: 3, lg: 0 }}
                >
                  lupa kata sandi anda?
                </Text>
              </Box>
            </Flex>
          </FormControl>
          <Box>
            <FormControl>
              <Flex flexDir={{ base: 'column', lg: 'row' }}>
                <Box w={{ base: '100%', lg: '30%' }}>
                  <FormLabel
                    textTransform="uppercase"
                    fontSize="16px"
                    fontWeight="bold"
                  >
                    <Flex>
                      kata sandi baru
                      <Text
                        verticalAlign="super"
                        fontSize="smaller"
                        color="#378694"
                      >
                        *
                      </Text>
                    </Flex>
                  </FormLabel>
                </Box>
                <Box w={{ base: '100%', lg: '70%' }}>
                  <Input
                    type="password"
                    variant="flushed"
                    w={{ base: '100%', lg: '80%' }}
                  />
                  <FormHelperText>
                    Kata sandi minimal harus 8 karakter, dan terdiri dari huruf
                    dan angka.
                  </FormHelperText>
                </Box>
              </Flex>
            </FormControl>
            <Checkbox my="5">Tunjukkan kata sandi saya</Checkbox>
          </Box>
        </Box>
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
          ubah kata sandi saya
        </Button>
      </Box>
    </>
  );
};

export default EditPassword;
