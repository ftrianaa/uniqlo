import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Stack,
  Tab,
  TabList,
  Tabs,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';

const Coupon = () => {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <>
      {isDesktop ? (
        <>
          <Box>
            <Text textTransform="uppercase" fontSize="32px" fontWeight="bold">
              Kupon
            </Text>
          </Box>
          <Text my="3">Kupon Toko Online | 0 Kupon yang Tersedia</Text>
          <Text color="#7d7d7d">
            Kupon toko online hanya dapat ditebus selama pembayaran.
          </Text>
          <Text my="3">Tidak ada kupon.</Text>
          <Divider />
          <Text my="3">Kupon Toko Retail | 0 Kupon yang Tersedia</Text>
          <Text color="#7d7d7d">
            Kupon toko retail hanya dapat ditukar di dalam toko.
          </Text>
          <Text my="3">Tidak ada kupon.</Text>
        </>
      ) : (
        <Box bgColor="white">
          <Box as="section" pt="5">
            <Stack spacing="16">
              <Tabs size="lg" variant="with-line">
                <TabList>
                  <Flex align="center" w="50%" justify="center">
                    <Tab
                      textTransform="uppercase"
                      fontSize="15px"
                      fontWeight="bold"
                      w="100%"
                      textAlign="center"
                    >
                      <Text textAlign="center" w="100%">
                        toko retail
                      </Text>
                    </Tab>
                  </Flex>
                  <Flex align="center" w="50%" justify="center">
                    <Tab
                      textTransform="uppercase"
                      fontSize="15px"
                      fontWeight="bold"
                      w="100%"
                      textAlign="center"
                    >
                      <Text textAlign="center" w="100%">
                        toko online
                      </Text>
                    </Tab>
                  </Flex>
                </TabList>
              </Tabs>
            </Stack>
          </Box>
          <Box>
            <Flex pt="5" px={{ base: '5', md: '10' }}>
              <Text fontWeight="bold" textTransform="uppercase">
                kupon yang tersedia
              </Text>
              <Text mx="3">(0)</Text>
            </Flex>
            <Text py="5" px={{ base: '5', md: '10' }}>
              Tidak ada kupon.
            </Text>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Coupon;
