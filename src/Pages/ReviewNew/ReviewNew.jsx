import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Checkbox,
  Divider,
  Flex,
  FormControl,
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
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { ProgressBar } from '../../Components/ProgressBar/Progressbar';
import { StarReview } from '../../Components/StarReview/StarReview';

const ReviewNew = () => {
  const navigate = useNavigate();
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <>
      {!isDesktop ? (
        <Box bgColor={'#f4f4f4'}>
          <Text
            fontSize="22px"
            textTransform="uppercase"
            fontWeight="bold"
            textAlign="left"
            p={5}
            px={{ base: 5, md: 10 }}
          >
            menulis ulasan
          </Text>
        </Box>
      ) : (
        <></>
      )}
      <Box bgColor="white" px={{ base: 5, md: 10, xl: 20 }}>
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
                  <BreadcrumbLink onClick={() => navigate('/products/baju')}>
                    Product
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Review</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
              <Text
                fontWeight="bold"
                textDecor="underline"
                cursor="pointer"
                textTransform="uppercase"
                onClick={() => navigate('/products/baju')}
                pt="5"
              >
                kembali ke detail produk
              </Text>
            </>
          ) : (
            <></>
          )}
          <Box py="5">
            <Flex
              flexDir={{ base: 'row-reverse', lg: 'row' }}
              borderBottom={{
                base: '1px solid rgb(224, 224, 224)',
                lg: 'none',
              }}
              py={{ base: '5', lg: '0' }}
            >
              <Text
                fontSize={{ base: '15px', lg: '32px' }}
                fontWeight="bold"
                my={{ base: '0', lg: '5' }}
              >
                T-Shirt Kerah Bulat Lengan Pendek Uniqlo U
              </Text>
              {!isDesktop ? (
                <>
                  <Image
                    w="100px"
                    objectFit="contain"
                    src="https://image.uniqlo.com/UQ/ST3/id/imagesgoods/455360/item/idgoods_30_455360.jpg"
                    mr="5"
                  />
                </>
              ) : (
                <></>
              )}
            </Flex>
            <Flex justify="space-between" my="5">
              <Box w={{ base: '100%', lg: '68%' }}>
                <Box
                  border={{ base: 'none', lg: '1px solid rgb(224, 224, 224)' }}
                  p={{ base: '0', lg: '5' }}
                >
                  <Box>
                    <Flex
                      justify={{ base: 'right', lg: 'space-between' }}
                      align="center"
                      w="100%"
                    >
                      {isDesktop ? (
                        <Text
                          fontWeight="bold"
                          textTransform="uppercase"
                          fontSize="28px"
                        >
                          menulis ulasan
                        </Text>
                      ) : (
                        <></>
                      )}
                      <Text
                        fontSize={{ base: '13px', lg: '14px' }}
                        color="#378694"
                      >
                        Wajib diisi*
                      </Text>
                    </Flex>

                    <Flex
                      align="center"
                      my="4"
                      flexDir={{ base: 'column', lg: 'row' }}
                    >
                      <Flex
                        w={{ base: '100%', lg: '30%' }}
                        fontSize={{ base: '15px', lg: '16px' }}
                      >
                        <Text fontWeight="bold" textTransform="uppercase">
                          rating
                        </Text>
                        <Text color="#378694" fontWeight="bold">
                          *
                        </Text>
                      </Flex>
                      <Flex justify="left" w={{ base: '100%', lg: '70%' }}>
                        <StarReview />
                      </Flex>
                    </Flex>

                    <Flex
                      align="center"
                      my="4"
                      flexDir={{ base: 'column', lg: 'row' }}
                    >
                      <Flex
                        w={{ base: '100%', lg: '30%' }}
                        fontSize={{ base: '15px', lg: '16px' }}
                      >
                        <Text fontWeight="bold" textTransform="uppercase">
                          fit
                        </Text>
                        <Text color="#378694" fontWeight="bold">
                          *
                        </Text>
                      </Flex>
                      <Flex
                        justify="center"
                        align="center"
                        w={{ base: '100%', lg: '70%' }}
                      >
                        <ProgressBar />
                      </Flex>
                    </Flex>
                    <Flex
                      align="center"
                      my="4"
                      flexDir={{ base: 'column', lg: 'row' }}
                    >
                      <Flex
                        w={{ base: '100%', lg: '30%' }}
                        fontSize={{ base: '15px', lg: '16px' }}
                      >
                        <Text fontWeight="bold" textTransform="uppercase">
                          judul
                        </Text>
                        <Text color="#378694" fontWeight="bold">
                          *
                        </Text>
                      </Flex>
                      <Box w={{ base: '100%', lg: '30%' }}>
                        <Input type="text" variant="flushed" />
                        <Text
                          fontSize={{ base: '13px', lg: '14px' }}
                          color="#7d7d7d"
                        >
                          Judul harus kurang dari 100 karakter.
                        </Text>
                      </Box>
                    </Flex>
                    <Flex my="4" flexDir={{ base: 'column', lg: 'row' }}>
                      <Flex
                        w={{ base: '100%', lg: '30%' }}
                        fontSize={{ base: '15px', lg: '16px' }}
                      >
                        <Text fontWeight="bold" textTransform="uppercase">
                          komentar
                        </Text>
                        <Text color="#378694" fontWeight="bold">
                          *
                        </Text>
                      </Flex>
                      <Box w={{ base: '100%', lg: '70%' }}>
                        <Textarea borderRadius="0" />
                        <Text
                          fontSize={{ base: '13px', lg: '14px' }}
                          color="#7d7d7d"
                        >
                          Anda harus menulis minimal 50 karakter di kolom ini.
                        </Text>
                      </Box>
                    </Flex>
                    <FormControl w="100%">
                      <Flex fontSize={{ base: '15px', lg: '16px' }}>
                        <Text fontWeight="bold" textTransform="uppercase">
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
                    <Flex
                      align="center"
                      my="4"
                      flexDir={{ base: 'column', lg: 'row' }}
                    >
                      <Flex
                        w={{ base: '100%', lg: '30%' }}
                        fontSize={{ base: '15px', lg: '16px' }}
                      >
                        <Text fontWeight="bold" textTransform="uppercase">
                          nama panggilan
                        </Text>
                        <Text color="#378694" fontWeight="bold">
                          *
                        </Text>
                      </Flex>
                      <Flex w={{ base: '100%', lg: '70%' }} align="center">
                        <Input type="text" variant="flushed" />
                        <Popover isLazy trigger={'hover'}>
                          <PopoverTrigger>
                            <Text>
                              <AiOutlineInfoCircle />
                            </Text>
                          </PopoverTrigger>
                          <PopoverContent>
                            <PopoverArrow />
                            <PopoverHeader
                              fontSize={{ base: '13px', lg: '14px' }}
                              fontWeight="bold"
                            >
                              Nama Panggilan
                            </PopoverHeader>
                            <PopoverBody>
                              <Text fontSize={{ base: '13px', lg: '14px' }}>
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
                      fontSize={{ base: '15px', lg: '18px' }}
                      fontWeight="bold"
                    >
                      info pengguna
                    </Text>
                    <Flex justify="space-between" my="5">
                      <FormControl w="45%">
                        <Flex fontSize={{ base: '15px', lg: '16px' }}>
                          <Text fontWeight="bold" textTransform="uppercase">
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
                        <Flex fontSize={{ base: '15px', lg: '16px' }}>
                          <Text fontWeight="bold" textTransform="uppercase">
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
                        <Flex fontSize={{ base: '15px', lg: '16px' }}>
                          <Text fontWeight="bold" textTransform="uppercase">
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
                        <Flex fontSize={{ base: '15px', lg: '16px' }}>
                          <Text fontWeight="bold" textTransform="uppercase">
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
                        <Flex fontSize={{ base: '15px', lg: '16px' }}>
                          <Text fontWeight="bold" textTransform="uppercase">
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
                        <Flex fontSize={{ base: '15px', lg: '16px' }}>
                          <Text fontWeight="bold" textTransform="uppercase">
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
                    fontSize={{ base: '15px', lg: '18px' }}
                    fontWeight="bold"
                    my="2"
                  >
                    memberikan ulasan
                  </Text>
                  <UnorderedList
                    fontSize={{ base: '13px', lg: '14px' }}
                    color="#7d7d7d"
                  >
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
                    fontSize={{ base: '15px', lg: '16px' }}
                  >
                    KETENTUAN PENGGUNAAN
                  </Text>
                  <Flex flexDir={{ base: 'column', lg: 'row' }}>
                    <Button
                      textTransform="uppercase"
                      fontWeight="bold"
                      borderRadius="0"
                      bgColor="black"
                      color="white"
                      w={{ base: '100%', lg: '40%' }}
                      my="5"
                      size={{ base: 'lg', lg: 'md' }}
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
                      w={{ base: '100%', lg: '40%' }}
                      my={{ base: '0', lg: '5' }}
                      mx={{ base: '0', lg: '5' }}
                      size={{ base: 'lg', lg: 'md' }}
                      onClick={() => navigate('/products/baju')}
                    >
                      kembali ke detail produk
                    </Button>
                  </Flex>
                </Box>
              </Box>
              {isDesktop ? (
                <Flex w="30%">
                  <Box>
                    <Image
                      objectFit="contain"
                      src="https://image.uniqlo.com/UQ/ST3/id/imagesgoods/455360/item/idgoods_30_455360.jpg"
                    />
                  </Box>
                </Flex>
              ) : (
                <></>
              )}
            </Flex>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ReviewNew;
