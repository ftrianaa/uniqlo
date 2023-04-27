import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  Grid,
  SimpleGrid,
  Flex,
  Divider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  FormControl,
  RadioGroup,
  Radio,
  useBreakpointValue,
  InputGroup,
  Input,
  InputRightElement,
  Spacer,
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ColorPicker } from './ColorPicker';
import { MobileFilter } from '../../Components/CategoryFilter/MobileFilter';
import { ProductBreadcrumb } from '../../Components/CategoryFilter/ProductBreadcrumb';
import { SizePicker } from './SizePicker';
import { SortbySelect } from '../../Components/CategoryFilter/SortBySelect';
import { ProductCard } from './ProductCard';
import { products } from './_data';

import {
  breadcrumbData,
  colorFilter,
  sizeFilter,
} from '../../Components/CategoryFilter/_data';

import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import ProductCarousel from '../../Components/ProductCarousel/ProductCarousel';
import { SearchIcon } from '@chakra-ui/icons';
import { VscSplitHorizontal, VscSettings } from 'react-icons/vsc';

const Search = () => {
  const { category, subCategory } = useParams();
  const navigate = useNavigate();
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <>
      <Header />
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
            cari
          </Text>
        </Box>
      ) : (
        <></>
      )}
      <Container bgColor="white">
        <Box
          maxW="7xl"
          mx="auto"
          px={{
            base: '4',
            md: '8',
            lg: '12',
          }}
        >
          {isDesktop ? (
            <>
              <ProductBreadcrumb data={breadcrumbData} />
              <Box>
                <Heading
                  textTransform="uppercase"
                  fontSize="48px"
                  fontWeight="bold"
                  pt="6"
                >
                  {category}
                </Heading>
              </Box>
            </>
          ) : (
            <></>
          )}

          <Box>
            {isDesktop ? (
              <>
                <Text
                  textTransform="uppercase"
                  fontWeight="bold"
                  fontSize="18px"
                >
                  cari hasil untuk
                </Text>
                <Text fontSize="48px">shirt</Text>
                <Divider mb="5" />
                <Flex justify="space-between" align="center" my="6">
                  <Box>
                    <Text
                      flexShrink={0}
                      fontWeight="bold"
                      textTransform="uppercase"
                      fontSize="sm"
                    >
                      hasil
                    </Text>
                    <Text>407 Produk</Text>
                  </Box>
                  <Box>
                    <Text
                      flexShrink={0}
                      fontWeight="bold"
                      textTransform="uppercase"
                      fontSize="sm"
                    >
                      pilih berdasarkan
                    </Text>
                    <SortbySelect />
                  </Box>
                </Flex>
              </>
            ) : (
              <></>
            )}
            <Grid
              templateColumns={{
                base: '1fr',
                lg: '25% 1fr',
              }}
              gap="1"
            >
              <Stack
                spacing="10"
                display={{
                  base: 'none',
                  lg: 'flex',
                }}
              >
                <Box>
                  <Accordion allowToggle allowMultiple>
                    <AccordionItem borderColor="transparent" p="0">
                      <h2>
                        <AccordionButton>
                          <Box as="span" flex="1" textAlign="left">
                            Jenis kelamin
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <Box>
                          <Text cursor="pointer" fontSize="14px">
                            Semua
                          </Text>
                          <Text
                            my="3"
                            cursor="pointer"
                            fontSize="14px"
                            fontWeight="bold"
                          >
                            Wanita
                          </Text>
                          <Text my="3" cursor="pointer" fontSize="14px">
                            Pria
                          </Text>
                          <Text my="3" cursor="pointer" fontSize="14px">
                            Anak
                          </Text>
                          <Text my="3" cursor="pointer" fontSize="14px">
                            Bayi
                          </Text>
                        </Box>
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem borderColor="transparent">
                      <h2>
                        <AccordionButton>
                          <Box as="span" flex="1" textAlign="left">
                            Kelas
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <Box>
                          <Text cursor="pointer" fontSize="14px">
                            Semua
                          </Text>
                          <Text
                            my="3"
                            cursor="pointer"
                            fontSize="14px"
                            fontWeight="bold"
                            textTransform="uppercase"
                          >
                            atasan
                          </Text>
                          <Text
                            my="3"
                            cursor="pointer"
                            fontSize="14px"
                            textTransform="uppercase"
                          >
                            luaran
                          </Text>
                          <Text
                            my="3"
                            cursor="pointer"
                            fontSize="14px"
                            textTransform="uppercase"
                          >
                            dalaman
                          </Text>
                          <Text
                            my="3"
                            cursor="pointer"
                            fontSize="14px"
                            textTransform="uppercase"
                          >
                            modest wear
                          </Text>
                          <Text
                            my="3"
                            cursor="pointer"
                            fontSize="14px"
                            textTransform="uppercase"
                          >
                            sport utility wear
                          </Text>
                        </Box>
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem borderColor="transparent">
                      <h2>
                        <AccordionButton>
                          <Box as="span" flex="1" textAlign="left">
                            Kategori
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <Box>
                          <Text cursor="pointer" fontSize="14px">
                            Semua
                          </Text>
                          <Text
                            my="3"
                            cursor="pointer"
                            fontSize="14px"
                            fontWeight="bold"
                            textTransform="capitalize"
                          >
                            koleksi atasan
                          </Text>
                          <Text
                            my="3"
                            cursor="pointer"
                            fontSize="14px"
                            textTransform="capitalize"
                          >
                            t-shirt lengan pendek
                          </Text>
                          <Text
                            my="3"
                            cursor="pointer"
                            fontSize="14px"
                            textTransform="capitalize"
                          >
                            t-shirt lengan panjang
                          </Text>
                          <Text
                            my="3"
                            cursor="pointer"
                            fontSize="14px"
                            textTransform="capitalize"
                          >
                            atasan crop
                          </Text>
                          <Text
                            my="3"
                            cursor="pointer"
                            fontSize="14px"
                            textTransform="capitalize"
                          >
                            UT(Graphic T-shirt)
                          </Text>
                          <Text
                            my="3"
                            cursor="pointer"
                            fontSize="14px"
                            textTransform="capitalize"
                          >
                            sweater
                          </Text>
                        </Box>
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem
                      borderTopColor="transparent"
                      borderBottomColor="#DADADB"
                    >
                      <h2>
                        <AccordionButton>
                          <Box as="span" flex="1" textAlign="left">
                            Sub kategori
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <Box>
                          <Text cursor="pointer" fontSize="14px">
                            Semua
                          </Text>
                          <Text
                            my="3"
                            cursor="pointer"
                            fontSize="14px"
                            fontWeight="bold"
                            textTransform="capitalize"
                          >
                            u crew neck
                          </Text>
                          <Text
                            my="3"
                            cursor="pointer"
                            fontSize="14px"
                            textTransform="capitalize"
                          >
                            oversize
                          </Text>
                          <Text
                            my="3"
                            cursor="pointer"
                            fontSize="14px"
                            textTransform="capitalize"
                          >
                            tank top rib
                          </Text>
                          <Text
                            my="3"
                            cursor="pointer"
                            fontSize="14px"
                            textTransform="capitalize"
                          >
                            crop
                          </Text>
                          <Text
                            my="3"
                            cursor="pointer"
                            fontSize="14px"
                            textTransform="capitalize"
                          >
                            T-Shirt (Lengan Pendek dan Tanpa Lengan)
                          </Text>
                          <Text
                            my="3"
                            cursor="pointer"
                            fontSize="14px"
                            textTransform="capitalize"
                          >
                            sport utility wear
                          </Text>
                        </Box>
                      </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem
                      borderTopColor="#DADADB"
                      borderBottomColor="transparent"
                    >
                      <h2>
                        <AccordionButton>
                          <Box as="span" flex="1" textAlign="left">
                            Ukuran
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <Flex>
                          <SizePicker {...sizeFilter} label="Size" />
                        </Flex>
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem borderColor="transparent">
                      <h2>
                        <AccordionButton>
                          <Box as="span" flex="1" textAlign="left">
                            Warna
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <ColorPicker {...colorFilter} label="Color" />
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem borderColor="transparent">
                      <h2>
                        <AccordionButton>
                          <Box as="span" flex="1" textAlign="left">
                            Harga
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <FormControl>
                          <RadioGroup fontSize="14px">
                            <Stack>
                              <Radio value="1" size="sm">
                                Di bawah Rp99.999
                              </Radio>
                              <Radio value="2" size="sm">
                                Rp100.000 - Rp199.999
                              </Radio>
                              <Radio value="3" size="sm">
                                Rp200.000 - Rp399.999
                              </Radio>
                              <Radio value="4" size="sm">
                                Rp400.000 - Rp599.999
                              </Radio>
                              <Radio value="5" size="sm">
                                Rp600.000 - Rp799.999
                              </Radio>
                            </Stack>
                          </RadioGroup>
                        </FormControl>
                      </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem borderColor="transparent">
                      <h2>
                        <AccordionButton>
                          <Box as="span" flex="1" textAlign="left">
                            Kriteria Tambahan
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <FormControl>
                          <RadioGroup fontSize="14px">
                            <Stack>
                              <Radio value="1" size="sm">
                                Value Buy (selama persediaan masih ada)
                              </Radio>
                              <Radio value="2" size="sm">
                                New
                              </Radio>
                              <Radio value="3" size="sm">
                                New Color
                              </Radio>
                              <Radio value="4" size="sm">
                                Coming Soon
                              </Radio>
                              <Radio value="5" size="sm">
                                Limited Store
                              </Radio>
                            </Stack>
                          </RadioGroup>
                        </FormControl>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </Box>
              </Stack>

              <Box width="full">
                {!isDesktop ? (
                  <>
                    <Stack
                      spacing={{
                        base: '6',
                        lg: '4',
                      }}
                      direction={{
                        base: 'column',
                        lg: 'row',
                      }}
                      justify="space-between"
                      align="flex-start"
                      width="full"
                    >
                      <InputGroup>
                        <Input placeholder="Search" />
                        <InputRightElement children={<SearchIcon />} />
                      </InputGroup>

                      <Flex
                        w="100%"
                        alignItems="center"
                        gap="2"
                        borderY="1px solid #dadada"
                      >
                        <Flex align="center">
                          <Text
                            flexShrink={0}
                            fontWeight="bold"
                            textTransform="uppercase"
                            fontSize="sm"
                          >
                            hasil:
                          </Text>
                          <Text
                            mx="2"
                            fontSize="sm"
                            textTransform="uppercase"
                            fontWeight="bold"
                          >
                            407 Produk
                          </Text>
                        </Flex>
                        <Spacer />
                        <Box cursor="pointer" borderX="1px solid #dadada" p="2">
                          <Flex align="center" justify="center">
                            <VscSplitHorizontal />
                          </Flex>
                          <Text
                            fontWeight="bold"
                            textTransform="uppercase"
                            fontSize="13px"
                          >
                            medium
                          </Text>
                        </Box>
                        <Box cursor="pointer">
                          <Flex align="center" justify="center">
                            <VscSettings />
                          </Flex>
                          <Text
                            fontWeight="bold"
                            textTransform="uppercase"
                            fontSize="13px"
                          >
                            filter
                          </Text>
                        </Box>
                      </Flex>
                    </Stack>
                  </>
                ) : (
                  <></>
                )}
                <Box minH="480px" rounded="xl" mt={{ base: 5, lg: 0 }}>
                  <SimpleGrid
                    columns={{
                      base: 2,
                      md: 3,
                      lg: 4,
                    }}
                    gap={{
                      base: '4',
                      lg: '2',
                    }}
                  >
                    {products.map((product, index) => (
                      <ProductCard key={index} product={product} />
                    ))}
                  </SimpleGrid>
                </Box>
              </Box>
            </Grid>
          </Box>
          <Box py="10">
            <Heading
              textTransform="uppercase"
              fontSize="32px"
              fontWeight="bold"
            >
              baru saja dilihat
            </Heading>
            <ProductCarousel />
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Search;
