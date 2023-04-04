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
} from '@chakra-ui/react';
import React from 'react';

const EditPassword = () => {
  return (
    <>
      <Flex justify="space-between" align="center">
        <Text textTransform="uppercase" fontSize="32px" fontWeight="bold">
          ubah kata sandi saya
        </Text>
        <Text color="#378694">Wajib diisi*</Text>
      </Flex>
      <Box>
        <FormControl my="5">
          <Flex>
            <Box w="30%">
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
            <Box w="70%">
              <Input type="password" variant="flushed" w="80%" />
              <FormHelperText>
                Kata sandi minimal harus 8 karakter, dan terdiri dari huruf dan
                angka.
              </FormHelperText>
              <Text
                textTransform="uppercase"
                textDecor="underline"
                fontWeight="bold"
              >
                lupa kata sandi anda?
              </Text>
            </Box>
          </Flex>
        </FormControl>
        <Box>
          <FormControl>
            <Flex align="center">
              <Box w="30%">
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
              <Box w="70%">
                <Input type="password" variant="flushed" w="80%" />
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
        w="35%"
        fontWeight="bold"
      >
        ubah kata sandi saya
      </Button>
    </>
  );
};

export default EditPassword;
