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
      <Box w="50%" m={10}>
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

        <Flex justify="space-between" align="center">
          <Heading textTransform="uppercase" fontSize="36px">
            buat akun
          </Heading>
          <Tooltip hasArrow label="Search places" bg="gray.300" color="black">
            <SlLock />
          </Tooltip>
        </Flex>

        <Box border="1px solid #dadada" p={5}>
          <Flex>
            <Text>
              Anda akan menerima email konfirmasi ke alamat e-mail Anda yang
              terkait dengan akun. Harap pastikan untuk memeriksa e-mail yang
              masuk dari UNIQLO.
            </Text>
            <Text color="#378694">Wajib diisi*</Text>
          </Flex>
          <Box>
            <FormControl>
              <Flex>
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
              </Flex>
            </FormControl>
            <FormControl>
              <Flex>
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
                <Box>
                  <Input
                    type="password"
                    placeholder="Masukkan kata sandi Anda"
                    variant="flushed"
                  />
                  <FormHelperText color="#7d7d7d" fontSize="14px">
                    Kata sandi minimal harus 8 karakter, dan terdiri dari huruf
                    dan angka.
                  </FormHelperText>
                </Box>
              </Flex>
              <Checkbox>Tunjukkan kata sandi saya</Checkbox>
            </FormControl>
            <FormControl>
              <Flex>
                <FormLabel textTransform="uppercase" fontSize="16px">
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
                />
              </Flex>
            </FormControl>
            <FormControl>
              <Flex>
                <FormLabel textTransform="uppercase" fontSize="16px">
                  Tanggal lahir
                </FormLabel>
                <Box>
                  <Input type="date" variant="flushed" />
                  <FormHelperText color="#7d7d7d" fontSize="14px">
                    Tidak dapat mengubah tanggal lahir setelah Anda mendaftar.
                  </FormHelperText>
                </Box>
              </Flex>
            </FormControl>
            <FormControl>
              <Flex>
                <FormLabel textTransform="uppercase" fontSize="16px">
                  jenis kelamin
                </FormLabel>
                <RadioGroup defaultValue="3">
                  <Stack spacing={4} direction="row">
                    <Radio value="1">Pria</Radio>
                    <Radio value="2">Wanita</Radio>
                    <Radio value="3">Tidak Dipilih</Radio>
                  </Stack>
                </RadioGroup>
              </Flex>
            </FormControl>
            <FormControl>
              <FormLabel textTransform="uppercase" fontSize="16px">
                konfirmasi langganan
              </FormLabel>
              <Checkbox>Newsletter UNIQLO</Checkbox>
            </FormControl>
            <Divider />
            <FormControl>
              <FormLabel textTransform="uppercase" fontSize="16px">
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
              <Checkbox>
                Saya setuju dengan PERSYARATAN PENGGUNAAN dan KEBIJAKAN PRIVASI
                UNIQLO
              </Checkbox>
            </FormControl>
            <Flex justify="space-between" align="center">
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
            <Button textTransform="uppercase">daftar</Button>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Register;
