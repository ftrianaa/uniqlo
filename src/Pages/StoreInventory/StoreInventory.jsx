import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Container,
  Flex,
  FormControl,
  Heading,
  Image,
  Input,
  ListItem,
  Text,
  UnorderedList,
  useColorModeValue as mode,
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ColorPicker } from '../../Components/ColorPicker/ColorPicker';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import { SizePicker } from '../../Components/ProductGallery/SizePicker';
import { AiOutlineLeft } from 'react-icons/ai';

const StoreInventory = () => {
  const navigate = useNavigate();
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <>
      <Header />
      {!isDesktop ? (
        <>
          <Flex
            px={{ base: 5, md: 10 }}
            py="5"
            bgColor="white"
            justify="space-between"
            align="center"
            boxShadow="0 2px 2px rgba(0,0,0,0.16)"
          >
            <AiOutlineLeft />
            <Text fontSize="16px" fontWeight="bold">
              T-Shirt Kerah Bulat Lengan Pendek Uniqlo U
            </Text>
          </Flex>
          <Box bgColor={'#f4f4f4'}>
            <Text
              fontSize="22px"
              textTransform="uppercase"
              fontWeight="bold"
              textAlign="left"
              p={5}
              px={{ base: 5, md: 10 }}
            >
              cari stok di toko
            </Text>
          </Box>
        </>
      ) : (
        <></>
      )}
      <Container bgColor="white" px={{ base: 5, md: 10, lg: 20 }}>
        <Box>
          {isDesktop ? (
            <>
              <Breadcrumb
                fontSize="sm"
                fontWeight="medium"
                color={mode('gray.600', 'gray.400')}
                separator={'/'}
                my="5"
              >
                <BreadcrumbItem>
                  <BreadcrumbLink onClick={() => navigate('/')}>
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Product</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
              <Heading
                textTransform="uppercase"
                fontSize="32px"
                fontWeight="bold"
                pt={5}
              >
                T-Shirt Kerah Bulat Lengan Pendek Uniqlo U
              </Heading>
            </>
          ) : (
            <></>
          )}

          <Box py="5">
            <Flex justify="space-between">
              <Box w={{ base: '100%', lg: '68%' }}>
                <Box
                  border={{ base: 'none', lg: '1px solid #7d7d7d' }}
                  p={{ base: 0, lg: '5' }}
                >
                  <Text
                    fontWeight="bold"
                    textTransform="uppercase"
                    fontSize="20px"
                    display={{ base: 'none', lg: 'block' }}
                  >
                    cari stok di toko
                  </Text>
                  <Text
                    fontSize="14px"
                    my={{ base: 0, lg: '5' }}
                    mb={{ base: 5, lg: 0 }}
                  >
                    Mohon pilih warna dan ukuran.
                  </Text>

                  <Flex>
                    <Text
                      w="30%"
                      fontWeight="bold"
                      textTransform="uppercase"
                      fontSize="16px"
                    >
                      warna:
                    </Text>
                    <Box w="70%">
                      <ColorPicker
                        options={[
                          { label: 'black', value: '#000' },
                          { label: 'dark grey', value: '#666' },
                        ]}
                      />
                    </Box>
                  </Flex>
                  <Flex my="5">
                    <Text
                      w="30%"
                      fontWeight="bold"
                      textTransform="uppercase"
                      fontSize="16px"
                    >
                      ukuran:
                    </Text>
                    <Box w="70%">
                      <SizePicker
                        defaultValue="32"
                        options={[
                          {
                            label: '32mm',
                            value: '32',
                          },
                          {
                            label: '36mm',
                            value: '36',
                          },
                          {
                            label: '40mm',
                            value: '40',
                          },
                        ]}
                      />
                    </Box>
                  </Flex>
                  <Box display={{ base: 'block', lg: 'none' }}>
                    <Text fontSize="15px">
                      Masukkan kata kunci atau provinsi
                    </Text>
                  </Box>
                  <Box my="5" display={{ base: 'block', lg: 'flex' }}>
                    <Text
                      w={{ base: '100%', lg: '30%' }}
                      fontWeight="bold"
                      textTransform="uppercase"
                      fontSize="16px"
                    >
                      kata kunci
                    </Text>
                    <FormControl w={{ base: '100%', lg: '70%' }}>
                      <Input type="text" variant="flushed" />
                    </FormControl>
                  </Box>
                  <Button
                    textTransform="uppercase"
                    fontWeight="bold"
                    borderRadius="0"
                    bgColor="black"
                    color="white"
                    w={{ base: '100%', lg: '40%' }}
                    size={{ base: 'lg', lg: 'md' }}
                    my="5"
                  >
                    cari
                  </Button>
                  <UnorderedList fontSize="14px">
                    <ListItem>
                      Anda dapat menggunakan fungsi ini dengan memuat ulang
                      halaman setelah mengaktifkan layanan lokasi
                    </ListItem>
                    <ListItem>
                      Jika layanan lokasi tidak tersedia, mohon cari toko dengan
                      memasukkan kata kunci atau kode pos.
                    </ListItem>
                    <ListItem>
                      Anda tidak dapat memesan dari toko kami. Ini hanya untuk
                      memeriksa ketersediaan toko.
                    </ListItem>
                  </UnorderedList>
                  {!isDesktop ? (
                    <Box>
                      <Text
                        fontWeight="bold"
                        textTransform="uppercase"
                        fontSize="20px"
                        my="5"
                      >
                        harap aktifkan layanan lokasi di ponsel anda
                      </Text>
                      <Text fontWeight="bold" textTransform="uppercase">
                        pengaturan ios
                      </Text>
                      <Text color="#7d7d7d">
                        Buka Pengaturan&gt; Privasi&gt; Layanan Lokasi&gt;
                        nyalakan layanan lokasi.
                      </Text>
                      <UnorderedList fontSize="13px" p="5" color="#7d7d7d">
                        <ListItem>
                          Aktifkan layanan lokasi aplikasi browser
                        </ListItem>
                        <ListItem>
                          Tidak bisa mendapatkan lokasi Anda jika Anda
                          menggunakan iOS 10 atau versi browser Safari yang
                          lebih baru. Silakan akses dari aplikasi UNIQLO.
                        </ListItem>
                      </UnorderedList>
                      <Text fontWeight="bold" textTransform="uppercase">
                        pengaturan android
                      </Text>
                      <Text color="#7d7d7d">
                        Buka Pengaturan&gt; Privasi&gt; Layanan Lokasi&gt;
                        nyalakan layanan lokasi.
                      </Text>
                      <UnorderedList fontSize="13px" p="5" color="#7d7d7d">
                        <ListItem>Tetapkan mode ke "Akurasi Tinggi".</ListItem>
                        <ListItem>
                          Beberapa perangkat mungkin tidak kompatibel.
                        </ListItem>
                      </UnorderedList>
                      <Button
                        textTransform="uppercase"
                        fontWeight="bold"
                        borderRadius="0"
                        bgColor="white"
                        color="black"
                        border="1px solid black"
                        w={{ base: '100%', lg: '40%' }}
                        size={{ base: 'lg', lg: 'md' }}
                        my="5"
                        onClick={() => navigate('/products/baju')}
                      >
                        kembali ke detail produk
                      </Button>
                    </Box>
                  ) : (
                    <></>
                  )}
                </Box>
              </Box>
              <Flex
                w={{ base: '100%', lg: '30%' }}
                display={{ base: 'none', lg: 'flex' }}
              >
                <Box>
                  <Image
                    objectFit="contain"
                    src="https://image.uniqlo.com/UQ/ST3/id/imagesgoods/455360/item/idgoods_30_455360.jpg"
                  />
                </Box>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default StoreInventory;
