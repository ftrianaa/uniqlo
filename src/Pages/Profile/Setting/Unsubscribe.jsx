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
      <Heading textTransform="uppercase" fontSize="32px" fontWeight="bold">
        pembatalan dari keanggotaan
      </Heading>
      <Text>
        Jika Anda menarik diri dari keanggotaan kami, Anda akan kehilangan akses
        ke layanan riwayat pembelian dan koneksi keanggotaan ke aplikasi UNIQLO.
      </Text>
      <Text>"Layanan yang koneksinya hilang,"</Text>
      <Text>Aplikasi UNIQLO</Text>
      <Text color="#7d7d7d">
        Mungkin butuh beberapa saat untuk menghapus koneksi keanggotaan dari
        aplikasi UNIQLO.
      </Text>
      <Text>
        Jika Anda tidak dapat menghapus koneksi keanggotaan Anda dengan aplikasi
        UNIQLO, hapus cache Anda dan muat ulang halaman.
      </Text>
      <Divider />
      <Text fontWeight="bold" fontSize="20px" textTransform="uppercase">
        persetujuan pembatalan
      </Text>
      <Text color="#7d7d7d">
        Jika Anda ingin membatalkan keanggotaan Anda, Anda harus menyetujui
        Kebijakan Privasi dan Ketentuan Penggunaan UNIQLO.
      </Text>
      <Checkbox>
        Saya setuju dengan PERSYARATAN PENGGUNAAN dan KEBIJAKAN PRIVASI UNIQLO
      </Checkbox>
      <Flex textDecor="underline" fontWeight="bold">
        <Text>KETENTUAN PENGGUNAAN </Text>
        <Text>KEBIJAKAN PRIVASI</Text>
      </Flex>
      <Button textTransform="uppercase">Pembatalan</Button>
    </>
  );
};

export default Unsubscribe;
