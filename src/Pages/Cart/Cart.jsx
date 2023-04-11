import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Flex,
  useColorModeValue as mode,
  Heading,
  Box,
  Card,
  Text,
  Image,
  Stack,
  CardBody,
  CardFooter,
  Button,
  CloseButton,
  Grid,
  GridItem,
  Select,
  Divider,
  Tooltip,
  Spacer,
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';
import {
  RiCoupon3Fill,
  RiCoupon3Line,
  RiGiftLine,
  RiInformationLine,
} from 'react-icons/ri';
import { SlArrowRight } from 'react-icons/sl';

import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import ProductCarousel from '../../Components/ProductCarousel/ProductCarousel';
import { cart } from './data';

const Cart = () => {
  const navigate = useNavigate();
  let total = 0;
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <>
      <Header />
      {!isDesktop ? (
        <Image src="https://im.uniqlo.com/global-cms/spa/res0bb2cb01bf1656f3168063e7b4a61856fr.jpg" />
      ) : (
        <></>
      )}
      <Container px={{ base: 5, md: 10, lg: 20 }} bgColor="white">
        {isDesktop ? (
          <>
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
                <BreadcrumbLink href="#">Keranjang Belanja</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </>
        ) : (
          <></>
        )}
        <Heading
          fontSize={{ base: '22px', lg: '36px' }}
          textTransform="uppercase"
          textAlign="left"
          fontWeight="bold"
        >
          keranjang belanja
        </Heading>
        <Flex fontSize="15px" flexDirection={{ base: 'column', lg: 'row' }}>
          <Box w={{ base: '100%', lg: '65%' }}>
            {cart.map((item, index) => {
              total += item.qty * item.price;
              return (
                <>
                  <Flex direction="row" my={5} key={index}>
                    <Flex
                      justify="center"
                      align={{ base: 'baseline', lg: 'center' }}
                    >
                      <Image
                        src={item.src}
                        alt={item.title}
                        w={{ base: 130, lg: 230 }}
                        h={{ base: 130, lg: 230 }}
                        maxW="none"
                        objectFit="contain"
                      />
                    </Flex>

                    <Box px="5">
                      <Flex justify="space-between" align="center">
                        <Box fontSize={{ base: '15px', lg: '16px' }}>
                          <Flex align="center">
                            <Text
                              textAlign="left"
                              textOverflow="ellipsis"
                              overflow="hidden"
                              whiteSpace="nowrap"
                              w={{ base: '200px', lg: '400px' }}
                              fontWeight="bold"
                            >
                              {item.title}
                            </Text>
                            <CloseButton size="sm" />
                          </Flex>
                          <Box my={{ base: 0, lg: 5 }}>
                            <Text color="#7d7d7d">
                              kode produk: {item.codeItem}
                            </Text>
                            <Text>Warna: {item.color}</Text>
                            <Text>ukuran: {item.size}</Text>
                            <Text color="#7d7d7d">{item.notes}</Text>
                            <Text fontWeight="bold">Rp{item.price}</Text>
                          </Box>
                        </Box>
                      </Flex>
                      <Flex
                        justify="space-between"
                        flexDirection={{ base: 'column', lg: 'row' }}
                      >
                        <Box>
                          {isDesktop ? (
                            <Text fontWeight="bold" textTransform="uppercase">
                              Jumlah
                            </Text>
                          ) : (
                            <></>
                          )}

                          <Select
                            variant={{ base: 'flushed', lg: 'outline' }}
                            borderRadius={0}
                            w={{ base: '25%', lg: '100%' }}
                          >
                            <option value={item.qty}>{item.qty}</option>
                          </Select>
                        </Box>
                        <Flex>
                          <Text
                            fontWeight="bold"
                            textTransform="uppercase"
                            color={{ base: '#7d7d7d', lg: 'black' }}
                          >
                            subtotal:
                          </Text>
                          <Text fontWeight="bold" mx="3">
                            Rp{item.qty * item.price}
                          </Text>
                        </Flex>
                      </Flex>
                    </Box>
                  </Flex>
                  {isDesktop && cart.length > 1 && item.id < cart.length ? (
                    <Divider w={{ base: '100%', lg: '98%' }} />
                  ) : (
                    <></>
                  )}
                </>
              );
            })}
          </Box>
          <Box
            w={{ base: '100%', lg: '35%' }}
            fontSize={{ base: '15px', lg: '16px' }}
          >
            <Box
              boxShadow={{ base: '0 1px 5px 0 rgba(0,0,0,0.16)', lg: 'none' }}
              border={{ base: 'none', lg: '1px solid #e0e0e0' }}
              p="5"
            >
              <Text
                fontWeight="bold"
                textTransform="uppercase"
                fontSize={{ base: '15px', lg: '20px' }}
                mb={{ base: 2, lg: 0 }}
              >
                RINGKASAN PESANAN | {cart.length} PRODUK
              </Text>
              <Flex
                justify="space-between"
                py={{ base: 2, lg: '5' }}
                borderBottom={{ base: '1px solid #e0e0e0', lg: 'none' }}
              >
                <Text>Subtotal produk</Text>
                <Text>Rp{total}</Text>
              </Flex>
              <Flex
                justify="space-between"
                py={{ base: 2, lg: 0 }}
                borderBottom={{ base: '1px solid #e0e0e0', lg: 'none' }}
              >
                <Text fontWeight="bold" textTransform="uppercase">
                  Subtotal
                </Text>
                <Text fontWeight="bold">Rp{total}</Text>
              </Flex>
              <Flex
                justify="space-between"
                py={{ base: 2, lg: 0 }}
                borderBottom={{ base: '1px solid #e0e0e0', lg: 'none' }}
              >
                <Text>Termasuk PPN</Text>
                <Text>Rp{(total * 10) / 100}</Text>
              </Flex>
              <Flex justify="space-between" pt={{ base: 2, lg: '5' }}>
                <Text fontWeight="bold" textTransform="uppercase">
                  Total pesanan
                </Text>
                <Text fontWeight="bold">Rp{total}</Text>
              </Flex>
            </Box>

            <Flex
              my={{ base: 5, lg: 5 }}
              justify="space-between"
              borderY={{ base: 'none', lg: '1px solid #e0e0e0' }}
              boxShadow={{ base: '0 1px 5px 0 rgba(0,0,0,0.16)', lg: 'none' }}
              p={{ base: 4, lg: 0 }}
              align="center"
            >
              <Flex align="center" py={{ base: 0, lg: 4 }}>
                <RiCoupon3Line />
                <Text
                  mx="2"
                  fontWeight={{ base: 'bold', lg: 'normal' }}
                  textTransform={{ base: 'uppercase', lg: 'none' }}
                >
                  Kupon
                </Text>
              </Flex>
              <SlArrowRight />
            </Flex>
            <Flex
              justify="space-between"
              boxShadow={{ base: '0 1px 5px 0 rgba(0,0,0,0.16)', lg: 'none' }}
              p={{ base: 4, lg: 0 }}
            >
              <Flex align="center">
                <RiGiftLine />
                <Text
                  mx="2"
                  fontWeight={{ base: 'bold', lg: 'normal' }}
                  textTransform={{ base: 'uppercase', lg: 'none' }}
                >
                  Jadikan sebagai kado
                </Text>
              </Flex>
              <SlArrowRight />
            </Flex>
            <Box
              boxShadow={{ base: '0 1px 5px 0 rgba(0,0,0,0.16)', lg: 'none' }}
              p={{ base: 4, lg: 0 }}
              my={{ base: 5, lg: 0 }}
            >
              <Flex
                align="center"
                justify="space-between"
                my={{ base: 0, lg: 5 }}
              >
                <Text w={{ base: '90%', lg: '80%' }}>
                  Produk pilihan Anda akan disimpan hingga 30 menit setelah
                  tombol “Lanjutkan Pembelian” ditekan.
                </Text>
                <RiInformationLine w={{ base: '10%', lg: '20%' }} size="25px" />
              </Flex>
              <Text
                fontSize="20px"
                fontWeight="bold"
                textTransform="uppercase"
                my={{ base: '3', lg: '0' }}
              >
                ketentuan penggunaan
              </Text>
              <Text my={{ base: '0', lg: '5' }}>
                Dengan menekan tombol pembayaran, Anda setuju dengan syarat dan
                ketentuan kami.
              </Text>
              <Text
                textDecor="underline"
                fontWeight="bold"
                textTransform="uppercase"
                my={{ base: '3', lg: '0' }}
              >
                ketentuan penggunaan
              </Text>

              <Button
                w="100%"
                bgColor="red"
                borderColor="red"
                color="#fff"
                textTransform="uppercase"
                my={{ base: '0', lg: '5' }}
                borderRadius="0"
                onClick={() => navigate('/checkout')}
                fontWeight="bold"
              >
                lanjutkan ke pembayaran
              </Button>
              <Button
                w="100%"
                variant="outline"
                textTransform="uppercase"
                borderColor={{ base: 'transparent', lg: 'black' }}
                borderRadius="0"
                onClick={() => navigate('/')}
                my={{ base: '3', lg: '0' }}
                fontWeight="bold"
              >
                lanjut belanja
              </Button>
              <Text fontSize="14px" color="#7d7d7d">
                Memenuhi syarat untuk pengiriman gratis.
              </Text>
            </Box>
          </Box>
        </Flex>
        <Box my="5">
          <Heading
            fontSize={{ base: '22px', lg: '36px' }}
            textTransform="uppercase"
            textAlign="left"
            fontWeight="bold"
          >
            baru saja dilihat
          </Heading>
          <ProductCarousel />
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Cart;
