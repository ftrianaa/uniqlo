import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  Heading,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';

const Unsubscribe = () => {
  return (
    <>
      <Box display={{ base: 'none', lg: 'block' }}>
        <Text textTransform="uppercase" fontSize="32px" fontWeight="bold">
          pembatalan dari keanggotaan
        </Text>
      </Box>
      <Box bgColor="white">
        <Box mx={{ base: '5', md: '10', lg: '0' }}>
          <Text my="3">
            Jika Anda menarik diri dari keanggotaan kami, Anda akan kehilangan
            akses ke layanan riwayat pembelian dan koneksi keanggotaan ke
            aplikasi UNIQLO.
          </Text>
          <Text>"Layanan yang koneksinya hilang,"</Text>
          <Text>Aplikasi UNIQLO</Text>
          <Text color="#7d7d7d" my="3" fontSize={{ base: '13px', lg: '14px' }}>
            Mungkin butuh beberapa saat untuk menghapus koneksi keanggotaan dari
            aplikasi UNIQLO.
          </Text>
          <Text>
            Jika Anda tidak dapat menghapus koneksi keanggotaan Anda dengan
            aplikasi UNIQLO, hapus cache Anda dan muat ulang halaman.
          </Text>
          <Divider my="3" />
          <Text
            fontWeight="bold"
            fontSize={{ base: '15px', lg: '20px' }}
            textTransform="uppercase"
          >
            persetujuan pembatalan
          </Text>
          <Text color="#7d7d7d" my="3" fontSize={{ base: '13px', lg: '14px' }}>
            Jika Anda ingin membatalkan keanggotaan Anda, Anda harus menyetujui
            Kebijakan Privasi dan Ketentuan Penggunaan UNIQLO.
          </Text>
          <Checkbox>
            Saya setuju dengan PERSYARATAN PENGGUNAAN dan KEBIJAKAN PRIVASI
            UNIQLO
          </Checkbox>
          <Flex
            textDecor="underline"
            fontWeight="bold"
            my="3"
            flexDir={{ base: 'column', lg: 'row' }}
          >
            <Text>KETENTUAN PENGGUNAAN </Text>
            <Text mx={{ base: 0, lg: '3' }} my={{ base: 2, lg: 0 }}>
              KEBIJAKAN PRIVASI
            </Text>
          </Flex>
          <Button
            textTransform="uppercase"
            variant="outline"
            borderColor="black"
            bgColor="black"
            color="white"
            borderRadius="0"
            w={{ base: '100%', lg: '35%' }}
            fontWeight="bold"
            my={{ base: 5, lg: 0 }}
            size={{ base: 'lg', lg: 'md' }}
          >
            Pembatalan
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Unsubscribe;
