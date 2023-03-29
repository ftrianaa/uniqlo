import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Image,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const Login = () => {
  return (
    <>
      <Box px="8" borderBottom="1px solid #dadada">
        <Flex height="4.5rem" align="center" maxW="8xl" mx="auto">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Uniqlo_logo_Japanese.svg"
            h="9"
          />
        </Flex>
      </Box>

      <Container mt={10}>
        <Flex border="1px solid #dadada" p={5}>
          <Box w="47.5%">
            <Flex justify="space-between" align="center">
              <Heading textTransform="uppercase" fontSize="36px">
                masuk
              </Heading>
              <Text color="#378694">Wajib diisi*</Text>
            </Flex>
            <Flex>
              <Text>Masuk dengan alamat e-mail dan kata sandi Anda.</Text>
              <Popover>
                <PopoverTrigger>
                  <AiOutlineInfoCircle />
                </PopoverTrigger>
                <Portal>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>
                      <Button colorScheme="blue">Button</Button>
                    </PopoverBody>
                  </PopoverContent>
                </Portal>
              </Popover>
            </Flex>
            <Box>
              <FormControl>
                <FormLabel textTransform="uppercase" fontSize="16px">
                  <Flex>
                    alamat email
                    <Text
                      verticalAlign="super"
                      fontSize="smaller"
                      color="#378694"
                    >
                      *
                    </Text>
                  </Flex>
                </FormLabel>
                <Input
                  type="email"
                  placeholder="Masukkan alamat email Anda"
                  variant="flushed"
                />
              </FormControl>
              <FormControl>
                <FormLabel textTransform="uppercase" fontSize="16px">
                  <Flex>
                    kata sandi
                    <Text
                      verticalAlign="super"
                      fontSize="smaller"
                      color="#378694"
                    >
                      *
                    </Text>
                  </Flex>
                </FormLabel>
                <Input
                  type="password"
                  placeholder="Masukkan kata sandi Anda"
                  variant="flushed"
                />
                <FormHelperText color="#7d7d7d" fontSize="14px">
                  Kata sandi minimal harus 8 karakter, dan terdiri dari huruf
                  dan angka.
                </FormHelperText>
                <Checkbox>Tunjukkan kata sandi saya</Checkbox>
              </FormControl>
            </Box>
            <Text
              textDecor="underline"
              fontWeight="bold"
              textTransform="uppercase"
            >
              ketentuan penggunaan
            </Text>
            <Text
              textDecor="underline"
              fontWeight="bold"
              textTransform="uppercase"
            >
              kebijakan privasi
            </Text>
            <Button textTransform="uppercase">masuk</Button>
            <Text
              textDecor="underline"
              fontWeight="bold"
              textTransform="uppercase"
            >
              lupa kata sandi anda?
            </Text>
          </Box>
          <Flex w="5%" align="center" justify="center">
            <Divider orientation="vertical" />
          </Flex>
          <Box w="47.5%">
            <Heading textTransform="uppercase" fontSize="36px">
              buat akun
            </Heading>
            <Text>
              Jika Anda membuat akun, Anda bisa mendapatkan layanan yang
              dipersonalisasi seperti melihat riwayat pembelian dan mendapatkan
              kupon diskon dengan keanggotaan Anda. Daftar hari ini, gratis!
            </Text>
            <Button textTransform="uppercase">buat akun</Button>
          </Box>
        </Flex>
      </Container>
      <Box mt={10}>
        <Flex align="center" justify="center" h="80px">
          <Text textTransform="uppercase" fontSize="14px" fontWeight="bold">
            HAK CIPTA © UNIQLO CO., LTD. SEMUA HAK DILINDUNGI UNDANG-UNDANG.
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export default Login;
