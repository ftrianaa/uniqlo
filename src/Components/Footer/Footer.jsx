import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  IconButton,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
const Footer = () => {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <>
      <Box
        as="footer"
        role="contentinfo"
        px={{ base: 5, md: 10, xl: 20 }}
        bgColor="#f4f4f4"
      >
        {isDesktop ? (
          <>
            <Stack
              spacing="8"
              direction={{ base: 'column', md: 'row' }}
              justify="space-between"
              py={{ base: '12', md: '10' }}
            >
              {/* <Stack spacing={{ base: '6', md: '8' }} align="start"> */}
              {/* <Logo /> */}
              {/* <Text color="muted">Create beautiful websites remarkably fast.</Text> */}
              {/* </Stack> */}
              <Stack
                direction={{ base: 'column-reverse', md: 'column', lg: 'row' }}
                spacing={{ base: '12', md: '3' }}
              >
                <Stack direction="row" spacing="4">
                  <Stack spacing="4" minW="36" flex="1">
                    <Text fontSize="18px" fontWeight="semibold">
                      Tentang Klamby
                    </Text>
                    <Stack spacing="3" shouldWrapChildren>
                      <Button variant="link" fontSize="14px" fontWeight="400">
                        Informasi
                      </Button>
                      <Button variant="link" fontSize="14px" fontWeight="400">
                        Pencari Lokasi Toko
                      </Button>
                      <Button variant="link" fontSize="14px" fontWeight="400">
                        Pembelian Jumlah Besar
                      </Button>
                      <Button variant="link" fontSize="14px" fontWeight="400">
                        Layanan Alterasi
                      </Button>
                      <Button variant="link" fontSize="14px" fontWeight="400">
                        Layanan Kirim Kado
                      </Button>
                      <Button variant="link" fontSize="14px" fontWeight="400">
                        Live Station
                      </Button>
                    </Stack>
                  </Stack>
                  <Stack spacing="4" minW="36" flex="1">
                    <Text fontSize="18px" fontWeight="semibold">
                      Bantuan
                    </Text>
                    <Stack spacing="3" shouldWrapChildren>
                      <Text
                        variant="link"
                        fontSize="14px"
                        fontWeight="400"
                        cursor="pointer"
                      >
                        FAQ
                      </Text>
                      <Button variant="link" fontSize="14px" fontWeight="400">
                        Kebijakan Pengembalian
                      </Button>
                      <Button variant="link" fontSize="14px" fontWeight="400">
                        Kebijakan Privasi
                      </Button>
                      <Button variant="link" fontSize="14px" fontWeight="400">
                        Aksesibilitas
                      </Button>
                      <Button variant="link" fontSize="14px" fontWeight="400">
                        Hubungi Kami
                      </Button>
                    </Stack>
                  </Stack>
                  <Stack spacing="4" minW="36" flex="1">
                    <Text fontSize="18px" fontWeight="semibold">
                      Akun
                    </Text>
                    <Stack spacing="3" shouldWrapChildren>
                      <Button variant="link" fontSize="14px" fontWeight="400">
                        Membership
                      </Button>
                      <Button variant="link" fontSize="14px" fontWeight="400">
                        Profile
                      </Button>
                      <Button variant="link" fontSize="14px" fontWeight="400">
                        Kupon
                      </Button>
                    </Stack>
                  </Stack>
                  <Stack spacing="4" minW="36" flex="1">
                    <Text fontSize="18px" fontWeight="semibold">
                      Hubungi Kami
                    </Text>
                    <Stack spacing="3" shouldWrapChildren>
                      <Text variant="link" fontSize="14px" fontWeight="400">
                        Untuk Layanan Pengaduan
                      </Text>
                      <Text variant="link" fontSize="14px" fontWeight="400">
                        Konsumen KLAMBY Indonesia
                      </Text>
                      <Text variant="link" fontSize="14px" fontWeight="400">
                        (001) 80332160290 dan customersupport@klamby.co.id
                      </Text>
                      <Divider />
                      <Text variant="link" fontSize="14px" fontWeight="400">
                        Layanan Pengaduan Konsumen,
                      </Text>
                      <Text variant="link" fontSize="14px" fontWeight="400">
                        Direktorat Jenderal Perlindungan Konsumen dan Tertib
                        Niaga,
                      </Text>
                      <Text variant="link" fontSize="14px" fontWeight="400">
                        Kementerian Perdagangan Republik Indonesia,
                      </Text>
                      <Text variant="link" fontSize="14px" fontWeight="400">
                        0853-1111-1010 (WhatsApp)
                      </Text>
                    </Stack>
                  </Stack>
                  <Stack spacing="4" minW="36" flex="1">
                    <Text fontSize="18px" fontWeight="semibold">
                      E-Newsletter
                    </Text>
                    <Stack spacing="3" shouldWrapChildren>
                      <Text variant="link" fontSize="14px" fontWeight="400">
                        Daftar dan jadilah yang pertama mengetahui tentang
                        pendatang baru, promosi, acara di dalam toko, dan banyak
                        lagi.
                      </Text>
                      <Text
                        variant="link"
                        fontSize="14px"
                        fontWeight="bold"
                        textDecor="underline"
                      >
                        BERLANGGANAN SEKARANG
                      </Text>
                    </Stack>
                  </Stack>
                  <Stack spacing="4">
                    <Text fontSize="18px" fontWeight="semibold">
                      Akun Sosial KLAMBY
                    </Text>
                    <Stack spacing="4" maxW={{ lg: '360px' }}>
                      <ButtonGroup variant="ghost">
                        <Button
                          bgColor="grey"
                          w="40px"
                          h="40px"
                          borderRadius="0"
                        >
                          <IconButton
                            as="a"
                            href="#"
                            aria-label="Facebook"
                            icon={
                              <FaFacebookF fontSize="1.25rem" color="white" />
                            }
                          />
                        </Button>
                        <Button
                          bgColor="grey"
                          w="40px"
                          h="40px"
                          borderRadius="0"
                        >
                          <IconButton
                            as="a"
                            href="#"
                            aria-label="Twitte"
                            icon={
                              <FaTwitter fontSize="1.25rem" color="white" />
                            }
                          />
                        </Button>
                        <Button
                          bgColor="grey"
                          w="40px"
                          h="40px"
                          borderRadius="0"
                        >
                          <IconButton
                            as="a"
                            href="#"
                            aria-label="Instagram"
                            icon={
                              <FaInstagram fontSize="1.25rem" color="white" />
                            }
                          />
                        </Button>
                        <Button
                          bgColor="grey"
                          w="40px"
                          h="40px"
                          borderRadius="0"
                        >
                          <IconButton
                            as="a"
                            href="#"
                            aria-label="Youtube"
                            icon={
                              <FaYoutube fontSize="1.25rem" color="white" />
                            }
                          />
                        </Button>
                      </ButtonGroup>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Flex my="5">
              <Text>English</Text>
              <Text mx="2">|</Text>
              <Text fontWeight="bold">Bahasa Indonesia</Text>
            </Flex>
            <Divider />
            <Stack
              pt="8"
              pb="12"
              justify="space-between"
              direction={{ base: 'column-reverse', md: 'row' }}
              align="center"
            >
              {/* <Flex justify="space-between" align="center"> */}
              <Text fontSize="sm" color="#7d7d7d">
                HAK CIPTA &copy; WEARING KLAMBY SEMUA HAK DILINDUNGI
                UNDANG-UNDANG.
              </Text>
              <Flex color="#7d7d7d" justify="space-between">
                <Text fontSize="sm" px="2" textDecor="underline">
                  Ketentuan penggunaan
                </Text>
                <Text fontSize="sm" textDecor="underline">
                  Kebijakan privasi
                </Text>
              </Flex>
              {/* </Flex> */}
            </Stack>
          </>
        ) : (
          <Box my="10" fontSize="15px">
            <Box
              borderBottom="solid 1px #7d7d7d"
              py="5"
              borderTop="solid 2px black"
            >
              <Text fontWeight="bold" textTransform="uppercase">
                keanggotaan
              </Text>
            </Box>
            <Box borderBottom="solid 1px #ABABAB" py="5">
              <Text fontWeight="bold" textTransform="uppercase">
                pencari lokasi toko
              </Text>
            </Box>
            <Box borderBottom="solid 1px #ABABAB" py="5">
              <Text fontWeight="bold" textTransform="uppercase">
                pembelian jumlah besar
              </Text>
            </Box>
            <Box borderBottom="solid 1px #ABABAB" py="5">
              <Text fontWeight="bold" textTransform="uppercase">
                layanan alterasi
              </Text>
            </Box>
            <Box borderBottom="solid 1px #ABABAB" py="5">
              <Text fontWeight="bold" textTransform="uppercase">
                layanan kirim kado
              </Text>
            </Box>
            <Box borderBottom="solid 1px #ABABAB" py="5">
              <Text fontWeight="bold" textTransform="uppercase">
                live station
              </Text>
            </Box>
            <Box borderBottom="solid 1px #ABABAB" py="5">
              <Text fontWeight="bold" textTransform="uppercase">
                e-newsletter
              </Text>
            </Box>
            <Box borderBottom="solid 1px #ABABAB" py="5">
              <Text fontWeight="bold" textTransform="uppercase">
                kebijakan pengembalian
              </Text>
            </Box>
            <Box borderBottom="solid 1px #ABABAB" py="5">
              <Text fontWeight="bold" textTransform="uppercase">
                kebijakan privasi
              </Text>
            </Box>
            <Box borderBottom="solid 1px #ABABAB" py="5">
              <Text fontWeight="bold" textTransform="uppercase">
                persyaratan penggunaan
              </Text>
            </Box>
            <Box borderBottom="solid 1px #ABABAB" py="5">
              <Text fontWeight="bold" textTransform="uppercase">
                FAQ
              </Text>
            </Box>
            <Box borderBottom="solid 1px #ABABAB" py="5">
              <Text fontWeight="bold" textTransform="uppercase">
                informasi
              </Text>
            </Box>
            <Box borderBottom="solid 1px #ABABAB" py="5">
              <Text fontWeight="bold" textTransform="uppercase">
                Aksesibilitas
              </Text>
            </Box>
            <Box borderBottom="solid 1px #ABABAB" py="5">
              <Text fontWeight="bold" textTransform="uppercase">
                akun media sosial resmi
              </Text>
              <Stack spacing="4" maxW={{ lg: '360px' }}>
                <ButtonGroup variant="ghost">
                  <Button bgColor="grey" w="40px" h="40px" borderRadius="0">
                    <IconButton
                      as="a"
                      href="#"
                      aria-label="Facebook"
                      icon={<FaFacebookF fontSize="1.25rem" color="white" />}
                    />
                  </Button>
                  <Button bgColor="grey" w="40px" h="40px" borderRadius="0">
                    <IconButton
                      as="a"
                      href="#"
                      aria-label="Twitte"
                      icon={<FaTwitter fontSize="1.25rem" color="white" />}
                    />
                  </Button>
                  <Button bgColor="grey" w="40px" h="40px" borderRadius="0">
                    <IconButton
                      as="a"
                      href="#"
                      aria-label="Instagram"
                      icon={<FaInstagram fontSize="1.25rem" color="white" />}
                    />
                  </Button>
                  <Button bgColor="grey" w="40px" h="40px" borderRadius="0">
                    <IconButton
                      as="a"
                      href="#"
                      aria-label="Youtube"
                      icon={<FaYoutube fontSize="1.25rem" color="white" />}
                    />
                  </Button>
                </ButtonGroup>
              </Stack>
            </Box>
            <Box borderBottom="solid 1px #ABABAB" py="5">
              <Text fontWeight="bold" textTransform="uppercase">
                hubungi kami
              </Text>
            </Box>
            <Box borderBottom="solid 1px #ABABAB" py="5">
              <Flex>
                <Text>English</Text>
                <Text mx="2">|</Text>
                <Text fontWeight="bold">Bahasa Indonesia</Text>
              </Flex>
            </Box>
            <Box my="5">
              <Text fontSize="11px" color="#ababab">
                HAK CIPTA &copy; KLAMBY CO., LTD. SEMUA HAK DILINDUNGI
                UNDANG-UNDANG.
              </Text>
            </Box>
            <Box fontSize="15px">
              <Text>Hubungi kami</Text>
              <Text>Untuk Layanan Pengaduan </Text>
              <Text>Konsumen KLAMBY Indonesia</Text>
              <Text>(001) 80332160290 dan customersupport@klamby.co.id</Text>
              <Divider
                variant="dashed"
                bgColor="black"
                w="80%"
                fontWeight="20px"
                my="3"
              />{' '}
              <Text>Layanan Pengaduan Konsumen,</Text>
              <Text>
                Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga,
              </Text>
              <Text>Kementerian Perdagangan Republik Indonesia,</Text>
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Footer;
