import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Spacer,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import React from 'react';
import { RiInformationLine } from 'react-icons/ri';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import { cart, addresses } from '../Checkout/data';

const CompletePayment = () => {
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
      <Container w="60%">
        <Box textAlign="center" m={5}>
          <Heading textTransform="uppercase" fontSize="36px">
            terima kasih
          </Heading>
          <Text>
            Terima kasih telah berbelanja di UNIQLO. Kami telah menerima pesanan
            Anda.
          </Text>
          <Button textTransform="uppercase">lanjut belanja</Button>
        </Box>
        <Box>
          <Heading size="16px" textTransform="uppercase">
            nomor pesanan
          </Heading>
          <Text fontSize="32px">{orderId(20) - orderId(7)}</Text>
          <Text>Estimasi waktu pengiriman: 29/03/2023 - 10/04/2023</Text>
          <Text>
            (Temukan detail pengiriman dalam email pemberitahuan setelah
            peletakan order)
          </Text>
        </Box>
        <Box border="1px solid #dadada" p={5}>
          <Flex align="center">
            <Heading textTransform="uppercase" fontSize="20px">
              ringkasan pesanan
            </Heading>
            <Spacer />
            <Text>Tentang pembatalan</Text>
            <Tooltip label="Hey, I'm here!" aria-label="A tooltip">
              <RiInformationLine />
            </Tooltip>
          </Flex>
          <Flex>
            <Button textTransform="uppercase" variant="outline">
              ringkasan pesanan cetak
            </Button>
            <Button textTransform="uppercase" variant="outline">
              riwayat pesanan
            </Button>
          </Flex>
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
        </Box>
        <Box border="1px solid #dadada" mt={10} p={5}>
          <Heading textTransform="uppercase" fontSize="20px">
            pembayaran transfer bank
          </Heading>
          <Text>
            Harap gunakan nomor rekening virtual untuk melakukan pembayaran
            melalui transfer bank atau ATM sebelum batas akhir pembayaran yang
            ditentukan. Pesanan Anda akan dibatalkan jika Anda tidak
            menyelesaikan pembayaran dalam batas akhir waktu pembayaran.
          </Text>
          <Heading textTransform="uppercase" fontSize="20px">
            VIRTUAL ACCOUNT NUMBER {virtualAccount(16)}
          </Heading>
          <Text>
            *Setelah anda melakukan transfer, sistem kami membutuhkan waktu 1,5
            jam untuk verifikasi dan konfirmasi status pembayaran anda.
          </Text>
          <Text>Batas akhir pembayaran 28/03/2023 10:37 AM WIB</Text>
          <Text textDecor="underline" textTransform="capitalize">
            Baca Petunjuk
          </Text>
        </Box>
        <Box border="1px solid #dadada" mt={10} p={5}>
          <Heading textTransform="uppercase" fontSize="20px">
            alamat pengiriman
          </Heading>
          <Text>{data.name}</Text>
          <Text>{data.address}</Text>
          <Text>{data.telp}</Text>
        </Box>
        <Box border="1px solid #dadada" mt={10} p={5}>
          <Heading textTransform="uppercase" fontSize="20px">
            tanggal pengiriman
          </Heading>
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
      </Container>
      <Footer />
    </>
  );
};

export default CompletePayment;
