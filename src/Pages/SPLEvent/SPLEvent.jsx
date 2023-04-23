import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Stack,
  Tab,
  TabList,
  Tabs,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import AboutLifewear from '../../Components/AboutLifewear/AboutLifewear';
import AppBenefits from '../../Components/AppBenefits/AppBenefits';
import EventSlider from '../../Components/EventSlider/EventSlider';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import ProductCarousel from '../../Components/ProductCarousel/ProductCarousel';
import MiniCarousel from '../../Components/MiniCarousel/MiniCarousel';

const SPLEvent = () => {
  return (
    <>
      <Header />
      <Container px={{ base: 0, lg: 20 }} bgColor="white">
        <Box my="5">
          <Image
            src="https://im.uniqlo.com/global-cms/spa/res5b4e88ab4fbb1d51c120a4eb42dcb878fr.jpg"
            alt="spl-hari-raya"
          />
        </Box>
        <Flex my="5">
          <Button
            bgColor="transparent"
            fontWeight="bold"
            textTransform="uppercase"
            borderTop="1px solid #dadada"
            borderBottom="1px solid #dadada"
            borderRadius="0"
            w="33.3%"
            h="70px"
          >
            limited
          </Button>
          <Button
            bgColor="transparent"
            fontWeight="bold"
            textTransform="uppercase"
            border="1px solid #dadada"
            borderRadius="0"
            w="33.3%"
            h="70px"
          >
            batik motif
          </Button>
          <Button
            bgColor="transparent"
            fontWeight="bold"
            textTransform="uppercase"
            borderTop="1px solid #dadada"
            borderBottom="1px solid #dadada"
            borderRadius="0"
            w="33.3%"
            h="70px"
          >
            app benefits
          </Button>
        </Flex>
        <MiniCarousel />
        <Box my="5">
          <Image src="https://im.uniqlo.com/global-cms/spa/resa9b083fecea970db6883eb79d5e112b1fr.jpg" />
        </Box>
        <Box my="5">
          <Image src="https://im.uniqlo.com/global-cms/spa/resa25f22fcc7e9fac824deacc3a0f775f4fr.jpg" />
        </Box>
        <Box as="section" pt="5">
          <Stack spacing="16">
            <Tabs size="lg" variant="with-line">
              <TabList>
                <Flex align="center" w="33.3%" justify="center">
                  <Tab
                    textTransform="uppercase"
                    fontSize="18px"
                    fontWeight="bold"
                  >
                    <Text textAlign="center">wanita</Text>
                  </Tab>
                </Flex>
                <Flex align="center" w="33.3%" justify="center">
                  <Tab
                    textTransform="uppercase"
                    fontSize="18px"
                    fontWeight="bold"
                  >
                    <Text textAlign="center">pria</Text>
                  </Tab>
                </Flex>
                <Flex align="center" w="33.3%" justify="center">
                  <Tab
                    textTransform="uppercase"
                    fontSize="18px"
                    fontWeight="bold"
                  >
                    <Text textAlign="center">anak</Text>
                  </Tab>
                </Flex>
              </TabList>
            </Tabs>
          </Stack>
        </Box>
        <Box my="5">
          <ProductCarousel />
          <ProductCarousel />
          <ProductCarousel />
          <ProductCarousel />
        </Box>
        <Box my="5">
          <Image src="https://im.uniqlo.com/global-cms/spa/rese37440cb61d6e6aba044b0bd9ff5fb15fr.jpg" />
        </Box>
        <Box>
          <Text fontWeight="bold" fontSize="20px">
            Tersedia 27 Maret
          </Text>
          <Image
            my="5"
            src="https://im.uniqlo.com/global-cms/spa/resea2a9f1c6f2da4a0d394eb23a8126ac4fr.jpg"
          />
          <ProductCarousel />
        </Box>
        <Box className="uniqlo-modest-wear" my="5">
          <Image src="https://im.uniqlo.com/global-cms/spa/resd5249eb436938ddc139d7c948b535828fr.jpg" />
          <Image
            my="5"
            src="https://im.uniqlo.com/global-cms/spa/resb1bbf1a157d5eb9dc938842c9014d39efr.jpg"
          />
        </Box>
        <Box className="app-benefits" my="5">
          <Image
            src="https://im.uniqlo.com/global-cms/spa/res86357b9deb98073afcc809be111d8439fr.jpg"
            my="5"
          />
          <AppBenefits />
        </Box>
        <Box className="about-lifewear" my="5">
          <Image
            src="https://im.uniqlo.com/global-cms/spa/resb8fe50ad4bc1718179f6abc4b6bdef13fr.jpg"
            my="5"
          />
          <AboutLifewear />
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default SPLEvent;
