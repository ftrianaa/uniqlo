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
  Radio,
  RadioGroup,
  Stack,
  Text,
  Tooltip,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import React from 'react';
import { SlLock } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

const Register = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Box w="100%" bgColor="white">
        <Box w="65%" px="20" bgColor="white">
          <Breadcrumb
            fontSize="sm"
            fontWeight="medium"
            color={mode('gray.600', 'gray.400')}
            separator={'/'}
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
            <Tooltip hasArrow label="Search places" bg="gray.300" color="black">
              <SlLock />
            </Tooltip>
          </Flex>

          <Box border="1px solid #dadada" p={5} my="10">
            <Flex my="5" align="center">
              <Text w="85%" fontSize="16px">
                Anda akan menerima email konfirmasi ke alamat e-mail Anda yang
                terkait dengan akun. Harap pastikan untuk memeriksa e-mail yang
                masuk dari UNIQLO.
              </Text>
              <Text w="15%" color="#378694" fontSize="14px">
                Wajib diisi*
              </Text>
            </Flex>
            <Box>
              <FormControl my="5">
                <Flex>
                  <FormLabel
                    textTransform="uppercase"
                    fontSize="18px"
                    fontWeight="bold"
                    w="30%"
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
                    w="70%"
                    type="email"
                    placeholder="Masukkan alamat email Anda"
                    variant="flushed"
                  />
                </Flex>
              </FormControl>
              <FormControl my="5">
                <Flex>
                  <FormLabel
                    textTransform="uppercase"
                    fontSize="18px"
                    fontWeight="bold"
                    w="30%"
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
                  <Box w="70%">
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
                <Flex>
                  <FormLabel
                    textTransform="uppercase"
                    fontSize="18px"
                    fontWeight="bold"
                    w="30%"
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
                    w="70%"
                  />
                </Flex>
              </FormControl>
              <FormControl my="5">
                <Flex>
                  <FormLabel
                    textTransform="uppercase"
                    fontSize="18px"
                    fontWeight="bold"
                    w="30%"
                  >
                    Tanggal lahir
                  </FormLabel>
                  <Box>
                    <Input type="date" variant="flushed" w="50%" />
                    <FormHelperText color="#7d7d7d" fontSize="14px">
                      Tidak dapat mengubah tanggal lahir setelah Anda mendaftar.
                    </FormHelperText>
                  </Box>
                </Flex>
              </FormControl>
              <FormControl my="5">
                <Flex>
                  <FormLabel
                    textTransform="uppercase"
                    fontSize="18px"
                    fontWeight="bold"
                    w="30%"
                  >
                    jenis kelamin
                  </FormLabel>
                  <RadioGroup defaultValue="3" w="70%">
                    <Stack spacing={4} direction="row">
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
                  fontSize="18px"
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
                  fontSize="18px"
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
                <FormHelperText color="#7d7d7d" fontSize="14px">
                  Dengan membuat akun, Anda setuju dengan persyaratan penggunaan
                  dan kebijakan privasi UNIQLO.
                </FormHelperText>
                <Checkbox mt="5">
                  Saya setuju dengan PERSYARATAN PENGGUNAAN dan KEBIJAKAN
                  PRIVASI UNIQLO
                </Checkbox>
              </FormControl>
              <Flex justify="space-between" align="center" w="70%" mb="8">
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
              </Flex>
              <Button
                textTransform="uppercase"
                fontWeight="bold"
                borderRadius="0"
                bgColor="black"
                color="white"
                w="45%"
                onClick={() => navigate('/')}
              >
                daftar
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Register;
