import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Checkbox,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import { pesanan } from './data';

const ItemProduct = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState('profil');
  return (
    <>
      <Header />
      <Container>
        <Breadcrumb
          fontSize="sm"
          fontWeight="medium"
          color={mode('gray.600', 'gray.400')}
          separator={'/'}
          my="5"
        >
          <BreadcrumbItem>
            <BreadcrumbLink onClick={() => navigate('/')}>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Member</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Heading textTransform="uppercase" fonstSize="36px">
          keanggotaan
        </Heading>
        <Flex templateColumns="repeat(2,1fr)">
          <Box w="25%">
            <Text fontWeight="bold" fontSize="16px">
              Keanggotaan
            </Text>
            <Box ml={5} cursor="pointer">
              <Text onClick={() => setPage('profil')}>Profil</Text>
              <Text onClick={() => setPage('points')}>Points</Text>

              <Text onClick={() => setPage('kupon')}>Kupon</Text>
              <Text onClick={() => setPage('riwayat pembelian')}>
                Riwayat pembelian
              </Text>
              <Text onClick={() => setPage('riwayat pesanan')}>
                Riwayat pesanan
              </Text>
            </Box>
            <Text fontWeight="bold" fontSize="16px">
              Keanggotaan
            </Text>
            <Box ml={5} cursor="pointer">
              <Text onClick={() => setPage('sunting profil')}>
                Sunting profil
              </Text>
              <Text onClick={() => setPage('alamat keanggotaan')}>
                Buku alamat
              </Text>
              <Text onClick={() => setPage('ubah kata sandi saya')}>
                Ubah kata sandi saya
              </Text>
              <Text onClick={() => setPage('kartu kredit saya')}>
                Kartu kredit saya
              </Text>
              <Text onClick={() => setPage('pembatalan dari keanggotaan')}>
                Pembatalan keanggotaan
              </Text>
            </Box>
          </Box>
          <Box border="1px solid rgb(224, 224, 224)" w="100%" p={5}>
            <Heading textTransform="uppercase" fonstSize="32PX">
              {page}
            </Heading>
            {page === 'profil' ? (
              <>
                <Flex m="5">
                  <Box>
                    <Text
                      fontWeight="bold"
                      fontSize="20px"
                      textTransform="uppercase"
                    >
                      alamat email
                    </Text>
                    <Text fontSize="16px">jieunssiu@gmail.com</Text>
                    <Text
                      fontWeight="bold"
                      fontSize="20px"
                      textTransform="uppercase"
                    >
                      Nama
                    </Text>
                    <Text fontSize="16px">jieunssiu</Text>
                    <Text
                      fontWeight="bold"
                      fontSize="20px"
                      textTransform="uppercase"
                    >
                      alamat
                    </Text>
                    <Text fontSize="16px">
                      wdqdqdqwdqwdqwdq, Langensari, West Java, Kota Banjar
                    </Text>
                  </Box>
                  <Box ml="10">
                    <Text
                      fontWeight="bold"
                      fontSize="20px"
                      textTransform="uppercase"
                    >
                      nomor ponsel
                    </Text>
                    <Text fontSize="16px">21312312</Text>
                    <Text
                      fontWeight="bold"
                      fontSize="20px"
                      textTransform="uppercase"
                    >
                      tidak dipilih
                    </Text>
                  </Box>
                </Flex>
                <Divider />
                <Box m="5">
                  <Text
                    fontWeight="bold"
                    fontSize="20px"
                    textTransform="uppercase"
                  >
                    barcode keanggotaan
                  </Text>
                  <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL4AAABGCAMAAABFa97bAAAAHnRFWHRTb2Z0d2FyZQBid2lwLWpzLm1ldGFmbG9vci5jb21Tnbi0AAAB71BMVEX///8AAAD+/v79/f1UVFQvLy8nJyfNzc14eHhBQUEPDw84ODjh4eFHR0cEBAQYGBhfX1+xsbEQEBCSkpLj4+N+fn6qqqo1NTXi4uKGhob6+vrp6enMzMz4+Pi5ubmmpqZ8fHzIyMgHBwclJSXt7e3k5OQXFxfZ2dmQkJAuLi5eXl75+fktLS3u7u4MDAyBgYEiIiLT09O7u7sNDQ0SEhJtbW0JCQnCwsIICAgyMjICAgK0tLRgYGCRkZH8/PyDg4N5eXkoKCiioqIREREaGhrs7Ox6enoFBQXX19dMTExXV1fl5eXz8/PBwcF2dnYgICBhYWFPT082NjYdHR0+Pj7q6uo5OTmysrJxcXG/v7/Ly8uurq7a2tpiYmKdnZ2MjIykpKRZWVlmZmbHx8fv7+9/f38wMDBnZ2fw8PCAgIDx8fGCgoImJiYpKSmsrKzQ0NA6Ojre3t4sLCzo6Og9PT3Dw8MBAQHm5ua9vb1FRUXR0dFsbGxJSUkUFBSoqKgWFhZISEjKyspRUVFKSkq6urpSUlLJycm3t7f7+/tcXFyZmZkkJCQeHh739/fV1dU/Pz9OTk5aWlqzs7MVFRWgoKC+vr5paWmenp7c3NxYWFjg4OAODg6cnJxycnKTk5NGRkbr6+tNTU1ubm64uLiXl5fAbZ5AAAADU0lEQVR4nO2WB1MTQRSA911iMIVETyFUlaCIBoMYSoxUQUGICoSioGKNlWIh1ggWEBERRVEsWH+oub1LsldCkhnjjM67mbv93s7b974kuzchAIQIt/CMjJGZWBSJY5nx1rFzyputyEaxWCtia7Nd6Y36qI/6qI/6qI/6qI/6qI/6qI/6qI/6qI/6qI/6qI/6qI/6qI/6qI/6qI/6qI/6qI/6adT/89dfqI36iVqkszbqJ2qRztqon6hFOmujfqIW6az9j+v/ZxenN9DLnC/G20oz2PmmgzQ6QnlIWpOX7Yuuj+QrmYw+0ub4DlKvlC7dGvGvERTQsKgEdojzZeJ0K41aKJ+U1jTApsjyaL6CyT33Yw2eyX3hCbxVsryXpd02sTCf2oewmwqFcbODB0NsusYDdRTcXUzyFX64XkI2X7b2tt/VpsFVMLcQglkVM70+8mD8GnSk5J8FucKwCYq3M/oFbu9+ChzUMslXYUQiNl+2VmeEh0SDef4lscCYipleevhMyCAcSsF+PZjzhDFny1YS06+o9OwTyQd8T+1xafoSH9BJyObL1g7B/Whxloet8+QNTKmY6bXYzIWfocXk7S08nxMNYvpm8NRaKDmP0q3P0eAy9JPR6xr5Mb7pgOqJJxUqJuMlnqlg0wcVM71sn2bCz0pb8vqZkK1WIGRP1V5olnYt19tvgNMCnTd1c8QTWFU/C4DnwdGmZEJmAbzviJpjvZZhKf/bCmQmbZ8BZiZidUgdswcH4IwwXBBeO0ySln4flHNcrrgxWPY9h8wRe7BRp2C2V84EfQv9Slp/LWyIp1/P81H2gV0YAnDNYIDWGzWr6Fe6w6+merdfyZ1QGj7KSzCkYFmv3i89xeAvTFrfCBvj6rtLojwIZ4XhoviOtg6uou+iO9dmUjJPj2U+/bVZVvTi2uFn0vbEYNUxUURhlzP85TRAe6RkP289p/UZtfRvwR1CnoJRyQGYDj/fw7KCFb1W4Efy9sQkO+WSgtPlMOuLoaVDCDo6u8On75TaM47+eND6YNLrnVbyM2/w1WszVFfIWdaLkGz47kxB37yOjew7xbF8t7u6rPEA5cMuf9+xE0zSWKcqX8ZFd0OhyQI1D+jnYLFrXslsr/Cp6Iq78X8DCp6mFXIvA58AAAAASUVORK5CYII=" />
                  <Text>
                    Silakan tunjukkan barcode keanggotaan Anda di kasir saat
                    Anda membeli barang.
                  </Text>
                  <Button textTransform="uppercase">cetak barcode</Button>
                </Box>
              </>
            ) : (
              <></>
            )}
            {page === 'kupon' ? (
              <>
                <Text>Kupon Toko Online | 0 Kupon yang Tersedia</Text>
                <Text color="#7d7d7d">
                  Kupon toko online hanya dapat ditebus selama pembayaran.
                </Text>
                <Text>Tidak ada kupon.</Text>
                <Divider />
                <Text>Kupon Toko Retail | 0 Kupon yang Tersedia</Text>
                <Text color="#7d7d7d">
                  Kupon toko retail hanya dapat ditukar di dalam toko.
                </Text>
                <Text>Tidak ada kupon.</Text>
              </>
            ) : (
              <></>
            )}
            {page === 'riwayat pembelian' ? (
              <>
                <UnorderedList>
                  <ListItem>
                    Anda dapat melihat riwayat pembelian Anda di toko retail dan
                    toko online.
                  </ListItem>
                  <ListItem>
                    Riwayat pembelian toko retail Anda akan terlihat pada hari
                    berikutnya, jika Anda memindai barcode keanggotaan Anda
                    dengan pembelian Anda.
                  </ListItem>
                  <ListItem>
                    Riwayat pembelian tidak menunjukkan barang yang dikembalikan
                    atau ditukar.
                  </ListItem>
                  <ListItem>
                    Riwayat pembelian bukanlah bukti pembelian yang sah.
                  </ListItem>
                  <ListItem>
                    Harap bawa tanda terima jika Anda ingin mengembalikan atau
                    menukar barang di toko.
                  </ListItem>
                </UnorderedList>
                <Divider />
                <Text
                  fontWeight="bold"
                  fontSize="16px"
                  textTransform="uppercase"
                >
                  item
                </Text>
                <Text
                  fontWeight="bold"
                  fontSize="20px"
                  textTransform="uppercase"
                >
                  KAMI TIDAK MEMILIKI PESANAN UNTUK AKUN INI.
                </Text>
                <Text fontSize="16px">
                  Jika Anda menunjukkan barcode keanggotaan Anda di toko, produk
                  pembelian Anda akan ditambahkan ke riwayat akun Anda.
                </Text>
              </>
            ) : (
              <></>
            )}
            {page === 'riwayat pesanan' ? (
              <>
                {pesanan.map((item, index) => (
                  <Box key={index}>
                    <Text
                      fontWeight="bold"
                      fontSize="20px"
                      textTransform="uppercase"
                    >
                      {item.length} Produk dari {item.length}
                    </Text>
                    <Flex justify="space-between" align="center">
                      <Text
                        fontWeight="bold"
                        fontSize="20px"
                        textTransform="uppercase"
                      >
                        Tanggal pemesanan {item.date} WIB
                      </Text>
                      <Button textTransform="uppercase">detail</Button>
                    </Flex>
                    <Text>Nomor pesanan: {item.orderId}</Text>
                    <Text>Kelas pesanan: {item.orderClass}</Text>
                    <Text>Status pesanan: {item.status}</Text>
                    <Text>
                      (Temukan detail pengiriman dalam email pemberitahuan
                      setelah peletakan order)
                    </Text>
                  </Box>
                ))}
              </>
            ) : (
              <></>
            )}
            {page === 'kartu kredit saya' ? (
              <>
                <Text>Dapat menyimpan hingga 5 kartu kredit.</Text>
                <Text>Tidak ada kartu kredit yang terdaftar.</Text>
              </>
            ) : (
              <></>
            )}
            {page === 'pembatalan dari keanggotaan' ? (
              <>
                <Text>
                  Jika Anda menarik diri dari keanggotaan kami, Anda akan
                  kehilangan akses ke layanan riwayat pembelian dan koneksi
                  keanggotaan ke aplikasi UNIQLO.
                </Text>
                <Text>"Layanan yang koneksinya hilang,"</Text>
                <Text>Aplikasi UNIQLO</Text>
                <Text color="#7d7d7d">
                  Mungkin butuh beberapa saat untuk menghapus koneksi
                  keanggotaan dari aplikasi UNIQLO.{' '}
                </Text>
                <Text>
                  Jika Anda tidak dapat menghapus koneksi keanggotaan Anda
                  dengan aplikasi UNIQLO, hapus cache Anda dan muat ulang
                  halaman.
                </Text>
                <Divider />
                <Text
                  fontWeight="bold"
                  fontSize="20px"
                  textTransform="uppercase"
                >
                  persetujuan pembatalan
                </Text>
                <Text color="#7d7d7d">
                  Jika Anda ingin membatalkan keanggotaan Anda, Anda harus
                  menyetujui Kebijakan Privasi dan Ketentuan Penggunaan UNIQLO.
                </Text>
                <Checkbox>
                  Saya setuju dengan PERSYARATAN PENGGUNAAN dan KEBIJAKAN
                  PRIVASI UNIQLO
                </Checkbox>
                <Flex textDecor="underline" fontWeight="bold">
                  <Text>KETENTUAN PENGGUNAAN </Text>
                  <Text>KEBIJAKAN PRIVASI</Text>
                </Flex>
                <Button textTransform="uppercase">Pembatalan</Button>
              </>
            ) : (
              <></>
            )}
          </Box>
        </Flex>
      </Container>
      <Footer />
    </>
  );
};

export default ItemProduct;
