import {
  Box,
  Heading,
  HStack,
  Input,
  Stack,
  Tab,
  TabList,
  Tabs,
  Text,
  Grid,
  SimpleGrid,
  Flex,
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckboxFilter } from '../../Components/CategoryFilter/CheckboxFilter';
import { ColorPicker } from '../../Components/CategoryFilter/ColorPicker';
import { MobileFilter } from '../../Components/CategoryFilter/MobileFilter';
import { PriceRangePicker } from '../../Components/CategoryFilter/PriceRangePicker';
import { ProductBreadcrumb } from '../../Components/CategoryFilter/ProductBreadcrumb';
import { SizePicker } from '../../Components/CategoryFilter/SizePicker';
import { SortbySelect } from '../../Components/CategoryFilter/SortBySelect';
import { ProductCard } from '../../Components/ProductCard/ProductCard';
import { products } from './_data';

import {
  blueFilters,
  breadcrumbData,
  colorFilter,
  genderFilter,
  sizeFilter,
} from '../../Components/CategoryFilter/_data';

import ProductCarousel from '../../Components/ProductCarousel/ProductCarousel';

const ValueBuy = () => {
  const navigate = useNavigate();
  //   console.log(category, 'categoryyy');
  //   console.log(subCategory, 'subbsbsss');
  return (
    <>
      <Box bgColor="white" mb="5">
        <Box maxW="7xl" px={{ base: 5, md: 10, lg: 20 }}>
          <ProductBreadcrumb data={breadcrumbData} />
          <Box>
            <Heading
              textTransform="uppercase"
              fontSize="48px"
              fontWeight="bold"
              pt="6"
            >
              value buy
            </Heading>
          </Box>
          <Box as="section" pt="5">
            <Stack spacing="16">
              <Tabs size="lg" variant="with-line">
                <TabList>
                  <Flex align="center" w="25%" justify="center">
                    <Tab
                      textTransform="uppercase"
                      fontSize="18px"
                      fontWeight="bold"
                    >
                      <Text textAlign="center">wanita</Text>
                    </Tab>
                  </Flex>
                  <Flex align="center" w="25%" justify="center">
                    <Tab
                      textTransform="uppercase"
                      fontSize="18px"
                      fontWeight="bold"
                    >
                      <Text textAlign="center">pria</Text>
                    </Tab>
                  </Flex>
                  <Flex align="center" w="25%" justify="center">
                    <Tab
                      textTransform="uppercase"
                      fontSize="18px"
                      fontWeight="bold"
                    >
                      <Text textAlign="center">anak</Text>
                    </Tab>
                  </Flex>
                  <Flex align="center" w="25%" justify="center">
                    <Tab
                      textTransform="uppercase"
                      fontSize="18px"
                      fontWeight="bold"
                    >
                      <Text textAlign="center">bayi</Text>
                    </Tab>
                  </Flex>
                </TabList>
              </Tabs>
            </Stack>
          </Box>
          {/* <Box py="5">
            <SliderBanner />
          </Box> */}
          <Box mt="2">
            <Grid
              templateColumns={{
                base: '1fr',
                md: '240px 1fr',
              }}
              gap="14"
            >
              <Stack
                spacing="10"
                maxW="240px"
                display={{
                  base: 'none',
                  md: 'flex',
                }}
              >
                <CheckboxFilter
                  spacing="3"
                  options={genderFilter.options}
                  label="Gender"
                />
                <SizePicker {...sizeFilter} label="Size" />
                <ColorPicker {...colorFilter} label="Color" />
                <CheckboxFilter
                  spacing="3"
                  options={blueFilters.options}
                  label="Brand"
                  showSearch
                />
                <Stack spacing="5">
                  <label>Price range</label>
                  <PriceRangePicker defaultValue={[6, 40]} />
                  <HStack spacing="6">
                    <Input type="number" placeholder="$500" />
                    <Input type="number" placeholder="$1,000" />
                  </HStack>
                </Stack>
              </Stack>

              <Box width="full">
                <Stack
                  spacing={{
                    base: '6',
                    md: '4',
                  }}
                  direction={{
                    base: 'column',
                    md: 'row',
                  }}
                  justify="space-between"
                  align="flex-start"
                  width="full"
                >
                  <Stack
                    direction={{
                      base: 'column',
                      md: 'row',
                    }}
                    align="baseline"
                  >
                    <Heading size="md" fontSize="2xl">
                      Watches
                    </Heading>
                    <Text color="gray.500">(300 products)</Text>
                  </Stack>
                  <MobileFilter />
                  <HStack
                    display={{
                      base: 'none',
                      md: 'flex',
                    }}
                  >
                    <Text flexShrink={0} color="gray.500" fontSize="sm">
                      Sort by
                    </Text>
                    <SortbySelect />
                  </HStack>
                </Stack>
                <Box
                  mt="6"
                  minH="480px"
                  rounded="xl"
                  onClick={() => navigate('/product/koleksi-kemeja')}
                  cursor="pointer"
                >
                  <SimpleGrid
                    columns={{
                      base: 1,
                      sm: 2,
                      md: 3,
                    }}
                    gap={{
                      base: '8',
                      lg: '10',
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
          <Box>
            <Heading
              textTransform="capitalize"
              fontSize="32px"
              fontWeight="bold"
            >
              people also buy
            </Heading>
            <Text>Padu padan yang Cocok dengan atasan Anda.</Text>
            <ProductCarousel />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ValueBuy;
