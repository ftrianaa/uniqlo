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
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  ListItem,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Select,
  Text,
  Textarea,
  UnorderedList,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ColorPicker } from '../../Components/ColorPicker/ColorPicker';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import { SizePicker } from '../../Components/ProductGallery/SizePicker';
import { Rating } from '../Search/Rating';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { ProgressBar } from '../../Components/ProgressBar/Progressbar';
import { StarReview } from '../../Components/StarReview/StarReview';

const ReviewNew = () => {
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
            my="5"
          >
            <BreadcrumbItem>
              <BreadcrumbLink onClick={() => navigate('/')}>
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink onClick={() => navigate('/products/baju')}>
                Product
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Review</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Box py="5">
            <Text
              fontWeight="bold"
              textDecor="underline"
              cursor="pointer"
              textTransform="uppercase"
              onClick={() => navigate('/products/baju')}
            >
              kembali ke detail produk
            </Text>
            <Heading fontSize="32px" fontWeight="bold">
              T-Shirt Kerah Bulat Lengan Pendek Uniqlo U
            </Heading>

            <Flex justify="space-between" my="5">
              <Box w="68%">
                <Box border="1px solid rgb(224, 224, 224)" p="5">
                  <Box>
                    <Flex justify="space-between" align="center">
                      <Text
                        fontWeight="bold"
                        textTransform="uppercase"
                        fontSize="28px"
                      >
                        menulis ulasan
                      </Text>
                      <Text fontSize="14px" color="#378694">
                        Wajib diisi*
                      </Text>
                    </Flex>

                    <Flex align="center" my="4">
                      <Flex w="30%">
                        <Text
                          fontWeight="bold"
                          textTransform="uppercase"
                          fontSize="16px"
                        >
                          rating
                        </Text>
                        <Text color="#378694" fontWeight="bold">
                          *
                        </Text>
                      </Flex>
                      <StarReview />
                    </Flex>

                    <Flex align="center" my="4">
                      <Flex w="30%">
                        <Text
                          fontWeight="bold"
                          textTransform="uppercase"
                          fontSize="16px"
                        >
                          fit
                        </Text>
                        <Text color="#378694" fontWeight="bold">
                          *
                        </Text>
                      </Flex>
                      <ProgressBar />
                    </Flex>
                    <Flex align="center" my="4">
                      <Flex w="30%">
                        <Text
                          fontWeight="bold"
                          textTransform="uppercase"
                          fontSize="16px"
                        >
                          judul
                        </Text>
                        <Text color="#378694" fontWeight="bold">
                          *
                        </Text>
                      </Flex>
                      <Box w="70%">
                        <Input type="text" variant="flushed" />
                        <Text fontSize="14px" color="#7d7d7d">
                          Judul harus kurang dari 100 karakter.
                        </Text>
                      </Box>
                    </Flex>
                    <Flex my="4">
                      <Flex w="30%">
                        <Text
                          fontWeight="bold"
                          textTransform="uppercase"
                          fontSize="16px"
                        >
                          komentar
                        </Text>
                        <Text color="#378694" fontWeight="bold">
                          *
                        </Text>
                      </Flex>
                      <Box w="70%">
                        <Textarea borderRadius="0" />
                        <Text fontSize="14px" color="#7d7d7d">
                          Anda harus menulis minimal 50 karakter di kolom ini.
                        </Text>
                      </Box>
                    </Flex>
                    <FormControl w="100%">
                      <Flex>
                        <Text
                          fontWeight="bold"
                          textTransform="uppercase"
                          fontSize="16px"
                        >
                          ukuran yang di beli
                        </Text>
                        <Text color="#378694" fontWeight="bold">
                          *
                        </Text>
                      </Flex>
                      <Select placeholder="pilih" borderRadius="0">
                        <option>s</option>
                        <option>m</option>
                        <option>l</option>
                      </Select>
                    </FormControl>
                    <Flex align="center" my="4">
                      <Flex w="30%">
                        <Text
                          fontWeight="bold"
                          textTransform="uppercase"
                          fontSize="16px"
                        >
                          nama panggilan
                        </Text>
                        <Text color="#378694" fontWeight="bold">
                          *
                        </Text>
                      </Flex>
                      <Flex w="70%" align="center">
                        <Input type="text" variant="flushed" />

                        <Popover isLazy trigger={'hover'}>
                          <PopoverTrigger>
                            <Text>
                              <AiOutlineInfoCircle />
                            </Text>
                          </PopoverTrigger>
                          <PopoverContent>
                            <PopoverArrow />
                            <PopoverHeader fontSize="14px" fontWeight="bold">
                              Nama Panggilan
                            </PopoverHeader>
                            <PopoverBody>
                              <Text fontSize="14px">
                                Anda dapat membuat nama panggilan untuk
                                mengidentifikasi komentar Anda. Nama panggilan
                                Anda ditampilkan dengan komentar Anda. Nama
                                panggilan harus terdiri dari 20 karakter untuk
                                bagian ini.
                              </Text>
                            </PopoverBody>
                          </PopoverContent>
                        </Popover>
                      </Flex>
                    </Flex>
                  </Box>
                  <Box>
                    <Text
                      textTransform="uppercase"
                      fontSize="18px"
                      fontWeight="bold"
                    >
                      info pengguna
                    </Text>
                    <Flex justify="space-between" my="5">
                      <FormControl w="45%">
                        <Flex>
                          <Text
                            fontWeight="bold"
                            textTransform="uppercase"
                            fontSize="16px"
                          >
                            jenis kelamin
                          </Text>
                          <Text color="#378694" fontWeight="bold">
                            *
                          </Text>
                        </Flex>
                        <Select placeholder="pilih" borderRadius="0">
                          <option>s</option>
                          <option>m</option>
                          <option>l</option>
                        </Select>
                      </FormControl>
                      <FormControl w="45%">
                        <Flex>
                          <Text
                            fontWeight="bold"
                            textTransform="uppercase"
                            fontSize="16px"
                          >
                            lokasi
                          </Text>
                          <Text color="#378694" fontWeight="bold">
                            *
                          </Text>
                        </Flex>
                        <Select placeholder="pilih" borderRadius="0">
                          <option>s</option>
                          <option>m</option>
                          <option>l</option>
                        </Select>
                      </FormControl>
                    </Flex>
                    <Flex justify="space-between" my="5">
                      <FormControl w="45%">
                        <Flex>
                          <Text
                            fontWeight="bold"
                            textTransform="uppercase"
                            fontSize="16px"
                          >
                            usia
                          </Text>
                        </Flex>
                        <Select placeholder="pilih" borderRadius="0">
                          <option>s</option>
                          <option>m</option>
                          <option>l</option>
                        </Select>
                      </FormControl>
                      <FormControl w="45%">
                        <Flex>
                          <Text
                            fontWeight="bold"
                            textTransform="uppercase"
                            fontSize="16px"
                          >
                            tinggi
                          </Text>
                        </Flex>
                        <Select placeholder="pilih" borderRadius="0">
                          <option>s</option>
                          <option>m</option>
                          <option>l</option>
                        </Select>
                      </FormControl>
                    </Flex>
                    <Flex justify="space-between" my="5">
                      <FormControl w="45%">
                        <Flex>
                          <Text
                            fontWeight="bold"
                            textTransform="uppercase"
                            fontSize="16px"
                          >
                            bobot
                          </Text>
                        </Flex>
                        <Select placeholder="pilih" borderRadius="0">
                          <option>s</option>
                          <option>m</option>
                          <option>l</option>
                        </Select>
                      </FormControl>
                      <FormControl w="45%">
                        <Flex>
                          <Text
                            fontWeight="bold"
                            textTransform="uppercase"
                            fontSize="16px"
                          >
                            ukuran sepatu
                          </Text>
                        </Flex>
                        <Select placeholder="pilih" borderRadius="0">
                          <option>s</option>
                          <option>m</option>
                          <option>l</option>
                        </Select>
                      </FormControl>
                    </Flex>
                  </Box>
                  <Divider />
                  <Text
                    textTransform="uppercase"
                    fontSize="18px"
                    fontWeight="bold"
                    my="2"
                  >
                    memberikan ulasan
                  </Text>
                  <UnorderedList fontSize="14px" color="#7d7d7d">
                    <ListItem>
                      Komentar yang Anda berikan dapat digunakan untuk keperluan
                      iklan.
                    </ListItem>
                    <ListItem>
                      Kami tidak menerima permintaan untuk memasang iklan
                      termasuk merek lain, individu, maupun organisasi. Kami
                      juga tidak dapat menyimpan stok maupun ukuran.
                    </ListItem>
                  </UnorderedList>
                  <Checkbox my="5">
                    Saya setuju dengan PERSYARATAN PENGGUNAAN UNIQLO
                  </Checkbox>
                  <Text
                    textTransform="uppercase"
                    fontWeight="bold"
                    textDecor="underline"
                  >
                    KETENTUAN PENGGUNAAN
                  </Text>
                  <Flex>
                    <Button
                      textTransform="uppercase"
                      fontWeight="bold"
                      borderRadius="0"
                      bgColor="black"
                      color="white"
                      w="40%"
                      my="5"
                    >
                      kirim
                    </Button>
                    <Button
                      textTransform="uppercase"
                      fontWeight="bold"
                      borderRadius="0"
                      bgColor="white"
                      color="black"
                      border="1px black solid"
                      w="40%"
                      my="5"
                      mx="5"
                    >
                      kembali ke detail produk
                    </Button>
                  </Flex>
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

export default ReviewNew;
