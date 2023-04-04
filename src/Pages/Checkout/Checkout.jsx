import { CheckIcon } from '@chakra-ui/icons';
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useColorModeValue as mode,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import React from 'react';
import { RiCoupon3Line } from 'react-icons/ri';
import { SlArrowRight, SlLock } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import { addresses, cart } from './data';

const Checkout = () => {
  const navigate = useNavigate();
  let total = 0;

  {
    cart.map(item => {
      total += parseInt(item.price) * item.qty;
    });
  }
  return (
    <>
      <Header />
      <Container bgColor="white" px="20">
        <Breadcrumb
          fontSize="sm"
          fontWeight="medium"
          color={mode('gray.600', 'gray.400')}
          separator={'/'}
        >
          <BreadcrumbItem>
            <BreadcrumbLink onClick={() => navigate('/')}>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink onClick={() => navigate('/cart')}>
              Keranjang Belanja
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Pengiriman</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Heading
          fontSize="36px"
          textTransform="uppercase"
          fontWeight="bold"
          my="5"
        >
          Lanjutkan ke Pembayaran
        </Heading>
        <Flex>
          <Box width="62.5%">
            <Box border="1px solid #dadada" px="5">
              <Heading
                fontSize="32px"
                textTransform="uppercase"
                fontWeight="bold"
              >
                opsi pengiriman
              </Heading>
              <Text>
                Pesanana degan Alterasi : +1 hari dari waktu pengiriman normal.
              </Text>
              <Text mt="2" mb="5">
                Memenuhi syarat untuk pengiriman gratis
              </Text>
            </Box>
            <Box border="1px solid #dadada" px="5" borderTop="none">
              <RadioGroup py="5">
                <Stack>
                  <Radio value="1">
                    Kirim ke Alamat
                    <Flex>
                      <Text>Pengiriman:</Text>
                      <Text color="#378694" mx="2">
                        TBD
                      </Text>
                    </Flex>
                    <Box>
                      <Text fontWeight="bold">
                        JABODETABEK: NEXT DAY, Pulau Jawa: 1-10 hari kerja,
                      </Text>
                      <Text fontWeight="bold"> Luar Jawa: 2-13 hari kerja</Text>
                    </Box>
                  </Radio>
                  <Radio value="2">
                    Klik & Ambil
                    <Flex>
                      <Text>Pengiriman:</Text>
                      <Text color="#378694" mx="2">
                        Gratis
                      </Text>
                    </Flex>
                    <Box>
                      <Text fontWeight="bold">
                        JABODETABEK: 0-2 hari kerja, Pulau Jawa: 0-10 hari
                        kerja,
                      </Text>
                      <Text fontWeight="bold">Luar Jawa: 0-13 hari kerja</Text>
                    </Box>
                  </Radio>
                </Stack>
              </RadioGroup>
              <Divider />
              {addresses.map((item, index) => (
                <>
                  <Flex key={index} justify="space-between" my="5">
                    <Flex w="30%">
                      <Text>{item.name}</Text>
                      {item.primary === true ? (
                        <Text>(Alamat Keanggotaan)</Text>
                      ) : (
                        <></>
                      )}
                    </Flex>
                    <Box w="35%" px="5">
                      {item.address}
                    </Box>
                    <Flex
                      w="35%"
                      align="center"
                      justify="center"
                      direction="column"
                    >
                      {item.primary === true ? (
                        <Button
                          textTransform="uppercase"
                          w="50%"
                          variant="outline"
                          borderColor="black"
                          bgColor="white"
                          color="black"
                          borderRadius="0"
                          size="sm"
                          leftIcon={<CheckIcon color="green" />}
                        >
                          terpilih
                        </Button>
                      ) : (
                        <Button
                          textTransform="uppercase"
                          w="50%"
                          variant="outline"
                          borderColor="black"
                          bgColor="white"
                          color="black"
                          borderRadius="0"
                          size="sm"
                        >
                          pilih
                        </Button>
                      )}

                      <Button
                        textTransform="uppercase"
                        w="50%"
                        variant="outline"
                        borderColor="black"
                        bgColor="white"
                        color="black"
                        borderRadius="0"
                        size="sm"
                        mt="3"
                      >
                        ubah
                      </Button>
                    </Flex>
                  </Flex>
                  <Divider />
                </>
              ))}
              <Box my="6">
                <Button
                  textTransform="uppercase"
                  w="35%"
                  variant="outline"
                  borderColor="black"
                  bgColor="black"
                  color="white"
                  borderRadius="0"
                  fontWeight="bold"
                >
                  Lanjut ke pembayaran
                </Button>
                <Button
                  textTransform="uppercase"
                  w="35%"
                  variant="outline"
                  borderColor="black"
                  bgColor="white"
                  color="black"
                  borderRadius="0"
                  mx="5"
                  fontWeight="bold"
                >
                  daftar alamat baru
                </Button>
              </Box>
            </Box>
            <Box>
              <Box border="1px solid #dadada" mt={10} px="5">
                <Box my="5">
                  <Text
                    fontSize="32px"
                    textTransform="uppercase"
                    fontWeight="bold"
                  >
                    pilihan pembayaran
                  </Text>
                  <Text>Silahkan pilih opsi pembayaran Anda.</Text>
                </Box>
              </Box>
              <Box border="1px solid #dadada" p="5" borderTop="none">
                <RadioGroup defaultValue="1" textTransform="capitalize">
                  <Stack spacing={4} direction="row">
                    <Radio value="1">bayar di tempat</Radio>
                    <Radio value="2">kartu kredit</Radio>
                    <Radio value="4">pembayaran transfer bank</Radio>
                  </Stack>
                </RadioGroup>
                <Divider my="5" />
                <Text>
                  Harap lakukan pembayaran kepada kurir secara tunai saat kurir
                  mengirimkan pesanan Anda.
                </Text>
                <Button
                  textTransform="uppercase"
                  w="40%"
                  variant="outline"
                  borderColor="black"
                  bgColor="black"
                  color="white"
                  borderRadius="0"
                  fontWeight="bold"
                  mt="5"
                >
                  lanjutkan
                </Button>
              </Box>
            </Box>
            <Box>
              <Box border="1px solid #dadada" mt={10} px="5">
                <Heading
                  fontSize="32px"
                  textTransform="uppercase"
                  fontWeight="bold"
                >
                  ringkasan pesanan
                </Heading>
              </Box>
              <Box border="1px solid #dadada" p="5" borderTop="none">
                <Flex justify="space-between">
                  <Text>Subtotal produk</Text>
                  <Text>Rp{total}</Text>
                </Flex>
                <Flex justify="space-between" my="3">
                  <Text>Pengiriman</Text>
                  <Text>Rp0</Text>
                </Flex>
                <Divider />
                <Flex justify="space-between" my="3">
                  <Text fontWeight="bold" textTransform="uppercase">
                    Subtotal
                  </Text>
                  <Text fontWeight="bold">Rp{total}</Text>
                </Flex>
                <Flex justify="space-between">
                  <Text>termasuk PPN</Text>
                  <Text>Rp{(total * 10) / 100}</Text>
                </Flex>
                <Divider my="3" />
                <Flex justify="space-between">
                  <Text fontWeight="bold" textTransform="uppercase">
                    Total pesanan
                  </Text>
                  <Text fontWeight="bold">Rp{total}</Text>
                </Flex>
                <Box mt="6">
                  <Button
                    textTransform="uppercase"
                    bgColor="red"
                    color="white"
                    borderRadius="0"
                    fontWeight="bold"
                    w="40%"
                  >
                    lakukan pemesanan
                  </Button>
                  <Text fontSize="14px" color="#7d7d7d">
                    Tekan Lakukan Pemesanan untuk menyelesaikan pembayaran.
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box border="1px solid #dadada" mt={10} mb={10}>
              <Flex m="5" align="center">
                <SlLock />
                <Box ml="2">
                  <Text>
                    Kami mengenkripsi semua informasi sensitif Anda dengan
                    teknologi enkripsi
                  </Text>
                  <Text textDecor="underline">
                    TLS (Transport Layer Security)
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Box>
          <Box width="6.25%"></Box>
          <Box width="31.25%">
            <Box border="1px solid #dadada" p="5">
              <Flex justify="space-between">
                <Text
                  fontWeight="bold"
                  textTransform="uppercase"
                  fontSize="20px"
                >
                  RINGKASAN PESANAN|{cart.length} PRODUK
                </Text>
                <Text
                  fontWeight="bold"
                  textTransform="uppercase"
                  textDecor="underline"
                >
                  ubah
                </Text>
              </Flex>
              <Flex justify="space-between" mt="5">
                <Text>Subtotal produk</Text>
                <Text>Rp{total}</Text>
              </Flex>
              <Flex justify="space-between" mt="2" mb="5">
                <Text>Pengiriman</Text>
                <Text>Rp0</Text>
              </Flex>
              <Flex justify="space-between">
                <Text fontWeight="bold" textTransform="uppercase">
                  Subtotal
                </Text>
                <Text fontWeight="bold">Rp{total}</Text>
              </Flex>
              <Flex justify="space-between" my="2">
                <Text>termasuk PPN</Text>
                <Text>Rp{(total * 10) / 100}</Text>
              </Flex>
              <Flex justify="space-between" mt="5">
                <Text fontWeight="bold" textTransform="uppercase">
                  Total pesanan
                </Text>
                <Text fontWeight="bold">Rp{total}</Text>
              </Flex>
            </Box>

            <Box border="1px solid #dadada" mt="5" p="5">
              <Text fontWeight="bold" textTransform="uppercase" mb="5">
                produk yang dipesan
              </Text>
              <Wrap>
                {cart.map((item, index) => (
                  <WrapItem key={index}>
                    <Box>
                      <Image src={item.src} w="70px" />
                      <Text>x{item.qty}</Text>
                    </Box>
                  </WrapItem>
                ))}
              </Wrap>
            </Box>
            <Box mt={5}>
              <Divider />
              <Flex justify="space-between" my="3">
                <Flex align="center" justify="center">
                  <RiCoupon3Line />
                  <Text mx="2"> Kupon </Text>
                </Flex>
                <SlArrowRight />
              </Flex>
              <Divider />
            </Box>
          </Box>
        </Flex>
      </Container>
      <Footer />
    </>
  );
};

export default Checkout;
