import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Checkbox,
  Container,
  Divider,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Tooltip,
  useColorModeValue as mode,
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';
import { SlLock } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

const Register = () => {
  const navigate = useNavigate();
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <>
      {!isDesktop ? (
        <Flex justify="space-between" align="center" px={{ base: 5, md: 10 }}>
          <Heading textTransform="uppercase" fontSize="22px" fontWeight="bold">
            buat akun
          </Heading>
          <Popover
            islazy
            trigger={'hover'}
            placement="left"
            openDelay="0"
            closeDelay="0"
          >
            <PopoverTrigger>
              <Text>
                <SlLock />
              </Text>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverBody>
                <Box>
                  <Text>
                    Kami mengenkripsi semua informasi sensitif Anda dengan
                    teknologi enkripsi
                  </Text>
                  <Text textDecor="underline">
                    TLS (Transport Layer Security).
                  </Text>
                </Box>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
      ) : (
        <></>
      )}
      <Box w="100%" bgColor="white">
        <Box
          w={{ base: '100%', lg: '65%' }}
          px={{ base: 5, md: 10, lg: 20 }}
          bgColor="white"
        >
          {isDesktop ? (
            <>
              <Breadcrumb
                fontSize="sm"
                fontWeight="medium"
                color={mode('gray.600', 'gray.400')}
                separator={'/'}
                my="5"
              >
                <BreadcrumbItem>
                  <BreadcrumbLink onClick={() => navigate('/')}>
                    UNIQLO
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Buat Akun</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
              <Flex justify="space-between" align="center" mt="4">
                <Heading
                  textTransform="uppercase"
                  fontSize="36px"
                  fontWeight="bold"
                >
                  buat akun
                </Heading>
                <Popover
                  islazy
                  trigger={'hover'}
                  placement="left"
                  openDelay="0"
                  closeDelay="0"
                >
                  <PopoverTrigger>
                    <Text>
                      <SlLock />
                    </Text>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverBody>
                      <Box>
                        <Text>
                          Kami mengenkripsi semua informasi sensitif Anda dengan
                          teknologi enkripsi
                        </Text>
                        <Text textDecor="underline">
                          TLS (Transport Layer Security).
                        </Text>
                      </Box>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Flex>
            </>
          ) : (
            <></>
          )}

          <Box
            border={{ base: 'none', lg: '1px solid #dadada' }}
            p={{ base: 0, lg: 5 }}
            my="10"
          >
            <Flex
              my={{ base: '0', lg: '5' }}
              align="center"
              flexDir={{ base: 'column', lg: 'row' }}
            >
              <Text
                w={{ base: '100%', lg: '85%' }}
                fontSize={{ base: '15px', lg: '16px' }}
              >
                Anda akan menerima email konfirmasi ke alamat e-mail Anda yang
                terkait dengan akun. Harap pastikan untuk memeriksa e-mail yang
                masuk dari UNIQLO.
              </Text>
              <Text
                w={{ base: '100%', lg: '15%' }}
                color="#378694"
                fontSize={{ base: '13px', lg: '14px' }}
                textAlign="right"
                mt={{ base: '3', lg: '0' }}
              >
                Wajib diisi*
              </Text>
            </Flex>
            <Box>
              <FormControl my="5">
                <Flex flexDir={{ base: 'column', lg: 'row' }}>
                  <FormLabel
                    textTransform="uppercase"
                    fontSize="18px"
                    fontWeight="bold"
                    w={{ base: '100%', lg: '30%' }}
                  >
                    <Flex fontSize={{ base: '15px', lg: '18px' }}>
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
                    w={{ base: '100%', lg: '70%' }}
                    type="email"
                    placeholder="Masukkan alamat email Anda"
                    variant="flushed"
                  />
                </Flex>
              </FormControl>
              <FormControl my="5">
                <Flex flexDir={{ base: 'column', lg: 'row' }}>
                  <FormLabel
                    textTransform="uppercase"
                    fontSize={{ base: '15px', lg: '18px' }}
                    fontWeight="bold"
                    w={{ base: '100%', lg: '30%' }}
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
                  <Box w={{ base: '100%', lg: '70%' }}>
                    <Input
                      type="password"
                      placeholder="Masukkan kata sandi Anda"
                      variant="flushed"
                    />
                    <FormHelperText color="#7d7d7d" fontSize="14px">
                      Kata sandi minimal harus 8 karakter, dan terdiri dari
                      huruf dan angka.
                    </FormHelperText>
                  </Box>
                </Flex>
                <Checkbox>Tunjukkan kata sandi saya</Checkbox>
              </FormControl>
              <FormControl my="5">
                <Flex flexDir={{ base: 'column', lg: 'row' }}>
                  <FormLabel
                    textTransform="uppercase"
                    fontSize={{ base: '15px', lg: '18px' }}
                    fontWeight="bold"
                    w={{ base: '100%', lg: '30%' }}
                  >
                    <Flex>
                      kode pos
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
                    placeholder="Silahkan masukkan kode pos"
                    variant="flushed"
                    w={{ base: '100%', lg: '70%' }}
                  />
                </Flex>
              </FormControl>
              <FormControl my="5">
                <Flex flexDir={{ base: 'column', lg: 'row' }}>
                  <FormLabel
                    textTransform="uppercase"
                    fontSize={{ base: '15px', lg: '18px' }}
                    fontWeight="bold"
                    w={{ base: '100%', lg: '30%' }}
                  >
                    Tanggal lahir
                  </FormLabel>
                  <Box>
                    <Input
                      type="date"
                      variant="flushed"
                      w={{ base: '100%', lg: '50%' }}
                    />
                    <FormHelperText color="#7d7d7d" fontSize="14px">
                      Tidak dapat mengubah tanggal lahir setelah Anda mendaftar.
                    </FormHelperText>
                  </Box>
                </Flex>
              </FormControl>
              <FormControl my="5">
                <Flex flexDir={{ base: 'column', lg: 'row' }}>
                  <FormLabel
                    textTransform="uppercase"
                    fontSize={{ base: '15px', lg: '18px' }}
                    fontWeight="bold"
                    w={{ base: '100%', lg: '30%' }}
                  >
                    jenis kelamin
                  </FormLabel>
                  <RadioGroup defaultValue="3" w={{ base: '100%', lg: '70%' }}>
                    <Stack
                      spacing={4}
                      direction={{ base: 'column', lg: 'row' }}
                    >
                      <Radio value="1">Pria</Radio>
                      <Radio value="2">Wanita</Radio>
                      <Radio value="3">Tidak Dipilih</Radio>
                    </Stack>
                  </RadioGroup>
                </Flex>
              </FormControl>
              <FormControl my="5">
                <FormLabel
                  textTransform="uppercase"
                  fontSize={{ base: '15px', lg: '18px' }}
                  fontWeight="bold"
                >
                  konfirmasi langganan
                </FormLabel>
                <Checkbox>Newsletter UNIQLO</Checkbox>
              </FormControl>
              <Divider />
              <FormControl my="5">
                <FormLabel
                  textTransform="uppercase"
                  fontSize={{ base: '15px', lg: '18px' }}
                  fontWeight="bold"
                >
                  <Flex>
                    perjanjian keanggotaan
                    <Text
                      verticalAlign="super"
                      fontSize="smaller"
                      color="#378694"
                    >
                      *
                    </Text>
                  </Flex>
                </FormLabel>
                <FormHelperText
                  color="#7d7d7d"
                  fontSize={{ base: '14px', lg: '13px' }}
                >
                  Dengan membuat akun, Anda setuju dengan persyaratan penggunaan
                  dan kebijakan privasi UNIQLO.
                </FormHelperText>
                <Checkbox mt="5">
                  Saya setuju dengan PERSYARATAN PENGGUNAAN dan KEBIJAKAN
                  PRIVASI UNIQLO
                </Checkbox>
              </FormControl>
              <Flex
                justify="space-between"
                align={{ base: 'left', lg: 'center' }}
                w={{ base: '100%', lg: '70%' }}
                mb="8"
                flexDir={{ base: 'column', lg: 'row' }}
              >
                <Text
                  textDecor="underline"
                  fontWeight="bold"
                  textTransform="uppercase"
                  mb={{ base: '3', lg: 0 }}
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
              </Flex>
              <Button
                textTransform="uppercase"
                fontWeight="bold"
                borderRadius="0"
                bgColor="black"
                color="white"
                w={{ base: '100%', lg: '45%' }}
                onClick={() => navigate('/')}
                size={{ base: 'lg', lg: 'md' }}
              >
                daftar
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Register;
