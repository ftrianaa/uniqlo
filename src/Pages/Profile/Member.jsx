import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Flex,
  Heading,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import SideMenuMember from './SideMenuMember';

const Member = () => {
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
            <BreadcrumbLink href="#">Member</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Heading
          textTransform="uppercase"
          fontSize="36px"
          fontWeight="bold"
          my="5"
        >
          keanggotaan
        </Heading>
        <Flex>
          <Box w="25%">
            <SideMenuMember />
          </Box>
          <Box w="75%" border="1px solid rgb(224, 224, 224)" p="5" mb="10">
            <Outlet />
          </Box>
        </Flex>
      </Container>
      <Footer />
    </>
  );
};

export default Member;
