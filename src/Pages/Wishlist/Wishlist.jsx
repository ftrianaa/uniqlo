import {
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

const Wishlist = () => {
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
            <BreadcrumbLink href="#">Wishlist</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Heading fontSize="36px" textTransform="uppercase" textAlign="center">
          Wishlist
        </Heading>

        <Box border="1px solid #dadada" p="28px 20px">
          <Text>{wishlist.length} product</Text>

          {wishlist.map((item, index) => (
            <>
              <Flex key={index} m="20px 0">
                <Image src={item.src} alt={item.title} w="150px" />
                <Box textTransform="capitalize" ml={5}>
                  <Text fontWeight="bold">{item.title}</Text>
                  <Text color="#7d7d7d">kode produk: {item.codeItem}</Text>
                  <Text>Warna: {item.color}</Text>
                  <Text>ukuran: {item.size}</Text>
                  <Text color="#7d7d7d">{item.notes}</Text>
                  <Text fontWeight="bold">Rp{item.price}</Text>
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
