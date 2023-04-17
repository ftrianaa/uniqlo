import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue as mode,
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import SideMenuMember from './SideMenuMember';
import { AiOutlineRight, AiOutlineUser } from 'react-icons/ai';

const Member = () => {
  const { pages } = useParams();
  // console.log(pages, 'ini page');
  const navigate = useNavigate();
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <>
      {isDesktop ? (
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
                <BreadcrumbLink onClick={() => navigate('/')}>
                  Home
                </BreadcrumbLink>
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
      ) : (
        <>
          <Box
            borderBottom="1px solid #dadada"
            px={{ base: 5, md: 10, lg: 20 }}
            py="2"
            bgColor="white"
            W="8xl"
          >
            <Flex
              height="4.5rem"
              align="center"
              mx="auto"
              justify="space-between"
            >
              <Image
                src="https://cdn.shopify.com/s/files/1/0608/6724/8340/files/Logo_klamby_baru_banget_140x@2x.png?v=1643345083"
                h="9"
                onClick={() => navigate('/')}
              />
              <Box>
                <Flex align="center" justify="center">
                  <AiOutlineUser cursor="pointer" />
                </Flex>
                <Text
                  fontWeight="bold"
                  textTransform="uppercase"
                  fontSize="13px"
                >
                  akun
                </Text>
              </Box>
            </Flex>
          </Box>

          <Box bgColor={'#f4f4f4'}>
            <Text
              fontSize="20px"
              textTransform="uppercase"
              fontWeight="bold"
              textAlign="left"
              p={5}
              px={{ base: 5, md: 10 }}
            >
              keanggotaan
            </Text>
          </Box>
          <Box bgColor="white">
            <Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                borderBottom="solid 1px #ababab"
                py="5"
              >
                <Text
                  textTransform="uppercase"
                  fontWeight="bold"
                  fontSize="16px"
                  mb="5"
                >
                  barcode keanggotaan
                </Text>
                <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL4AAABGCAMAAABFa97bAAAAHnRFWHRTb2Z0d2FyZQBid2lwLWpzLm1ldGFmbG9vci5jb21Tnbi0AAAB71BMVEX///8AAAD+/v79/f1UVFQvLy8nJyfNzc14eHhBQUEPDw84ODjh4eFHR0cEBAQYGBhfX1+xsbEQEBCSkpLj4+N+fn6qqqo1NTXi4uKGhob6+vrp6enMzMz4+Pi5ubmmpqZ8fHzIyMgHBwclJSXt7e3k5OQXFxfZ2dmQkJAuLi5eXl75+fktLS3u7u4MDAyBgYEiIiLT09O7u7sNDQ0SEhJtbW0JCQnCwsIICAgyMjICAgK0tLRgYGCRkZH8/PyDg4N5eXkoKCiioqIREREaGhrs7Ox6enoFBQXX19dMTExXV1fl5eXz8/PBwcF2dnYgICBhYWFPT082NjYdHR0+Pj7q6uo5OTmysrJxcXG/v7/Ly8uurq7a2tpiYmKdnZ2MjIykpKRZWVlmZmbHx8fv7+9/f38wMDBnZ2fw8PCAgIDx8fGCgoImJiYpKSmsrKzQ0NA6Ojre3t4sLCzo6Og9PT3Dw8MBAQHm5ua9vb1FRUXR0dFsbGxJSUkUFBSoqKgWFhZISEjKyspRUVFKSkq6urpSUlLJycm3t7f7+/tcXFyZmZkkJCQeHh739/fV1dU/Pz9OTk5aWlqzs7MVFRWgoKC+vr5paWmenp7c3NxYWFjg4OAODg6cnJxycnKTk5NGRkbr6+tNTU1ubm64uLiXl5fAbZ5AAAADU0lEQVR4nO2WB1MTQRSA911iMIVETyFUlaCIBoMYSoxUQUGICoSioGKNlWIh1ggWEBERRVEsWH+oub1LsldCkhnjjM67mbv93s7b974kuzchAIQIt/CMjJGZWBSJY5nx1rFzyputyEaxWCtia7Nd6Y36qI/6qI/6qI/6qI/6qI/6qI/6qI/6qI/6qI/6qI/6qI/6qI/6qI/6qI/6qI/6qI/6adT/89dfqI36iVqkszbqJ2qRztqon6hFOmujfqIW6az9j+v/ZxenN9DLnC/G20oz2PmmgzQ6QnlIWpOX7Yuuj+QrmYw+0ub4DlKvlC7dGvGvERTQsKgEdojzZeJ0K41aKJ+U1jTApsjyaL6CyT33Yw2eyX3hCbxVsryXpd02sTCf2oewmwqFcbODB0NsusYDdRTcXUzyFX64XkI2X7b2tt/VpsFVMLcQglkVM70+8mD8GnSk5J8FucKwCYq3M/oFbu9+ChzUMslXYUQiNl+2VmeEh0SDef4lscCYipleevhMyCAcSsF+PZjzhDFny1YS06+o9OwTyQd8T+1xafoSH9BJyObL1g7B/Whxloet8+QNTKmY6bXYzIWfocXk7S08nxMNYvpm8NRaKDmP0q3P0eAy9JPR6xr5Mb7pgOqJJxUqJuMlnqlg0wcVM71sn2bCz0pb8vqZkK1WIGRP1V5olnYt19tvgNMCnTd1c8QTWFU/C4DnwdGmZEJmAbzviJpjvZZhKf/bCmQmbZ8BZiZidUgdswcH4IwwXBBeO0ySln4flHNcrrgxWPY9h8wRe7BRp2C2V84EfQv9Slp/LWyIp1/P81H2gV0YAnDNYIDWGzWr6Fe6w6+merdfyZ1QGj7KSzCkYFmv3i89xeAvTFrfCBvj6rtLojwIZ4XhoviOtg6uou+iO9dmUjJPj2U+/bVZVvTi2uFn0vbEYNUxUURhlzP85TRAe6RkP289p/UZtfRvwR1CnoJRyQGYDj/fw7KCFb1W4Efy9sQkO+WSgtPlMOuLoaVDCDo6u8On75TaM47+eND6YNLrnVbyM2/w1WszVFfIWdaLkGz47kxB37yOjew7xbF8t7u6rPEA5cMuf9+xE0zSWKcqX8ZFd0OhyQI1D+jnYLFrXslsr/Cp6Iq78X8DCp6mFXIvA58AAAAASUVORK5CYII=" />
                <Text mt="5" px={{ base: '5', md: '10' }} fontSize="15px">
                  Silakan tunjukkan barcode keanggotaan Anda di kasir saat Anda
                  membeli barang.
                </Text>
              </Box>
              <Box>
                <Flex
                  justify="space-between"
                  align="center"
                  p="5"
                  borderBottom="solid 1px #ababab"
                  onClick={() => navigate('/member/details')}
                >
                  <Text textTransform="uppercase" fontWeight="bold">
                    profil
                  </Text>
                  <AiOutlineRight />
                </Flex>
                <Flex
                  justify="space-between"
                  align="center"
                  p="5"
                  borderBottom="solid 1px #ababab"
                  onClick={() => navigate('/member/coupon')}
                >
                  <Text textTransform="uppercase" fontWeight="bold">
                    kupon
                  </Text>
                  <AiOutlineRight />
                </Flex>
                <Flex
                  justify="space-between"
                  align="center"
                  p="5"
                  borderBottom="solid 1px #ababab"
                  onClick={() => navigate('/wishlist')}
                >
                  <Text textTransform="uppercase" fontWeight="bold">
                    wishlist
                  </Text>
                  <AiOutlineRight />
                </Flex>
                <Flex
                  justify="space-between"
                  align="center"
                  p="5"
                  borderBottom="solid 1px #ababab"
                  onClick={() => navigate('/member/purchase history')}
                >
                  <Text textTransform="uppercase" fontWeight="bold">
                    riwayat pembelian
                  </Text>
                  <AiOutlineRight />
                </Flex>
                <Flex
                  justify="space-between"
                  align="center"
                  p="5"
                  borderBottom="solid 1px #ababab"
                  onClick={() => navigate('/member/orders')}
                >
                  <Text textTransform="uppercase" fontWeight="bold">
                    riwayat pemesanan
                  </Text>
                  <AiOutlineRight />
                </Flex>
              </Box>
            </Box>
            <Box>
              <Box bgColor={'#f4f4f4'}>
                <Text
                  fontSize="20px"
                  textTransform="uppercase"
                  fontWeight="bold"
                  textAlign="left"
                  p={5}
                  px={{ base: 5, md: 10 }}
                >
                  pengaturan profil
                </Text>
              </Box>
              <Flex
                justify="space-between"
                align="center"
                p="5"
                borderBottom="solid 1px #ababab"
                onClick={() => navigate('/member/edit')}
              >
                <Text textTransform="uppercase" fontWeight="bold">
                  sunting profil
                </Text>
                <AiOutlineRight />
              </Flex>
              <Flex
                justify="space-between"
                align="center"
                p="5"
                borderBottom="solid 1px #ababab"
                onClick={() => navigate('/member/addresses')}
              >
                <Text textTransform="uppercase" fontWeight="bold">
                  buku alamat
                </Text>
                <AiOutlineRight />
              </Flex>
              <Flex
                justify="space-between"
                align="center"
                p="5"
                borderBottom="solid 1px #ababab"
                onClick={() => navigate('/member/edit password')}
              >
                <Text textTransform="uppercase" fontWeight="bold">
                  ubah kata sandi saya
                </Text>
                <AiOutlineRight />
              </Flex>
              <Flex
                justify="space-between"
                align="center"
                p="5"
                borderBottom="solid 1px #ababab"
                onClick={() => navigate('/member/wallets')}
              >
                <Text textTransform="uppercase" fontWeight="bold">
                  kartu kredit yang disimpan
                </Text>
                <AiOutlineRight />
              </Flex>
              <Flex
                justify="space-between"
                align="center"
                p="5"
                borderBottom="solid 1px #ababab"
                onClick={() => navigate('/member/unsubscribe')}
              >
                <Text textTransform="uppercase" fontWeight="bold">
                  pembatalan keanggotaan
                </Text>
                <AiOutlineRight />
              </Flex>
            </Box>
            <Box>
              <Box bgColor={'#f4f4f4'} h="5"></Box>
              <Box p="5" onClick={() => navigate('/login')}>
                <Text textTransform="uppercase" fontWeight="bold">
                  keluar
                </Text>
              </Box>
            </Box>
          </Box>

          <Box bgColor={'#f4f4f4'} px={{ base: '5', md: '10' }} py="5">
            <Flex borderY="solid 1px #ababab" py="5">
              <Text>English </Text>
              <Text mx="3">|</Text>
              <Text fontWeight="bold">Bahasa Indonesia</Text>
            </Flex>
            <Box mt="3">
              <Text
                textTransform="uppercase"
                fontSize="11px"
                fontWeight="normal"
                color="#ababab"
                textAlign="center"
              >
                HAK CIPTA © UNIQLO CO., LTD. SEMUA HAK DILINDUNGI UNDANG-UNDANG.
              </Text>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default Member;
