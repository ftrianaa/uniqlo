import {
  AspectRatio,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Divider,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  useColorModeValue as mode,
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import { wishlist } from './data';
import { FcLike } from 'react-icons/fc';
const Wishlist = () => {
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
            Wishlist
          </Text>
        </Box>
      ) : (
        <></>
      )}
      <Container bgColor="white" px={{ base: 5, md: 10, lg: 20 }}>
        {isDesktop ? (
          <>
            <Breadcrumb
              fontSize="sm"
              fontWeight="medium"
              color={mode('gray.600', 'gray.400')}
              separator={'/'}
            >
              <BreadcrumbItem>
                <BreadcrumbLink onClick={() => navigate('/')}>
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Wishlist</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Heading
              fontSize="36px"
              textTransform="uppercase"
              fontWeight="bold"
              textAlign="left"
              py="8"
            >
              Wish list
            </Heading>
          </>
        ) : (
          <></>
        )}

        <Box
          border={{ base: 'none', lg: '1px solid #dadada' }}
          p={{ base: 'none', lg: '28px 20px' }}
        >
          <Text
            pt={{ base: 5, lg: 0 }}
            fontWeight={{ base: 'bold', lg: 'normal' }}
            textTransform={{ base: 'uppercase', lg: 'none' }}
          >
            {wishlist.length} Produk
          </Text>

          {wishlist.map((item, index) => (
            <>
              <Flex
                key={index}
                m="20px 0"
                onClick={() => navigate('/products/5')}
                cursor="pointer"
              >
                <Box position="relative" className="group">
                  <AspectRatio ratio={5 / 5} width="190px">
                    <Box>
                      <Box
                        position="absolute"
                        zIndex="1"
                        right="10px"
                        top="10px"
                      >
                        <FcLike size="24px" />
                      </Box>
                      <Image src={item.src} alt={item.title} w="190px" />
                    </Box>
                  </AspectRatio>
                </Box>
                <Box
                  textTransform="capitalize"
                  ml={5}
                  fontSize={['15px', '16px']}
                >
                  <Box>
                    <Text fontWeight="bold">{item.title}</Text>
                  </Box>
                  <Box my={{ base: 0, lg: 5 }}>
                    <Text color="#7d7d7d">kode produk: {item.codeItem}</Text>
                    <Text>Warna: {item.color}</Text>
                    <Text>ukuran: {item.size}</Text>
                    <Text color="#7d7d7d">{item.notes}</Text>
                  </Box>
                  <Box>
                    <Text fontWeight="bold">Rp{item.price}</Text>
                  </Box>
                </Box>
              </Flex>

              {isDesktop && wishlist.length > 1 && item.id < wishlist.length ? (
                <Divider />
              ) : (
                <></>
              )}
            </>
          ))}
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Wishlist;
