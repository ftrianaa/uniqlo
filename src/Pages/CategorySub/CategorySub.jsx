import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
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
} from '@chakra-ui/react';
import React from 'react';
import { useParams } from 'react-router-dom';
import { CheckboxFilter } from '../../Components/CategoryFilter/CheckboxFilter';
import { ColorPicker } from '../../Components/CategoryFilter/ColorPicker';
import { MobileFilter } from '../../Components/CategoryFilter/MobileFilter';
import { PriceRangePicker } from '../../Components/CategoryFilter/PriceRangePicker';
import { ProductBreadcrumb } from '../../Components/CategoryFilter/ProductBreadcrumb';
import { SizePicker } from '../../Components/CategoryFilter/SizePicker';
import { SortbySelect } from '../../Components/CategoryFilter/SortBySelect';
import { ProductCard } from './ProductCard';
import { products } from './_data';

import {
  blueFilters,
  breadcrumbData,
  colorFilter,
  genderFilter,
  sizeFilter,
} from '../../Components/CategoryFilter/_data';

import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import { ProductCarousel } from '../../Components/ProductCarousel/ProductCarousel';

const CategorySub = () => {
  const { category, subCategory } = useParams();
  //   console.log(category, 'categoryyy');
  //   console.log(subCategory, 'subbsbsss');
  return (
    <>
      <Header />
      <Container>
        <Box
          maxW="7xl"
          mx="auto"
          px={{
            base: '4',
            md: '8',
            lg: '12',
          }}
          py={{
            base: '6',
            md: '8',
            lg: '12',
          }}
        >
          <ProductBreadcrumb data={breadcrumbData} />
          <Box>
            <Heading textTransform="uppercase" fontSize="48px">
              {category}
            </Heading>
          </Box>
          <Box as="section">
            <Stack spacing="16">
              <Tabs size="lg" variant="with-line">
                <TabList>
                  <Tab>Home</Tab>
                  <Tab>Components</Tab>
                  <Tab>Pricing</Tab>
                </TabList>
              </Tabs>
            </Stack>
          </Box>
          <Box
            mt={{
              base: '8',
              md: '16',
            }}
          >
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
                  borderWidth="2px"
                  minH="480px"
                  rounded="xl"
                  borderStyle="dashed"
                >
                  <SimpleGrid
                    columns={{
                      base: 1,
                      sm: 2,
                      md: 3,
                      lg: 4,
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
          <Box>
            <Header>people also buy</Header>
            <Text>Padu padan yang Cocok dengan atasan Anda.</Text>
            <ProductCarousel />
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default CategorySub;
