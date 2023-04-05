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
  return (
    <>
      <Header />
      <Container px="20" bgColor="white">
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
            <BreadcrumbLink href="#">Keranjang Belanja</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Heading
          fontSize="36px"
          textTransform="uppercase"
          textAlign="left"
          fontWeight="bold"
        >
          keranjang belanja
        </Heading>
        <Flex fontSize="15px">
          <Box w="65%">
            {cart.map((item, index) => {
              total += item.qty * item.price;
              return (
                <>
                  <Flex direction="row" my={5} key={index}>
                    <Flex justify="center" align="center">
                      <Image
                        src={item.src}
                        alt={item.title}
                        w={[50, '40px', 230]}
                        h={[50, '40px', 230]}
                        maxW="none"
                        objectFit="contain"
                      />
                    </Flex>

                    <Box px="5">
                      <Flex justify="space-between" align="center">
                        <Box>
                          <Flex align="center">
                            <Text
                              fontSize="16px"
                              textAlign="left"
                              textOverflow="ellipsis"
                              overflow="hidden"
                              whiteSpace="nowrap"
                              w={['150px', '150px', '400px']}
                              fontWeight="bold"
                            >
                              {item.title}
                            </Text>
                            <CloseButton size="sm" />
                          </Flex>
                          <Box my="5">
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
                      <Flex justify="space-between">
                        <Box>
                          <Text fontWeight="bold" textTransform="uppercase">
                            Jumlah
                          </Text>
                          <Select>
                            <option value={item.qty}>{item.qty}</option>
                          </Select>
                        </Box>
                        <Flex>
                          <Text fontWeight="bold" textTransform="uppercase">
                            subtotal:
                          </Text>
                          <Text fontWeight="bold">
                            Rp{item.qty * item.price}
                          </Text>
                        </Flex>
                      </Flex>
                    </Box>
                  </Flex>
                  <Divider w="98%" />
                </>
              );
            })}
          </Box>
          <Box w="35%">
            <Box border="1px solid #e0e0e0" p="5">
              <Text fontWeight="bold" textTransform="uppercase" fontSize="20px">
                RINGKASAN PESANAN|{cart.length} PRODUK
              </Text>
              <Flex justify="space-between" py="5">
                <Text>Subtotal produk</Text>
                <Text>Rp{total}</Text>
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
              <Flex justify="space-between" pt="5">
                <Text fontWeight="bold" textTransform="uppercase">
                  Total pesanan
                </Text>
                <Text fontWeight="bold">Rp{total}</Text>
              </Flex>
            </Box>
            <Box my="5">
              <Divider />
            </Box>
            <Flex justify="space-between">
              <Flex align="center">
                <RiCoupon3Line />
                <Text> Kupon </Text>
              </Flex>
              <SlArrowRight />
            </Flex>
            <Box my="5">
              <Divider />
            </Box>
            <Flex justify="space-between">
              <Flex align="center">
                <RiGiftLine />
                <Text> Jadikan sebagai kado </Text>
              </Flex>
              <SlArrowRight />
            </Flex>
            <Flex align="center" justify="space-between" my="5">
              <Text w="80%">
                Produk pilihan Anda akan disimpan hingga 30 menit setelah tombol
                “Lanjutkan Pembelian” ditekan.
              </Text>
              <RiInformationLine />
            </Flex>
            <Text fontSize="20px" fontWeight="bold" textTransform="uppercase">
              ketentuan penggunaan
            </Text>
            <Text my="5">
              Dengan menekan tombol pembayaran, Anda setuju dengan syarat dan
              ketentuan kami.
            </Text>
            <Text
              textDecor="underline"
              fontWeight="bold"
              textTransform="uppercase"
            >
              ketentuan penggunaan
            </Text>

            <Button
              w="100%"
              bgColor="red"
              borderColor="red"
              color="#fff"
              textTransform="uppercase"
              my="5"
              borderRadius="0"
              onClick={() => navigate('/checkout')}
            >
              lanjutkan ke pembayaran
            </Button>
            <Button
              w="100%"
              variant="outline"
              textTransform="uppercase"
              borderColor="black"
              borderRadius="0"
              onClick={() => navigate('/')}
            >
              lanjut belanja
            </Button>
            <Text fontSize="14px" color="#7d7d7d">
              Memenuhi syarat untuk pengiriman gratis.
            </Text>
          </Box>
        </Flex>
        <Box>
          <Heading
            fontSize="36px"
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
