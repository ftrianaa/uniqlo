import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Heading,
  useColorModeValue as mode,
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import ProductCarousel from '../../Components/ProductCarousel/ProductCarousel';
import { ProductGallery } from '../../Components/ProductGallery/ProductGallery';

const Products = () => {
  const navigate = useNavigate();
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <>
      <Header />
      <Container bgColor="white" px={{ base: 5, md: 10, xl: 20 }}>
        {isDesktop ? (
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
              <BreadcrumbLink href="#">Product</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        ) : (
          <></>
        )}

        <ProductGallery />

        <Box mb="10">
          <Heading
            textTransform="uppercase"
            fontSize={{ base: '22px', lg: '32px' }}
            fontWeight="bold"
          >
            baru saja dilihat
          </Heading>
          <ProductCarousel />
        </Box>
      </Container>

      <Footer />
    </>
  );
};

export default Products;
