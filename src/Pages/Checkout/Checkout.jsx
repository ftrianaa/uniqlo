import { CheckIcon, ChevronDownIcon } from '@chakra-ui/icons';
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
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';
import { RiCoupon3Line } from 'react-icons/ri';
import { SlArrowRight, SlLock } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import { addresses, cart } from './data';

const Checkout = () => {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  const navigate = useNavigate();
  let total = 0;

  {
    cart.map(item => {
      total += parseInt(item.price) * item.qty;
    });
  }
  return (
    <>
      {isDesktop ? (
        <>
          <Header />
        </>
      ) : (
        <>
          <Flex
            height={{ base: '5rem', lg: '4.5rem' }}
            maxW="8xl"
            px={{ base: 5, md: 10, lg: 20 }}
            bgColor="white"
            align="center"
            boxShadow="0 2px 2px rgba(0,0,0,0.16)"
            justify="space-between"
            zIndex="999"
            position="sticky"
            top="0"
          >
            <Image
              src="https://cdn.shopify.com/s/files/1/0608/6724/8340/files/Logo_klamby_baru_banget_140x@2x.png?v=1643345083"
              h="7"
              onClick={() => navigate('/')}
            />
            <Flex align="center" gap="2">
              <Text textTransform="uppercase" fontSize="11px">
                1 produk
              </Text>
              <Text fontWeight="bold" fontSize="20px">
                Rp229.800
              </Text>
              <ChevronDownIcon />
            </Flex>
          </Flex>
          <Flex
            bgColor={'#f4f4f4'}
            px={{ base: 5, md: 10, lg: 20 }}
            align="center"
            gap="2"
          >
            <CheckIcon color="green" />
            <Text
              textTransform="uppercase"
              fontWeight="bold"
              fontSize="20px"
              my="5"
            >
              opsi pengiriman
            </Text>
          </Flex>
          <Box px={{ base: 5, md: 10, lg: 20 }} fontSize="15px">
            <Box bgColor="white" p="5" boxShadow="0 2px 2px rgba(0,0,0,0.16)">
              <Flex
                justify="space-between"
                textTransform="uppercase"
                fontWeight="bold"
                fontSize="15px"
                mb="3"
              >
                <Text>kirim ke alamat</Text>
                <Text textDecor="underline">ubah</Text>
              </Flex>
              <Text>pulu</Text>
              <Text>wdqdqdqwdqwdqwdq, Langensari, West Java, Kota Banjar</Text>
              <Text>231321321313</Text>
            </Box>
            <Box
              bgColor="white"
              p="5"
              boxShadow="0 2px 2px rgba(0,0,0,0.16)"
              mt="5"
            >
              <Text
                textTransform="uppercase"
                fontWeight="bold"
                fontSize="15px"
                mb="3"
              >
                tanggal pengiriman
              </Text>
              <Flex gap="2">
                <Text>Pengiriman: </Text>
                <Text color="#378694" fontWeight="bold">
                  Rp.30.800
                </Text>
              </Flex>
              <Box my="2">
                <Text>Estimasi waktu pengiriman:</Text>
                <Text>27/04/2023 - 09/05/2023</Text>
              </Box>
              <Text>
                (Temukan detail pengiriman dalam email pemberitahuan setelah
                peletakan order)
              </Text>
            </Box>
            <Box
              bgColor="white"
              p="5"
              boxShadow="0 2px 2px rgba(0,0,0,0.16)"
              mt="5"
            >
              <Text
                textTransform="uppercase"
                fontWeight="bold"
                fontSize="15px"
                mb="3"
              >
                produk yang dipesan
              </Text>
              <Wrap>
                {cart.map((item, index) => (
                  <WrapItem
                    key={index}
                    onClick={() => navigate('/products/5')}
                    cursor="pointer"
                  >
                    <Box>
                      <Image src={item.src} w="70px" />
                      <Text>x{item.qty}</Text>
                    </Box>
                  </WrapItem>
                ))}
              </Wrap>
            </Box>
            <Box
              bgColor="white"
              p="5"
              boxShadow="0 2px 2px rgba(0,0,0,0.16)"
              mt="5"
            >
              <Flex align="center" justify="space-between" mb="3">
                <Flex align="center" gap="3">
                  <RiCoupon3Line />
                  <Text
                    textTransform="uppercase"
                    fontWeight="bold"
                    fontSize="15px"
                  >
                    kupon
                  </Text>
                </Flex>
                <Text
                  textTransform="uppercase"
                  fontWeight="bold"
                  textDecor="underline"
                >
                  ubah
                </Text>
              </Flex>
              <Text>Tidak ada.</Text>
            </Box>
            <Flex align="center" gap="2">
              <CheckIcon color="green" />
              <Text
                textTransform="uppercase"
                fontWeight="bold"
                fontSize="20px"
                my="5"
              >
                pilihan pembayaran
              </Text>
            </Flex>
            <Box bgColor="white" p="5" boxShadow="0 2px 2px rgba(0,0,0,0.16)">
              <Flex
                justify="space-between"
                textTransform="uppercase"
                fontWeight="bold"
                fontSize="15px"
                mb="3"
              >
                <Text>pembayaran transfer bank</Text>
                <Text textDecor="underline">ubah</Text>
              </Flex>
              <Text>BCA VA</Text>
            </Box>

            <Box>
              <Text
                textTransform="uppercase"
                fontWeight="bold"
                fontSize="20px"
                my="5"
              >
                ringkasan pesanan
              </Text>
            </Box>
            <Box bgColor="white" p="5" boxShadow="0 2px 2px rgba(0,0,0,0.16)">
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
            </Box>
          </Box>
          <Flex
            bgColor="white"
            p="5"
            boxShadow="0 2px 2px rgba(0,0,0,0.16)"
            gap="2"
            my="5"
          >
            <SlLock fontSize="20px" />
            <Box>
              <Text>
                Kami mengenkripsi semua informasi sensitif Anda dengan teknologi
                enkripsi
              </Text>
              <Text textDecor="underline">TLS (Transport Layer Security)</Text>
            </Box>
          </Flex>
          <Box
            p="5"
            bgColor="white"
            boxShadow="0 0 4px 0 rgba(0,0,0,0.4)"
            pos="sticky"
            bottom="0"
            left="0"
            zIndex="1"
            overflow="visible"
            content=""
            transform=" translate3d(0, 0, 0)"
            transitionProperty="height, width"
          >
            <Text>Tekan Lakukan Pemesanan untuk menyelesaikan pembayaran.</Text>
            <Button
              textTransform="uppercase"
              bgColor="red"
              color="white"
              borderRadius="0"
              fontWeight="bold"
              onClick={() => navigate('/complete')}
              size="lg"
              mt="2"
              w="100%"
            >
              lakukan pemesanan
            </Button>
          </Box>
        </>
      )}
      {isDesktop ? (
        <>
          <Container bgColor="white" px={{ base: 5, md: 10, lg: 20 }}>
            <Breadcrumb
              fontSize="sm"
              fontWeight="medium"
              color={mode('gray.600', 'gray.400')}
              separator={'/'}
            >
              <BreadcrumbItem>
                <BreadcrumbLink onClick={() => navigate('/')}>
                  Home
                </BreadcrumbLink>
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
                    Pesanana degan Alterasi : +1 hari dari waktu pengiriman
                    normal.
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
                          <Text fontWeight="bold">
                            {' '}
                            Luar Jawa: 2-13 hari kerja
                          </Text>
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
                          <Text fontWeight="bold">
                            Luar Jawa: 0-13 hari kerja
                          </Text>
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
                      onClick={() => navigate('/member/addresses')}
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
                      Harap lakukan pembayaran kepada kurir secara tunai saat
                      kurir mengirimkan pesanan Anda.
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
                        onClick={() => navigate('/complete')}
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
                      onClick={() => navigate('/cart')}
                      cursor="pointer"
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
                      <WrapItem
                        key={index}
                        onClick={() => navigate('/products/5')}
                        cursor="pointer"
                      >
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
      ) : (
        <></>
      )}
    </>
  );
};

export default Checkout;
