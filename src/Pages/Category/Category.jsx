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
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AboutLifewear from '../../Components/AboutLifewear/AboutLifewear';

import AppBenefits from '../../Components/AppBenefits/AppBenefits';
import { CategoryFilter } from '../../Components/CategoryFilter/CategoryFilter';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import { Items } from '../../Components/Items/Items';
import { MenuGallery } from '../../Components/MenuGallery/MenuGallery';
import MiniCarousel from '../../Components/MiniCarousel/MiniCarousel';
import ProductCarousel from '../../Components/ProductCarousel/ProductCarousel';
import { Slider } from '../../Components/Slider/Slider';
import { categories, liveStation, news, uniqloToday } from './data';
const Category = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <>
      <Header />
      <Box px={{ base: 5, md: 10, lg: 20 }} bgColor="white">
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
                <BreadcrumbLink href="#">{category}</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Heading
              textTransform="uppercase"
              fontSize="48px"
              fontWeight="bold"
              textAlign="center"
            >
              {category}
            </Heading>
          </>
        ) : (
          <></>
        )}

        <Box>
          <Box>
            <Image src="https://im.uniqlo.com/global-cms/spa/res140999e3d5d2fc3333546b1e84d869c4fr.jpg" />
            <Box
              m="5"
              color="#fff"
              textShadow="0 2px 2px rgba(27,27,27,0.3)"
              top={{ base: '8%', lg: '50%' }}
              position="absolute"
              display="block"
            >
              <Heading
                fontSize={{ base: '22px', lg: '34px' }}
                // lineHeight={{ base: 0, lg: '4.5rem' }}
              >
                Koleksi Kemeja
              </Heading>
              <Text fontSize="15px">
                Berbagai pilihan kemeja menawan untuk gaya Ramadhan
              </Text>
              <Button
                fontWeight="bold"
                textTransform="uppercase"
                color="black"
                borderRadius="0"
                onClick={() => navigate('/product/koleksi-kemeja')}
              >
                selengkapnya
              </Button>
            </Box>
          </Box>
          <Box
            className="spl-event"
            onClick={() => navigate('/spl/hariraya')}
            cursor="pointer"
          >
            <Image
              src="https://im.uniqlo.com/global-cms/spa/res1f3ad9fb65d3f4deebd1a06f83425130fr.jpg"
              alt="spl-event"
              mt="5"
            />
          </Box>
          <Box>
            <Heading
              textTransform="uppercase"
              fontSize={{ base: '22x', lg: '36px' }}
              fontWeight="bold"
              textAlign="center"
            >
              Topics
            </Heading>
            <MiniCarousel />
          </Box>
          <Box>
            <Heading
              textTransform="uppercase"
              fontSize={{ base: '22px', lg: '36px' }}
              fontWeight="bold"
              textAlign="center"
            >
              Search by category
            </Heading>
            <Grid
              align="center"
              justify="center"
              fontSize={{ base: '15px', lg: '16px' }}
              templateColumns={{ base: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }}
              gridColumnGap="0.75rem"
              gridRowGap="1.5rem"
            >
              {categories.map((cats, index) => (
                <GridItem
                  key={index}
                  // w={{ base: '21%', lg: '24.2%' }}
                  onClick={() => navigate('/category/men')}
                  cursor="pointer"
                >
                  <Box>
                    <Image src={cats.src} alt={cats.alt} />
                    <Text textAlign="center">{cats.alt}</Text>
                  </Box>
                </GridItem>
              ))}
            </Grid>
          </Box>
          <Box className="new-arrivals" my="5">
            <Heading
              textTransform="uppercase"
              fontSize={{ base: '22px', lg: '36px' }}
              fontWeight="bold"
              textAlign="center"
            >
              New Arrivals
            </Heading>
            <MenuGallery />
            <Button
              w="100%"
              textTransform="uppercase"
              variant="outline"
              borderColor="black"
              borderRadius="0"
              my="10"
              onClick={() => navigate('/new arrivals/koleksi-kemeja')}
            >
              Selengkapnya
            </Button>
          </Box>
          <Image
            src="https://im.uniqlo.com/global-cms/spa/resd79b1466f8de36b69fe966df9156a0a6fr.jpeg"
            onClick={() => navigate('/search/coming-soon')}
            cursor="pointer"
          />
          <Box>
            <Heading
              textTransform="uppercase"
              fontSize={{ base: '22px', lg: '36px' }}
              fontWeight="bold"
              textAlign="center"
            >
              Best Sellers
            </Heading>
            <ProductCarousel />
          </Box>
          <Image src="https://im.uniqlo.com/global-cms/spa/rescade789c00b3ff5b8bcf0642d72902d7fr.jpg" />

          <Box>
            <Heading
              textTransform="uppercase"
              fontSize={{ base: '22px', lg: '36px' }}
              fontWeight="bold"
              textAlign="center"
            >
              Top Picks
            </Heading>
            <MenuGallery />
            <Button
              w="100%"
              textTransform="uppercase"
              variant="outline"
              borderColor="black"
              borderRadius="0"
              my="10"
              onClick={() => navigate('/top picks/koleksi-kemeja')}
            >
              Selengkapnya
            </Button>
          </Box>

          <Box>
            <Heading
              textTransform="uppercase"
              fontSize={{ base: '22px', lg: '36px' }}
              fontWeight="bold"
              textAlign="center"
            >
              Seasonal Picks
            </Heading>
            <MenuGallery />
            <Button
              w="100%"
              textTransform="uppercase"
              variant="outline"
              borderColor="black"
              borderRadius="0"
              my="10"
              onClick={() => navigate('/seasonal picks/koleksi-kemeja')}
            >
              Selengkapnya
            </Button>
          </Box>
          <Box>
            <Heading
              textTransform="uppercase"
              fontSize={{ base: '22px', lg: '36px' }}
              fontWeight="bold"
              textAlign="center"
            >
              Value Buy
            </Heading>
            <MenuGallery />
            <Button
              w="100%"
              textTransform="uppercase"
              variant="outline"
              borderColor="black"
              borderRadius="0"
              my="10"
              onClick={() => navigate('/value buy/koleksi-kemeja')}
            >
              Selengkapnya
            </Button>
            <Image
              src="https://im.uniqlo.com/global-cms/spa/resd713f4ef3b81b263e3b3c271f5fb4cc5fr.jpg"
              onClick={() => navigate('/discounts')}
              cursor="pointer"
            />
          </Box>
          <Box>
            <Heading
              textTransform="uppercase"
              fontSize={{ base: '22px', lg: '36px' }}
              fontWeight="bold"
              textAlign="center"
            >
              ut collection
            </Heading>
            <ProductCarousel />
            <Button
              w="100%"
              textTransform="uppercase"
              variant="outline"
              borderColor="black"
              borderRadius="0"
              my="10"
              onClick={() => navigate('/ut collection/koleksi-kemeja')}
            >
              Selengkapnya
            </Button>
          </Box>

          <Box>
            <Heading
              textTransform="uppercase"
              fontSize={{ base: '22px', lg: '36px' }}
              fontWeight="bold"
              textAlign="center"
            >
              special collaboration
            </Heading>
            <Slider />
            <Button
              w="100%"
              textTransform="uppercase"
              variant="outline"
              borderColor="black"
              borderRadius="0"
              my="10"
              onClick={() => navigate('/special collaboration/koleksi-kemeja')}
            >
              Selengkapnya
            </Button>
          </Box>
          <Box>
            <Heading
              textTransform="uppercase"
              fontSize={{ base: '22px', lg: '36px' }}
              fontWeight="bold"
              textAlign="center"
            >
              App Benefits
            </Heading>
            <AppBenefits />
          </Box>
          <Box>
            <Heading
              textTransform="uppercase"
              fontSize={{ base: '22px', lg: '36px' }}
              fontWeight="bold"
              textAlign="center"
            >
              about lifewear
            </Heading>
            <AboutLifewear />
          </Box>
          <Box>
            <Heading
              textTransform="uppercase"
              fontSize={{ base: '22px', lg: '36px' }}
              fontWeight="bold"
              textAlign="center"
            >
              Featured News
            </Heading>
            <Grid
              templateColumns={{ base: 'repeat(1,1fr)', lg: 'repeat(2,1fr)' }}
              gap="1"
              borderTop="1px solid #dadada"
              borderBottom="1px solid #dadada"
            >
              {news.map((item, index) => (
                <Flex key={index} flexDirection={{ base: 'row', lg: 'column' }}>
                  <Image src={item.src} w={{ base: '155px', lg: '100%' }} />
                  <Box px={{ base: 3, lg: 0 }}>
                    <Text fontWeight="bold">{item.alt}</Text>
                    <Text>{item.description}</Text>
                  </Box>
                </Flex>
              ))}
            </Grid>
            <Button
              w="100%"
              textTransform="uppercase"
              variant="outline"
              borderColor="black"
              borderRadius="0"
              my="10"
            >
              Selengkapnya
            </Button>
          </Box>
          <Box>
            <Heading
              textTransform="uppercase"
              fontSize={{ base: '22px', lg: '36px' }}
              fontWeight="bold"
              textAlign="center"
            >
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
            <Heading
              textTransform="uppercase"
              fontSize={{ base: '22px', lg: '36px' }}
              fontWeight="bold"
              textAlign="center"
            >
              uniqlo today
            </Heading>
            <Grid
              templateColumns={{ base: 'repeat(1,1fr)', lg: 'repeat(2,1fr)' }}
              gap={1}
              borderTop="1px solid #dadada"
              borderBottom="1px solid #dadada"
              fontSize={{ base: '15px', lg: '16px' }}
            >
              {uniqloToday.map((item, index) => (
                <Flex key={index}>
                  <HStack>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      w={{ base: '155px', lg: '200px' }}
                    />
                    <VStack>
                      <Text fontWeight="bold">{item.title}</Text>
                      <Text>{item.description}</Text>
                    </VStack>
                  </HStack>
                </Flex>
              ))}
            </Grid>
            <Button
              w="100%"
              textTransform="uppercase"
              variant="outline"
              borderColor="black"
              borderRadius="0"
              my="10"
            >
              Selengkapnya
            </Button>
          </Box>
          <Box>
            <Heading
              textTransform="uppercase"
              fontSize={{ base: '22px', lg: '36px' }}
              fontWeight="bold"
              textAlign="center"
            >
              live station
            </Heading>

            <Grid
              templateColumns={{ base: 'repeat(1,1fr)', lg: 'repeat(3,1fr)' }}
              gap={1}
              borderTop="1px solid #dadada"
              borderBottom="1px solid #dadada"
            >
              {liveStation.map((item, index) => (
                <GridItem key={index}>
                  <Grid
                    templateColumns="repeat(2, 1fr)"
                    gap={{ base: 0, lg: 2 }}
                  >
                    <GridItem>
                      <Image
                        src={item.src}
                        w={{ base: '155px', lg: '200px' }}
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
            <Button
              w="100%"
              textTransform="uppercase"
              variant="outline"
              borderColor="black"
              borderRadius="0"
              my="10"
            >
              Selengkapnya
            </Button>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Category;
