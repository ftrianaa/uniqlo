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
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import SliderSignature from './SliderSignature';
import { ProductCard } from '../../Search/ProductCard';
import { products } from '../../Search/_data';
import ProductCarousel from '../../../Components/ProductCarousel/ProductCarousel';
import FollowUsSlider from './FollowUsSlider';
import InstallKlamby from '../../../assets/banner/footer.png';
import ReviewSlider from './ReviewSlider';
import LatestLookbook from '../Component/LatestLookbook/LatestLookbook';
import LatestJournal from '../Component/LatestJournal/LatestJournal';
import { useParams } from 'react-router-dom';
import trustReview from '../../../assets/icons/TrustReview.png';
import paymentSecure from '../../../assets/icons/paymentSecure.png';
import qualityGruanted from '../../../assets/icons/qualityGuaranted.png';
import loyaltyPoint from '../../../assets/icons/loyalty point.png';
import delivery from '../../../assets/icons/Dikirim.png';
import poster1 from '../../../assets/poster/poster1.png';
import poster2 from '../../../assets/poster/poster2.png';
import poster3 from '../../../assets/poster/poster3.png';
import poster4 from '../../../assets/poster/poster4.png';
import catOther from '../../../assets/category/others.png';
import catBag from '../../../assets/category/bag.png';
import catTop from '../../../assets/category/top.png';
import catBottom from '../../../assets/category/bottom.png';

const Signature = () => {
  const { page } = useParams();

  return (
    <>
      <AspectRatio ratio={16 / 8}>
        <SliderSignature />
      </AspectRatio>

      <Grid
        templateColumns="repeat(5,1fr)"
        alignItems="center"
        justifyContent="center"
        bgColor="#f4f4f4"
        gap="2"
        py="5"
        w="100%"
        textAlign="center"
      >
        <GridItem
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Image
            src={loyaltyPoint}
            w={{ base: '50px', lg: '75px' }}
            objectFit="obtain"
          />
          <Text fontSize={{ base: '13px', md: '16px' }}>Loyalty point</Text>
        </GridItem>
        <GridItem
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Image
            src={paymentSecure}
            w={{ base: '50px', lg: '75px' }}
            objectFit="obtain"
          />
          <Text fontSize={{ base: '13px', md: '16px' }}>Payment secured</Text>
        </GridItem>
        <GridItem
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Image
            src={qualityGruanted}
            w={{ base: '50px', lg: '75px' }}
            objectFit="obtain"
          />
          <Text fontSize={{ base: '13px', md: '16px' }}>Quality gruanteed</Text>
        </GridItem>
        <GridItem
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Image
            src={trustReview}
            w={{ base: '50px', lg: '75px' }}
            objectFit="obtain"
          />
          <Text fontSize={{ base: '13px', md: '16px' }}>Trust review</Text>
        </GridItem>
        <GridItem
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Image
            src={delivery}
            w={{ base: '50px', lg: '75px' }}
            objectFit="obtain"
          />
          <Text fontSize={{ base: '13px', md: '16px' }}>Secure deliver</Text>
        </GridItem>
      </Grid>
      <Box px={{ base: 5, md: 10, lg: 20 }} bgColor="white" p="5">
        <Box my="5">
          <ReviewSlider />
        </Box>
        <Box display="flex" justifyContent="space-between" gap="100" my="10">
          <VStack spacing="5" align="left">
            <Box>
              <Text textTransform="uppercase" fontWeight="bold">
                klamby
              </Text>
              <Text fontSize={{ base: '22px', lg: '36px' }} fontWeight="bold">
                Modesty Reimagined
              </Text>
            </Box>
            <Box display={{ base: 'block', lg: 'none' }}>
              <Image
                src="https://im.uniqlo.com/global-cms/spa/res26d29aadd43875d9c42579d0ccaac684fr.jpg"
                alt="modesty-reimagined"
                objectFit="cover"
                h="250px"
                w="900px"
              />
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

          <Box display={{ base: 'none', lg: 'block' }}>
            <Image
              src={poster1}
              alt="modesty-reimagined"
              objectFit="cover"
              h="250px"
              w="900px"
            />
          </Box>
        </Box>
        <Grid
          templateColumns={{ base: 'repeat(2,1fr)', lg: 'repeat(3,1fr)' }}
          gap="5"
          my="10"
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
        <Box my="5">
          <Text
            fontSize={{ base: '22px', lg: '36px' }}
            fontWeight="bold"
            textTransform="uppercase"
            my="5"
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
        <Box my="5">
          <Text
            fontSize={{ base: '22px', lg: '36px' }}
            fontWeight="bold"
            textTransform="uppercase"
            my="5"
          >
            Top picks
          </Text>

          <ProductCarousel />
        </Box>

        <Box my={5}>
          <Text
            fontSize={{ base: '22px', lg: '36px' }}
            fontWeight="bold"
            textTransform="uppercase"
            my="5"
          >
            Shop by Category
          </Text>
          <Grid
            align="center"
            justify="center"
            fontSize={{ base: '15px', lg: '16px' }}
            templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
            gridColumnGap="0.75rem"
            gridRowGap="1.5rem"
          >
            <GridItem cursor="pointer">
              <Box>
                <Image src={catTop} />
                <Text textAlign="center">Top</Text>
              </Box>
            </GridItem>
            <GridItem cursor="pointer">
              <Box>
                <Image src={catBottom} />
                <Text textAlign="center">Bottom</Text>
              </Box>
            </GridItem>
            <GridItem cursor="pointer">
              <Box>
                <Image src={catBag} />
                <Text textAlign="center">Bags</Text>
              </Box>
            </GridItem>
            <GridItem cursor="pointer">
              <Box>
                <Image src={catOther} />
                <Text textAlign="center">Others</Text>
              </Box>
            </GridItem>
          </Grid>
        </Box>
        <Box>
          <LatestLookbook />
        </Box>
        <Box>
          <LatestJournal />
        </Box>
        <Box my="5">
          <Text
            fontSize={{ base: '22px', lg: '36px' }}
            fontWeight="bold"
            textTransform="uppercase"
            my="5"
          >
            Klamby on London Fashion Week 2022
          </Text>
          <iframe
            width="100%"
            height="550px"
            src="https://www.youtube.com/embed/kiAtO5pWz6M"
            title="SELAYAR SERIES by KLAMBY Heritage @Bazaar Fashion Festival 2022"
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Box>
        <Box my={5}>
          <Text
            fontSize={{ base: '22px', lg: '36px' }}
            fontWeight="bold"
            textTransform="uppercase"
          >
            As Seen On
          </Text>
          <Wrap spacing="20" align="center" justify="center" my="5">
            <WrapItem>
              <Image
                h={{ base: '20px', lg: '50px' }}
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTJdp_FNL_A627SexDbAVR2rcRhUYFqzLrJOUEv3ivHM0_rI05h"
              />
            </WrapItem>
            <WrapItem>
              <Image
                h={{ base: '20px', lg: '50px' }}
                src="data:image/png;base64,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"
              />
            </WrapItem>
            <WrapItem>
              <Image
                h={{ base: '20px', lg: '50px' }}
                src="https://cdn0-production-assets-kly.akamaized.net/mobile_logos/841/original/038019700_1682647756-Fimela.png"
              />
            </WrapItem>
            <WrapItem>
              <Image
                h={{ base: '20px', lg: '50px' }}
                src="https://cdn.fortuneidn.com/logo/fortune_logo.svg"
              />
            </WrapItem>
            <WrapItem>
              <Image
                h={{ base: '20px', lg: '50px' }}
                src="https://harpersbazaar.co.id/assets/images/logo-bazaar.png"
              />
            </WrapItem>
            <WrapItem>
              <Image
                h={{ base: '20px', lg: '50px' }}
                src="https://cdn4.uzone.id/assets/uploads/partner/cosmopolitan/cosmopolitan-20170203030455.png"
              />
            </WrapItem>
            <WrapItem>
              <Image
                h={{ base: '20px', lg: '50px' }}
                src="https://upload.wikimedia.org/wikipedia/commons/a/a0/IDN_Media_Logo.png"
              />
            </WrapItem>
          </Wrap>
        </Box>
        <Box my="10">
          <Text
            fontSize={{ base: '22px', lg: '36px' }}
            fontWeight="bold"
            textTransform="uppercase"
            mb="5"
          >
            follow us on
            {page === 'signature' ? ' @wearingklamby' : ' @klambyheritage'}
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
