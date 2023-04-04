import {
  Button,
  Checkbox,
  Divider,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';
import React from 'react';

const Unsubscribe = () => {
  return (
    <>
      <Text textTransform="uppercase" fontSize="32px" fontWeight="bold">
        pembatalan dari keanggotaan
      </Text>
      <Text my="3">
        Jika Anda menarik diri dari keanggotaan kami, Anda akan kehilangan akses
        ke layanan riwayat pembelian dan koneksi keanggotaan ke aplikasi UNIQLO.
      </Text>
      <Text>"Layanan yang koneksinya hilang,"</Text>
      <Text>Aplikasi UNIQLO</Text>
      <Text color="#7d7d7d" my="3">
        Mungkin butuh beberapa saat untuk menghapus koneksi keanggotaan dari
        aplikasi UNIQLO.
      </Text>
      <Text>
        Jika Anda tidak dapat menghapus koneksi keanggotaan Anda dengan aplikasi
        UNIQLO, hapus cache Anda dan muat ulang halaman.
      </Text>
      <Divider my="3" />
      <Text fontWeight="bold" fontSize="20px" textTransform="uppercase">
        persetujuan pembatalan
      </Text>
      <Text color="#7d7d7d" my="3">
        Jika Anda ingin membatalkan keanggotaan Anda, Anda harus menyetujui
        Kebijakan Privasi dan Ketentuan Penggunaan UNIQLO.
      </Text>
      <Checkbox>
        Saya setuju dengan PERSYARATAN PENGGUNAAN dan KEBIJAKAN PRIVASI UNIQLO
      </Checkbox>
      <Flex textDecor="underline" fontWeight="bold" my="3">
        <Text>KETENTUAN PENGGUNAAN </Text>
        <Text mx="3">KEBIJAKAN PRIVASI</Text>
      </Flex>
      <Button
        textTransform="uppercase"
        variant="outline"
        borderColor="black"
        bgColor="black"
        color="white"
        borderRadius="0"
        w="35%"
        fontWeight="bold"
      >
        Pembatalan
      </Button>
    </>
  );
};

export default Unsubscribe;
