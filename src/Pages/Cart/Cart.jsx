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
import { cart } from './data';

const Cart = () => {
  const navigate = useNavigate();
  let total = 0;
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
            <BreadcrumbLink href="#">Keranjang Belanja</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Heading fontSize="36px" textTransform="uppercase" textAlign="left">
          keranjang belanja
        </Heading>
        <Grid
          templateRows={['repeat(1, 1fr)', 'repeat(0, 1fr)', 'repeat(0, 1fr)']}
          templateColumns={[
            'repeat(0, 1fr)',
            'repeat(2, 1fr)',
            'repeat(2, 1fr)',
          ]}
          fontSize="15px"
          gap={5}
        >
          <GridItem colSpan={[1, 1, 1]} w="800px">
            {cart.map((item, index) => {
              total += item.qty * item.price;
              return (
                <>
                  <Flex direction="row" mt={5} key={index}>
                    <Flex justify="center" align="center">
                      <Image
                        src={item.src}
                        alt={item.title}
                        w={[50, '40px', 200]}
                        h={[50, '40px', 200]}
                        maxW="none"
                        objectFit="contain"
                      />
                    </Flex>
                    <Flex m={5}>
                      <Box>
                        <Flex justify="space-between" align="center">
                          <Box>
                            <Heading
                              fontSize="16px"
                              textAlign="left"
                              textOverflow="ellipsis"
                              overflow="hidden"
                              whiteSpace="nowrap"
                              w={['150px', '150px', '250px']}
                              mb={2}
                            >
                              {item.title}
                            </Heading>
                            <Text color="#7d7d7d">
                              kode produk: {item.codeItem}
                            </Text>
                            <Text>Warna: {item.color}</Text>
                            <Text>ukuran: {item.size}</Text>
                            <Text color="#7d7d7d">{item.notes}</Text>
                            <Text fontWeight="bold">Rp{item.price}</Text>
                          </Box>
                          <CloseButton size="sm" />
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
                  </Flex>
                  <Divider />
                </>
              );
            })}
          </GridItem>
          <GridItem colSpan={[1, 1, 1]}>
            <Box border="1px solid #e0e0e0" m={5} p="5">
              <Text fontWeight="bold" textTransform="uppercase">
                RINGKASAN PESANAN|{cart.length} PRODUK
              </Text>
              <Flex justify="space-between">
                <Text>subtotal produk</Text>
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
              <Flex justify="space-between">
                <Text fontWeight="bold" textTransform="uppercase">
                  Total pesanan
                </Text>
                <Text fontWeight="bold">Rp{total}</Text>
              </Flex>
            </Box>
            <Divider />
            <Flex justify="space-between" m={3}>
              <Flex align="center">
                <RiCoupon3Line />
                <Text> Kupon </Text>
              </Flex>
              <SlArrowRight />
            </Flex>
            <Divider />
            <Flex justify="space-between" m={3}>
              <Flex align="center">
                <RiGiftLine />
                <Text> Jadikan sebagai kado </Text>
              </Flex>
              <SlArrowRight />
            </Flex>
            <Flex align="center" justify="space-between" m={3}>
              <Text w="80%">
                Produk pilihan Anda akan disimpan hingga 30 menit setelah tombol
                “Lanjutkan Pembelian” ditekan.
              </Text>
              <RiInformationLine />
            </Flex>
            <Text
              fontSize="20px"
              fontWeight="bold"
              textTransform="uppercase"
              m={3}
            >
              ketentuan penggunaan
            </Text>
            <Text m={3}>
              Dengan menekan tombol pembayaran, Anda setuju dengan syarat dan
              ketentuan kami.
            </Text>
            <Text
              textDecor="underline"
              fontWeight="bold"
              textTransform="uppercase"
              m="3"
            >
              ketentuan penggunaan
            </Text>

            <Button
              w="100%"
              bgColor="red"
              borderColor="red"
              color="#fff"
              textTransform="uppercase"
              m={3}
            >
              lanjutkan ke pembayaran
            </Button>
            <Button w="100%" variant="outline" textTransform="uppercase" m={3}>
              lanjut belanja
            </Button>
            <Text fontSize="14px" color="#7d7d7d" m={3}>
              Memenuhi syarat untuk pengiriman gratis.
            </Text>
          </GridItem>
        </Grid>
        <Heading fontSize="36px" textTransform="uppercase" textAlign="left">
          baru saja dilihat
        </Heading>
      </Container>
      <Footer />
    </>
  );
};

export default Cart;
