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
  ListItem,
  Popover,
  PopoverAnchor,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Text,
  UnorderedList,
  useBoolean,
  useColorModeValue as mode,
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <>
      <Box
        borderBottom="1px solid #dadada"
        px={{ base: 5, md: 10, lg: 20 }}
        py="5"
        bgColor="white"
      >
        <Flex height="4.5rem" align="center">
          <Image
            src="https://cdn.shopify.com/s/files/1/0608/6724/8340/files/Logo_klamby_baru_banget_140x@2x.png?v=1643345083"
            h="9"
            onClick={() => navigate('/')}
          />
        </Flex>
      </Box>
      {!isDesktop ? (
        <>
          <Flex
            bgColor={'#f4f4f4'}
            justify="space-between"
            align="center"
            w="100%"
          >
            <Text
              fontSize="22px"
              textTransform="uppercase"
              fontWeight="bold"
              textAlign="left"
              p={5}
              px={{ base: 5, md: 10 }}
            >
              masuk
            </Text>
            <Text
              fontSize="15px"
              textTransform="uppercase"
              fontWeight="bold"
              textAlign="left"
              p={5}
              px={{ base: 5, md: 10 }}
              onClick={() => navigate('/registry')}
            >
              buat akun
            </Text>
          </Flex>
        </>
      ) : (
        <></>
      )}

      <Box
        pt={10}
        px={{ base: 5, md: 10, lg: 20 }}
        bgColor="white"
        borderBottom={{ base: '1px solid #ababab', lg: 'none' }}
      >
        <Flex
          border={{ base: 'none', lg: '1px solid #dadada' }}
          flexDir={{ base: 'column', lg: 'row' }}
          p={{ base: 0, lg: 5 }}
        >
          <Box w={{ base: '100%', lg: '47.5%' }}>
            <Flex
              justify="space-between"
              align="center"
              display={{ base: 'none', lg: 'flex' }}
            >
              <Heading
                textTransform="uppercase"
                fontSize="36px"
                fontWeight="bold"
              >
                masuk
              </Heading>
              <Text color="#378694">Wajib diisi*</Text>
            </Flex>
            <Flex align="center" justify="space-between">
              <Text fontSize={{ base: '15px', lg: '16px' }}>
                Masuk dengan alamat e-mail dan kata sandi Anda.
              </Text>

              <Popover placement="left">
                <PopoverTrigger>
                  <Text>
                    <AiOutlineInfoCircle fontSize="27px" />
                  </Text>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverBody>
                    <Box p="10px" fontSize={{ base: '15px', lg: '16px' }}>
                      <Text>
                        Untuk menjaga keamanan akun Anda, harap pertimbangkan
                        untuk mengubah sandi Anda jika salah satu hal berikut
                        berlaku pada Anda:
                      </Text>
                      <UnorderedList my="5">
                        <ListItem>
                          Kata sandi yang Anda gunakan untuk akun UNIQLO Anda
                          sama dengan yang Anda gunakan untuk akun, layanan, dan
                          situs web lain
                        </ListItem>
                        <ListItem>
                          Anda belum mengubah kata sandi Anda baru-baru ini
                        </ListItem>
                      </UnorderedList>
                      <Text>
                        Untuk mengubah kata sandi Anda, silakan pilih GANTI KATA
                        SANDI SAYA di halaman KEANGGOTAAN.
                      </Text>
                    </Box>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Flex>
            {!isDesktop ? (
              <>
                <Text color="#378694" textAlign="right" mt="3" fontSize="13px">
                  Wajib diisi*
                </Text>
              </>
            ) : (
              <></>
            )}
            <Box>
              <FormControl my="3">
                <FormLabel
                  textTransform="uppercase"
                  fontSize={{ base: '15px', lg: '18px' }}
                  fontWeight="bold"
                >
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
              <FormControl my="3">
                <FormLabel
                  textTransform="uppercase"
                  fontSize={{ base: '15px', lg: '18px' }}
                  fontWeight="bold"
                >
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
                <FormHelperText
                  color="#7d7d7d"
                  fontSize={{ base: '13px', lg: '14px' }}
                >
                  Kata sandi minimal harus 8 karakter, dan terdiri dari huruf
                  dan angka.
                </FormHelperText>
              </FormControl>
              <Checkbox
                fontSize={{ base: '13px', lg: '14px' }}
                color="black"
                py="2"
              >
                Tunjukkan kata sandi saya
              </Checkbox>
            </Box>
            <Box py="4">
              <Text
                textDecor="underline"
                fontWeight="bold"
                textTransform="uppercase"
                fontSize={{ base: '15px', lg: '16px' }}
              >
                ketentuan penggunaan
              </Text>
              <Text
                textDecor="underline"
                fontWeight="bold"
                textTransform="uppercase"
                fontSize={{ base: '15px', lg: '16px' }}
                py={{ base: 3, lg: 0 }}
              >
                kebijakan privasi
              </Text>
            </Box>
            <Box py={{ base: 0, lg: '3' }}>
              <Button
                textTransform="uppercase"
                bgColor="black"
                color="white"
                fontWeight="bold"
                borderRadius="0"
                w={{ base: '100%', lg: '50%' }}
                onClick={() => navigate('/')}
                size={{ base: 'lg', lg: 'md' }}
              >
                masuk
              </Button>
              <Text
                textDecor="underline"
                fontWeight="bold"
                textTransform="uppercase"
                fontSize={{ base: '15px', lg: '16px' }}
                textAlign={{ base: 'right', lg: 'left' }}
                py={{ base: 5, lg: 0 }}
              >
                lupa kata sandi anda?
              </Text>
            </Box>
          </Box>
          <Box
            w="5%"
            align="center"
            justify="center"
            display={{ base: 'none', lg: 'flex' }}
            pl="7"
          >
            <Divider orientation="vertical" />
          </Box>
          {isDesktop ? (
            <Box w={{ base: '100%', lg: '47.5%' }}>
              <Heading
                textTransform="uppercase"
                fontSize="36px"
                fontWeight="bold"
              >
                buat akun
              </Heading>

              <Text fontSize="16px">
                Jika Anda membuat akun, Anda bisa mendapatkan layanan yang
                dipersonalisasi seperti melihat riwayat pembelian dan
                mendapatkan kupon diskon dengan keanggotaan Anda. Daftar hari
                ini, gratis!
              </Text>
              <Box py="8">
                <Button
                  textTransform="uppercase"
                  bgColor="black"
                  color="white"
                  fontWeight="bold"
                  borderRadius="0"
                  w={{ base: '100%', lg: '50%' }}
                  onClick={() => navigate('/registry')}
                  size={{ base: 'lg', lg: 'md' }}
                >
                  buat akun
                </Button>
              </Box>
            </Box>
          ) : (
            <></>
          )}
        </Flex>
      </Box>
      {!isDesktop ? (
        <>
          <Box bgColor={'#f4f4f4'}>
            <Heading
              textTransform="uppercase"
              fontSize="20px"
              fontWeight="bold"
              px={{ base: 5, md: 10 }}
            >
              buat akun
            </Heading>
          </Box>
          <Box
            pt={10}
            px={{ base: 5, md: 10 }}
            bgColor="white"
            borderBottom={{ base: '1px solid #ababab', lg: 'none' }}
          >
            <Text fontSize="15px" color="#1b1b1b">
              Jika Anda membuat akun, Anda bisa mendapatkan layanan yang
              dipersonalisasi seperti melihat riwayat pembelian dan mendapatkan
              kupon diskon dengan keanggotaan Anda. Daftar hari ini, gratis!
            </Text>
            <Box py="8">
              <Button
                textTransform="uppercase"
                bgColor="black"
                color="white"
                fontWeight="bold"
                borderRadius="0"
                w={{ base: '100%', lg: '50%' }}
                onClick={() => navigate('/registry')}
                size={{ base: 'lg', lg: 'md' }}
              >
                buat akun
              </Button>
            </Box>
          </Box>
        </>
      ) : (
        <></>
      )}
      <Box
        pt={10}
        bgColor={{ base: '#f4f4f4', lg: 'white' }}
        px={{ base: 5, md: 10, lg: 20 }}
        borderTop={{ base: '1px solid #ababab', lg: 'none' }}
      >
        <Flex
          align="center"
          justify="center"
          h="80px"
          borderTop={{ base: '1px solid #ababab', lg: 'none' }}
        >
          <Text
            textTransform="uppercase"
            fontSize="14px"
            fontWeight={{ base: 'normal', lg: 'bold' }}
            color={{ base: '#ababab', lg: 'black' }}
          >
            HAK CIPTA © UNIQLO CO., LTD. SEMUA HAK DILINDUNGI UNDANG-UNDANG.
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export default Login;
