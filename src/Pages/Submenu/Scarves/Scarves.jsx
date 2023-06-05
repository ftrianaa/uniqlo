import React from 'react';
import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import SliderSignature from '../Signature/SliderSignature';
import ReviewSlider from '../Signature/ReviewSlider';
import { products } from '../Signature/_data';
import { ProductCard } from '../../Search/ProductCard';
import ProductCarousel from '../../../Components/ProductCarousel/ProductCarousel';
import LatestLookbook from '../Component/LatestLookbook/LatestLookbook';
import LatestJournal from '../Component/LatestJournal/LatestJournal';
import FollowUsSlider from '../Signature/FollowUsSlider';
import InstallKlamby from '../../../assets/banner/footer.png';
import poster2 from '../../../assets/poster/poster2.png';
import poster3 from '../../../assets/poster/poster3.png';
import poster4 from '../../../assets/poster/poster4.png';
const Scarves = () => {
  return (
    <>
      <AspectRatio ratio={16 / 8}>
        <SliderSignature />
      </AspectRatio>

      <Box bgColor="white" px={{ base: 5, md: 10, lg: 20 }} p="5">
        <Grid
          templateColumns={{ base: 'repeat(2,1fr)', lg: 'repeat(3,1fr)' }}
          gap="5"
          my="5"
        >
          <GridItem p="5" bgColor="#f4f4f4">
            <Text
              fontSize={{ base: '22px', lg: '36px' }}
              fontWeight="bold"
              textTransform="uppercase"
            >
              Signature
            </Text>
            <Text>Collection with typical klamby pattern</Text>
            <br />

            <Flex justify="center" align="center">
              <Image mt="5" src={poster2} />
            </Flex>
          </GridItem>
          <GridItem p="5" bgColor="#f4f4f4">
            <Text
              fontSize={{ base: '22px', lg: '36px' }}
              fontWeight="bold"
              textTransform="uppercase"
            >
              Heritage
            </Text>
            <Text>Collection that represents elegance and luxury for you </Text>

            <Flex justify="center" align="center">
              <Image mt="5" src={poster3} />
            </Flex>
          </GridItem>
          <GridItem p="5" bgColor="#f4f4f4" colSpan={{ base: 2, lg: 1 }}>
            <Text
              fontSize={{ base: '22px', lg: '36px' }}
              fontWeight="bold"
              textTransform="uppercase"
            >
              Scarves
            </Text>
            <Text>Klamby scarves collection with its signature pattern</Text>

            <Flex justify="center" align="center">
              <Image mt="5" src={poster4} />
            </Flex>
          </GridItem>
        </Grid>
        <Box py="5">
          <ReviewSlider />
        </Box>
        <Box>
          <Text
            fontSize={{ base: '22px', lg: '36px' }}
            fontWeight="bold"
            textTransform="uppercase"
          >
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
          <Text
            fontSize={{ base: '22px', lg: '36px' }}
            fontWeight="bold"
            textTransform="uppercase"
          >
            Best Seller
          </Text>

          <ProductCarousel />
        </Box>
        <Box>
          <LatestLookbook />
        </Box>
        <Box>
          <LatestJournal />
        </Box>
        <Box>
          <Text
            fontSize={{ base: '22px', lg: '36px' }}
            fontWeight="bold"
            textTransform="uppercase"
          >
            Tutorial
          </Text>
          <Flex
            // gap="10"
            pt="177.78%"
            // overflow="hidden"
            position="relative"
            w="100%"
            flexDir={{ base: 'column' }}
          >
            <iframe
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                bottom: '0',
                right: '0',
                width: '48%',
                height: '100%',
              }}
              src="https://www.youtube.com/embed/3OYa0Yk8xNo"
              title="Klamby Scarf Collection: Magnolia Scarf"
              frameborder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            />

            <iframe
              style={{
                position: 'absolute',
                top: '0',
                left: '52%',
                bottom: '0',
                right: '0',
                width: '48%',
                height: '100%',
              }}
              src="https://www.youtube.com/embed/nx4Oo8M299U"
              title="Klamby Scarf Collection: Ulos Scarf"
              frameborder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            />
          </Flex>
        </Box>
        <Box my={5}>
          <Text
            fontSize={{ base: '22px', lg: '36px' }}
            fontWeight="bold"
            textTransform="uppercase"
            mb="5"
          >
            follow us on @klambyscarves
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

export default Scarves;
