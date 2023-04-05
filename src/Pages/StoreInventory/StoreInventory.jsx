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
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ColorPicker } from '../../Components/ColorPicker/ColorPicker';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import { SizePicker } from '../../Components/ProductGallery/SizePicker';

const StoreInventory = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Container bgColor="white" px="20">
        <Box>
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
              <BreadcrumbLink href="#">Product</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Box py="5">
            <Heading
              textTransform="uppercase"
              fontSize="32px"
              fontWeight="bold"
            >
              T-Shirt Kerah Bulat Lengan Pendek Uniqlo U
            </Heading>

            <Flex justify="space-between">
              <Box w="68%">
                <Box border="1px solid #7d7d7d" p="5">
                  <Text
                    fontWeight="bold"
                    textTransform="uppercase"
                    fontSize="20px"
                  >
                    cari stok di toko
                  </Text>
                  <Text fontSize="14px" my="5">
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
                  <Flex my="5">
                    <Text
                      w="30%"
                      fontWeight="bold"
                      textTransform="uppercase"
                      fontSize="16px"
                    >
                      kata kunci
                    </Text>
                    <FormControl w="70%">
                      <Input type="text" variant="flushed" />
                    </FormControl>
                  </Flex>
                  <Button
                    textTransform="uppercase"
                    fontWeight="bold"
                    borderRadius="0"
                    bgColor="black"
                    color="white"
                    w="40%"
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
                </Box>
              </Box>
              <Flex w="30%">
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
