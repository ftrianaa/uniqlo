import React from 'react';
import Header from '../../../Components/Header/Header';
import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import SliderSignature from './SliderSignature';
import { ProductCard } from '../../Search/ProductCard';
import { products } from '../../Search/_data';
import { MenuGallery } from '../../../Components/MenuGallery/MenuGallery';
import ProductCarousel from '../../../Components/ProductCarousel/ProductCarousel';
import FollowUsSlider from './FollowUsSlider';
import InstallKlamby from '../../../Text/install-klamby.PNG';
const Signature = () => {
  return (
    <>
      <Header />
      <Box>
        <SliderSignature />
      </Box>

      <Flex
        gap="20"
        alignItems="center"
        justifyContent="center"
        bgColor="#f4f4f4"
        py="5"
        w="100%"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Image
            src="https://cdn-icons-png.flaticon.com/512/6475/6475938.png"
            w="75px"
            objectFit="obtain"
          />
          <Text>Loyalty point</Text>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Image
            src="https://cdn-icons-png.flaticon.com/512/218/218390.png"
            w="75px"
            objectFit="obtain"
          />
          <Text>Payment secured</Text>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Image
            src="https://ccs-safety.org/wp-content/uploads/2019/12/programs-certification.png"
            w="75px"
            objectFit="obtain"
          />
          <Text>Quality gruanteed</Text>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Image
            src="https://www.pngmart.com/files/7/Good-PNG-Transparent.png"
            w="75px"
            objectFit="obtain"
          />
          <Text>Trust review</Text>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Image
            src="https://static.vecteezy.com/system/resources/previews/014/069/831/non_2x/motorbike-for-food-delivery-service-online-ordering-concept-png.png"
            w="75px"
            objectFit="obtain"
          />
          <Text>Secure deliver</Text>
        </Box>
      </Flex>
      <Box px={{ base: 5, md: 10, lg: 20 }} bgColor="white" p="5">
        <Box display="flex" justifyContent="space-between" gap="100">
          <VStack spacing="5" align="left">
            <Box>
              <Text textTransform="uppercase" fontWeight="bold">
                klamby
              </Text>
              <Text fontSize="35px" fontWeight="bold">
                Modesty Reimagined
              </Text>
            </Box>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
              maxime eveniet! Quas quaerat odit quisquam? Labore deleniti ut
              voluptate maiores, facilis dolore, nihil at fugiat libero eum
              reiciendis suscipit soluta.
            </Text>
            <Button
              textTransform="uppercase"
              bgColor="red"
              color="white"
              fontWeight="bold"
              borderRadius="0"
              w={{ base: '100%', lg: '50%' }}
              size={{ base: 'lg', lg: 'md' }}
            >
              read our story
            </Button>
          </VStack>
          <Box>
            <Image
              src="https://im.uniqlo.com/global-cms/spa/res26d29aadd43875d9c42579d0ccaac684fr.jpg"
              alt="modesty-reimagined"
              objectFit="cover"
              h="250px"
              w="900px"
            />
          </Box>
        </Box>
        <Box>
          <Text fontSize="35px" fontWeight="bold" textTransform="uppercase">
            What's new
          </Text>
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
          <Text fontSize="35px" fontWeight="bold" textTransform="uppercase">
            Top picks
          </Text>
          <ProductCarousel />
        </Box>
        <Box>
          <Text fontSize="35px" fontWeight="bold" textTransform="uppercase">
            follow us on @wearingklamby
          </Text>
          <FollowUsSlider />
        </Box>
      </Box>
      <Box>
        <Image src={InstallKlamby} />
      </Box>
    </>
  );
};

export default Signature;
