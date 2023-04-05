import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Spacer,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import React from 'react';
import { RiInformationLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import { cart, addresses } from '../Checkout/data';

const CompletePayment = () => {
  const navigate = useNavigate();
  function orderId(length) {
    let result = '';
    let counter = 0;
    while (counter < length) {
      result += Math.floor(Math.random());
      counter += 1;
    }
    return result;
  }
  function virtualAccount(length) {
    let result = '';
    let counter = 0;
    while (counter < length) {
      result += Math.floor(Math.random());
      counter += 1;
    }
    return result;
  }
  let total = 0;
  {
    cart.map(item => {
      total += parseInt(item.price) * item.qty;
    });
  }
  let data = {};
  {
    addresses.forEach(item => {
      if (item.primary === true) {
        data = item;
      }
    });
  }
  return (
    <>
      <Header />
      <Container bgColor="white">
        <Flex align="center" justify="center">
          <Box w="60%">
            <Box textAlign="center" m={5}>
              <Heading
                textTransform="uppercase"
                fontSize="36px"
                fontWeight="bold"
              >
                terima kasih
              </Heading>
              <Text>
                Terima kasih telah berbelanja di UNIQLO. Kami telah menerima
                pesanan Anda.
              </Text>
              <Button
                textTransform="uppercase"
                bgColor="black"
                color="white"
                fontWeight="bold"
                borderRadius="0"
                my="5"
                w="40%"
              >
                lanjut belanja
              </Button>
            </Box>
            <Box>
              <Box mb="5">
                <Text size="16px" textTransform="uppercase" fontWeight="bold">
                  nomor pesanan
                </Text>
                <Text fontSize="32px">{orderId(20) - orderId(7)}</Text>
              </Box>
              <Text>Estimasi waktu pengiriman: 29/03/2023 - 10/04/2023</Text>
              <Text>
                (Temukan detail pengiriman dalam email pemberitahuan setelah
                peletakan order)
              </Text>
            </Box>
            <Box border="1px solid #dadada" p={5} mt="2">
              <Flex align="center">
                <Text
                  textTransform="uppercase"
                  fontSize="20px"
                  fontWeight="bold"
                >
                  ringkasan pesanan
                </Text>
                <Spacer />
                <Text>Tentang pembatalan</Text>
                <Popover islazy trigger={'hover'} placement="left">
                  <PopoverTrigger>
                    <Text>
                      <RiInformationLine />
                    </Text>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />

                    <PopoverBody>
                      <Flex>
                        <Text>
                          Saat ini, setiap pembelanjaan melalui online tidak
                          dapat di batalkan. Jika Anda ingin membatalkan, Anda
                          dapat melakukan pengembalian produk dan selanjutnya
                          melakukan transaksi kembali. Untuk keterangan lebih
                          lanjut silahkan cek <u>Kebijakan pengembalian</u>
                        </Text>
                      </Flex>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Flex>
              <Flex my="5">
                <Button
                  textTransform="uppercase"
                  variant="outline"
                  borderColor="black"
                  borderRadius="0"
                  fontWeight="bold"
                  w="40%"
                >
                  ringkasan pesanan cetak
                </Button>
                <Button
                  textTransform="uppercase"
                  variant="outline"
                  borderColor="black"
                  borderRadius="0"
                  fontWeight="bold"
                  w="40%"
                  mx="3"
                  onClick={() => navigate('/member/orders')}
                >
                  riwayat pesanan
                </Button>
              </Flex>
              <Flex justify="space-between">
                <Text>Subtotal produk</Text>
                <Text>Rp{total}</Text>
              </Flex>
              <Flex justify="space-between" my="3">
                <Text>Pengiriman</Text>
                <Text>Rp0</Text>
              </Flex>
              <Divider mb="3" />
              <Flex justify="space-between">
                <Text fontWeight="bold" textTransform="uppercase">
                  Subtotal
                </Text>
                <Text fontWeight="bold">Rp{total}</Text>
              </Flex>
              <Flex justify="space-between" my="3">
                <Text>Termasuk PPN</Text>
                <Text>Rp{(total * 10) / 100}</Text>
              </Flex>
              <Divider />
              <Flex justify="space-between" my="3">
                <Text fontWeight="bold" textTransform="uppercase">
                  Total pesanan
                </Text>
                <Text fontWeight="bold">Rp{total}</Text>
              </Flex>
            </Box>
            <Box border="1px solid #dadada" mt={10} p={5}>
              <Text textTransform="uppercase" fontSize="20px" fontWeight="bold">
                pembayaran transfer bank
              </Text>
              <Text>
                Harap gunakan nomor rekening virtual untuk melakukan pembayaran
                melalui transfer bank atau ATM sebelum batas akhir pembayaran
                yang ditentukan. Pesanan Anda akan dibatalkan jika Anda tidak
                menyelesaikan pembayaran dalam batas akhir waktu pembayaran.
              </Text>
              <Text
                fontWeight="bold"
                textTransform="uppercase"
                fontSize="20px"
                my="3"
              >
                VIRTUAL ACCOUNT NUMBER {virtualAccount(16)}
              </Text>
              <Text>
                *Setelah anda melakukan transfer, sistem kami membutuhkan waktu
                1,5 jam untuk verifikasi dan konfirmasi status pembayaran anda.
              </Text>
              <Text mt="2">Batas akhir pembayaran 28/03/2023 10:37 AM WIB</Text>
              <Text textDecor="underline" textTransform="capitalize" my="3">
                Baca Petunjuk
              </Text>
            </Box>
            <Box border="1px solid #dadada" mt={10} p={5}>
              <Text textTransform="uppercase" fontSize="20px" fontWeight="bold">
                alamat pengiriman
              </Text>
              <Box my="4">
                <Text>{data.name}</Text>
                <Text>{data.address}</Text>
                <Text>{data.telp}</Text>
              </Box>
            </Box>
            <Box border="1px solid #dadada" my={10} p={5}>
              <Text fontWeight="bold" textTransform="uppercase" fontSize="20px">
                tanggal pengiriman
              </Text>
              <Box my="4">
                <Flex>
                  <Text> Pengiriman:</Text>
                  <Text color="#378694">Gratis</Text>
                </Flex>
                <Text>Estimasi waktu pengiriman: 29/03/2023 - 10/04/2023</Text>
                <Text>
                  (Temukan detail pengiriman dalam email pemberitahuan setelah
                  peletakan order)
                </Text>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Container>
      <Footer />
    </>
  );
};

export default CompletePayment;
