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
            <BreadcrumbLink href="#">Member</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Heading textTransform="uppercase" fontSize="36px">
          keanggotaan
        </Heading>
        <Flex>
          <Box w="30%">
            <SideMenuMember />
          </Box>
          <Box w="70%" border="1px solid #7d7d7d" p="5">
            <Outlet />
          </Box>
        </Flex>
      </Container>
      <Footer />
    </>
  );
};

export default Member;
