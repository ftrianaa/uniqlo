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
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import { wishlist } from './data';
import { FcLike } from 'react-icons/fc';
const Wishlist = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Container bgColor="white" px="20">
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

        <Box border="1px solid #dadada" p="28px 20px">
          <Text>{wishlist.length} Produk</Text>

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
                <Box textTransform="capitalize" ml={5}>
                  <Box>
                    <Text fontWeight="bold">{item.title}</Text>
                  </Box>
                  <Box my="5">
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
              {wishlist.length > 1 && index < wishlist.length ? (
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
