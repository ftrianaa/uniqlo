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
        <Heading textTransform="uppercase" fontSize="32px" fontWeight="bold">
          ubah kata sandi saya
        </Heading>
        <Text color="#378694">Wajib diisi*</Text>
      </Flex>
      <Box>
        <FormControl>
          <Flex align="center">
            <Box w="30%">
              <FormLabel textTransform="uppercase" fontSize="16px">
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
              <Input type="password" variant="flushed" />
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
                <FormLabel textTransform="uppercase" fontSize="16px">
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
                <Input type="password" variant="flushed" />
              </Box>
            </Flex>
          </FormControl>
          <Checkbox>Tunjukkan kata sandi saya</Checkbox>
        </Box>
      </Box>
      <Button textTransform="uppercase" fontWeight="bold">
        ubah kata sandi saya
      </Button>
    </>
  );
};

export default EditPassword;
