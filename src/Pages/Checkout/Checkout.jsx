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
      <Container>
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

        <Heading fontSize="36px" textTransform="uppercase">
          Lanjutkan ke Pembayaran
        </Heading>
        <Flex>
          <Box width="62.5%" p={5}>
            <Box border="1px solid #dadada">
              <Heading fontSize="32px" textTransform="uppercase">
                opsi pengiriman
              </Heading>
              <Text>
                Pesanana degan Alterasi : +1 hari dari waktu pengiriman normal.
              </Text>
              <Text>Memenuhi syarat untuk pengiriman gratis</Text>
              <Divider />
              <RadioGroup>
                <Stack>
                  <Radio value="1">
                    Kirim ke Alamat
                    <Flex>
                      <Text>Pengiriman:</Text>
                      <Text color="#37869">TBD</Text>
                    </Flex>
                    <Text fontWeight="bold">
                      JABODETABEK: NEXT DAY, Pulau Jawa: 1-10 hari kerja, Luar
                      Jawa: 2-13 hari kerja
                    </Text>
                  </Radio>
                  <Radio value="2">
                    Klik & Ambil
                    <Flex>
                      <Text>Pengiriman:</Text>
                      <Text color="#37869">Gratis</Text>
                    </Flex>
                    <Text fontWeight="bold">
                      JABODETABEK: 0-2 hari kerja, Pulau Jawa: 0-10 hari kerja,
                      Luar Jawa: 0-13 hari kerja
                    </Text>
                  </Radio>
                </Stack>
              </RadioGroup>
              <Divider />
              {addresses.map((item, index) => (
                <>
                  <Flex key={index} justify="space-between">
                    <Flex w="30%">
                      <Text>{item.name}</Text>
                      {item.primary === true ? (
                        <Text>(Alamat Keanggotaan)</Text>
                      ) : (
                        <></>
                      )}
                    </Flex>
                    <Box w="40%">{item.address}</Box>
                    <Box w="30%">
                      {item.primary === true ? (
                        <Button>terpilih</Button>
                      ) : (
                        <Button>pilih</Button>
                      )}

                      <Button>ubah</Button>
                    </Box>
                  </Flex>
                  <Divider />
                </>
              ))}
              <Divider />
              <Button>Lanjut ke pembayaran</Button>
              <Button>daftar alamat baru</Button>
            </Box>
            <Box border="1px solid #dadada" mt={10}>
              <Heading fontSize="32px" textTransform="uppercase">
                pilihan pembayaran
              </Heading>
              <Text>Silahkan pilih opsi pembayaran Anda.</Text>
              <Divider />
              <RadioGroup defaultValue="1" textTransform="capitalize">
                <Stack spacing={4} direction="row">
                  <Radio value="1">bayar di tempat</Radio>
                  <Radio value="2">kartu kredit</Radio>
                  <Radio value="3">bayar di toko</Radio>
                  <Radio value="4">pembayaran transfer bank</Radio>
                </Stack>
              </RadioGroup>
              <Divider />
              <Text>
                Harap lakukan pembayaran kepada kurir secara tunai saat kurir
                mengirimkan pesanan Anda.
              </Text>
              <Button textTransform="uppercase">lanjutkan</Button>
            </Box>
            <Box border="1px solid #dadada" mt={10}>
              <Heading fontSize="32px" textTransform="uppercase">
                ringkasan pesanan
              </Heading>
              <Divider />
              <Flex justify="space-between">
                <Text>subtotal produk</Text>
                <Text>Rp{total}</Text>
              </Flex>
              <Flex justify="space-between">
                <Text>Pengiriman</Text>
                <Text>Rp0</Text>
              </Flex>
              <Divider />
              <Flex justify="space-between">
                <Text fontWeight="bold" textTransform="uppercase">
                  Subtotal
                </Text>
                <Text fontWeight="bold">Rp{total}</Text>
              </Flex>
              <Flex justify="space-between">
                <Text>termasuk PPN</Text>
                <Text>Rp{(total * 10) / 100}</Text>
              </Flex>
              <Divider />
              <Flex justify="space-between">
                <Text fontWeight="bold" textTransform="uppercase">
                  Total pesanan
                </Text>
                <Text fontWeight="bold">Rp{total}</Text>
              </Flex>
              <Button textTransform="uppercase" bgColor="red" color="white">
                lanjutkan pemesanan
              </Button>
              <Text fontSize="14px" color="#7d7d7d">
                Tekan Lakukan Pemesanan untuk menyelesaikan pembayaran.
              </Text>
            </Box>
            <Box border="1px solid #dadada" mt={10}>
              <Flex m="5">
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
            <Box border="1px solid #dadada">
              <Flex justify="space-between">
                <Text fontWeight="bold" textTransform="uppercase">
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
              <Flex justify="space-between">
                <Text>subtotal produk</Text>
                <Text>Rp{total}</Text>
              </Flex>
              <Flex justify="space-between">
                <Text>Pengiriman</Text>
                <Text>Rp0</Text>
              </Flex>
              <Flex justify="space-between">
                <Text fontWeight="bold" textTransform="uppercase">
                  Subtotal
                </Text>
                <Text fontWeight="bold">Rp{total}</Text>
              </Flex>
              <Flex justify="space-between">
                <Text>termasuk PPN</Text>
                <Text>Rp{(total * 10) / 100}</Text>
              </Flex>
              <Flex justify="space-between">
                <Text fontWeight="bold" textTransform="uppercase">
                  Total pesanan
                </Text>
                <Text fontWeight="bold">Rp{total}</Text>
              </Flex>
            </Box>

            <Box border="1px solid #dadada">
              <Text fontWeight="bold" textTransform="uppercase">
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
              <Flex justify="space-between" m={3}>
                <Flex align="center">
                  <RiCoupon3Line />
                  <Text> Kupon </Text>
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
