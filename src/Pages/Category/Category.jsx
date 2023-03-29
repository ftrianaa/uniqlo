import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  useColorModeValue as mode,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CategoryFilter } from '../../Components/CategoryFilter/CategoryFilter';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import { Items } from '../../Components/Items/Items';
import { ProductCarousel } from '../../Components/ProductCarousel/ProductCarousel';
import { Slider } from '../../Components/Slider/Slider';
import { categories, liveStation, news, uniqloToday } from './data';
const Category = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Container>
        <Breadcrumb
          fontSize="sm"
          fontWeight="medium"
          color={mode('gray.600', 'gray.400')}
          separator={'/'}
        >
          <BreadcrumbItem>
            <BreadcrumbLink onClick={() => navigate('/')}>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">{category}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Box>
          <Heading textTransform="uppercase" textAlign="center">
            {category}
          </Heading>
          <Box>
            <Image src="https://im.uniqlo.com/global-cms/spa/res687307a2ae454ca4b5c3815137d67ba3fr.jpg" />
            <Box
              transform="translate(0%, -300%)"
              m="5"
              color="#fff"
              textShadow="0 2px 2px rgba(27,27,27,0.3)"
            >
              <Heading fontSize="34px">Koleksi Kemeja</Heading>
              <Text fontSize="15px">
                Berbagai pilihan kemeja menawan untuk gaya Ramadhan
              </Text>
              <Button textTransform="uppercase" color="black">
                selengkapnya
              </Button>
            </Box>
          </Box>
          <Image src="https://im.uniqlo.com/global-cms/spa/res1f3ad9fb65d3f4deebd1a06f83425130fr.jpg" />
          <Box>
            <Heading textTransform="uppercase" textAlign="center">
              Topics
            </Heading>
            <Slider />
          </Box>
          <Box>
            <Heading textTransform="uppercase" textAlign="center">
              Search by category
            </Heading>
            <Wrap align="center" justify="center">
              {categories.map((cats, index) => (
                <WrapItem key={index} w="23%">
                  <Box>
                    <Image src={cats.src} alt={cats.alt} />
                    <Text textAlign="center">{cats.alt}</Text>
                  </Box>
                </WrapItem>
              ))}
            </Wrap>
          </Box>
          <Box>
            <Heading textTransform="uppercase" textAlign="center">
              New Arrivals
            </Heading>
            <CategoryFilter />
            <Button w="100%" textTransform="uppercase">
              Selengkapnya
            </Button>
          </Box>
          <Image src="https://im.uniqlo.com/global-cms/spa/resd79b1466f8de36b69fe966df9156a0a6fr.jpeg" />
          <Box>
            <Heading textTransform="uppercase" textAlign="center">
              Best Sellers
            </Heading>
            <ProductCarousel />
          </Box>
          <Image src="https://im.uniqlo.com/global-cms/spa/rescade789c00b3ff5b8bcf0642d72902d7fr.jpg" />

          <Box>
            <Heading textTransform="uppercase" textAlign="center">
              Top Picks
            </Heading>
            <CategoryFilter />
            <Button w="100%" textTransform="uppercase">
              Selengkapnya
            </Button>
          </Box>

          <Box>
            <Heading textTransform="uppercase" textAlign="center">
              Seasonal Picks
            </Heading>
            <CategoryFilter />
            <Button w="100%" textTransform="uppercase">
              Selengkapnya
            </Button>
          </Box>
          <Box>
            <Heading textTransform="uppercase" textAlign="center">
              Value Buy
            </Heading>
            <CategoryFilter />
            <Button w="100%" textTransform="uppercase">
              Selengkapnya
            </Button>
            <Image src="https://im.uniqlo.com/global-cms/spa/resd713f4ef3b81b263e3b3c271f5fb4cc5fr.jpg" />
          </Box>
          <Box>
            <Heading textTransform="uppercase" textAlign="center">
              ut collection
            </Heading>
            <ProductCarousel />
            <Button w="100%" textTransform="uppercase">
              Selengkapnya
            </Button>
          </Box>

          <Box>
            <Heading textTransform="uppercase" textAlign="center">
              special collaboration
            </Heading>
            <Slider />
          </Box>
          <Box>
            <Heading textTransform="uppercase" textAlign="center">
              Featured News
            </Heading>
            <Grid
              templateColumns="repeat(2,1fr)"
              gap="1"
              borderTop="1px solid #dadada"
              borderBottom="1px solid #dadada"
            >
              {news.map((item, index) => (
                <GridItem key={index}>
                  <Image src={item.src} />
                  <Text fontWeight="bold">{item.alt}</Text>
                  <Text>{item.description}</Text>
                </GridItem>
              ))}
            </Grid>
          </Box>
          <Box>
            <Heading textTransform="uppercase" textAlign="center">
              Styling Book
            </Heading>
            <Image src="https://im.uniqlo.com/global-cms/spa/resb176e0d3c29b41e40cdc17ce470c07b9fr.jpg" />
            <Text fontWeight="bold">Styling Book </Text>
            <Text>
              Dapatkan ide gaya untuk inspirasi pakaian sehari-hari Anda untuk
              membangun penampilan Anda.
            </Text>
          </Box>
          <Box>
            <Heading textTransform="uppercase" textAlign="center">
              uniqlo today
            </Heading>
            <Grid
              templateColumns="repeat(2,1fr)"
              gap={1}
              borderTop="1px solid #dadada"
              borderBottom="1px solid #dadada"
            >
              {uniqloToday.map((item, index) => (
                <GridItem key={index}>
                  <HStack>
                    <Image src={item.src} w="200px" alt={item.alt} />
                    <VStack>
                      <Text fontWeight="bold">{item.title}</Text>
                      <Text>{item.description}</Text>
                    </VStack>
                  </HStack>
                </GridItem>
              ))}
            </Grid>
            <Text
              textTransform="capitalize"
              fontWeight="bold"
              textAlign="center"
              textDecor="underline"
            >
              selengkapnya
            </Text>
          </Box>
          <Box>
            <Heading textTransform="uppercase" textAlign="center">
              live station
            </Heading>

            <Grid
              templateColumns="repeat(3,1fr)"
              gap={1}
              borderTop="1px solid #dadada"
              borderBottom="1px solid #dadada"
            >
              {liveStation.map((item, index) => (
                <GridItem key={index}>
                  <Grid templateColumns="repeat(2, 1fr)" gap={2}>
                    <GridItem>
                      <Image
                        src={item.src}
                        w="200px"
                        alt={item.alt}
                        objectFit="contain"
                      />
                    </GridItem>
                    <GridItem>
                      {item.link !== '' ? (
                        <Text fontWeight="bold" color="#FF0000">
                          {item.date}
                        </Text>
                      ) : (
                        <Text fontWeight="bold" color="#ABABAB">
                          {item.date}
                        </Text>
                      )}
                      <Text fontWeight="bold">{item.title}</Text>
                      <Text>{item.description}</Text>
                      {item.link !== '' ? (
                        <Text
                          fontWeight="bold"
                          textDecor="underline"
                          textTransform="uppercase"
                        >
                          tonton sekarang!
                        </Text>
                      ) : (
                        <></>
                      )}
                    </GridItem>
                  </Grid>
                </GridItem>
              ))}
            </Grid>
            <Text
              textTransform="capitalize"
              fontWeight="bold"
              textAlign="center"
              textDecor="underline"
            >
              selengkapnya
            </Text>
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Category;
