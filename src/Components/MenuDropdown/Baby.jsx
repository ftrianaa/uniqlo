import { Box, Divider, Flex, Text } from '@chakra-ui/react';

const Baby = () => {
  return (
    <Box width={'100%%'} fontSize="14px" px="20px">
      <Flex gap={'20px'}>
        <Box flex={1} display={'flex'} flexDirection={'column'} gap={'10px'}>
          <Text fontSize="16px" textTransform="uppercase" fontWeight="bold">
            newborn (6-18 bulan)
          </Text>
          <Text>Koleksi Atasan</Text>
          <Text>T-Shirt Lengan Pendek</Text>
          <Text>T-Shirt Lengan Panjang</Text>
          <Text>Atasan Crop</Text>
          <Text>Koleksi Sweat & Jaket Hoodie</Text>
          <Text>Cardigan</Text>
          <Text>Sweater</Text>
          <Text fontSize="16px" textTransform="uppercase" fontWeight="bold">
            GAUN
          </Text>
          <Text>Gaun</Text>
          <Text fontSize="16px" textTransform="uppercase" fontWeight="bold">
            modest wear
          </Text>
          <Text>modest wear</Text>
        </Box>
        <Box flex={1} display={'flex'} flexDirection={'column'} gap={'10px'}>
          <Text fontSize="16px" textTransform="uppercase" fontWeight="bold">
            newborn (18-24 bulan)
          </Text>
          <Text>Bratop</Text>
          <Text>UT(Graphic T-Shirt)</Text>
          <Text>Koleksi Sweat & Jaket Hoodie</Text>
          <Text>Kemeja & Blus (Lengan Pendek)</Text>
          <Text>Kemeja & Blus (Lengan Panjang)</Text>
          <Text>Cardigan</Text>
          <Text>Sweater</Text>
          <Text></Text>

          <Text fontSize="16px" textTransform="uppercase" fontWeight="bold">
            dalaman
          </Text>
          <Text>koleksi loungewear</Text>
          <Text>piyama</Text>
          <Text>sandal rumah</Text>

          <Text fontSize="16px" textTransform="uppercase" fontWeight="bold">
            GAUN
          </Text>
          <Text>Gaun</Text>
        </Box>

        <Box flex={1} display={'flex'} flexDirection={'column'} gap={'10px'}>
          <Text fontSize="16px" textTransform="uppercase" fontWeight="bold">
            toddler (3-4 tahun)
          </Text>
          <Text>Koleksi Atasan</Text>
          <Text>T-Shirt Lengan Pendek</Text>
          <Text>Koleksi Sweat & Jaket Hoodie</Text>
          <Text>Kemeja & Blus (Lengan Pendek)</Text>
          <Text>Kemeja & Blus (Lengan Panjang)</Text>
          <Text>Cardigan</Text>
          <Text>Sweater</Text>
          <Text></Text>

          <Text fontSize="16px" textTransform="uppercase" fontWeight="bold">
            GAUN
          </Text>
          <Text>Gaun</Text>

          <Text fontSize="16px" textTransform="uppercase" fontWeight="bold">
            GAUN
          </Text>
          <Text>Gaun</Text>
        </Box>
        <Box flex={1} display={'flex'} flexDirection={'column'} gap={'10px'}>
          <Text fontSize="16px" textTransform="uppercase" fontWeight="bold">
            GAUN
          </Text>
          <Text>Gaun</Text>

          <Text fontSize="16px" textTransform="uppercase" fontWeight="bold">
            sport utility wear
          </Text>
          <Text> sport utility wear</Text>
        </Box>
        <Divider orientation="vertical" h="80vh" ml="95px" mr="50px" />
        <Box flex={1.5} display={'flex'} flexDirection={'column'} gap={'10px'}>
          <Text fontSize="16px" textTransform="uppercase" fontWeight="bold">
            Featured
          </Text>
          <Text>New Arrivals</Text>
          <Text>Limited Offers</Text>
          <Text>Value Buy</Text>
          <Text>Coming Soon</Text>
          <Text>Featured News</Text>
          <Text>UT Graphic T-Shirts</Text>
          <Text>Styling Book</Text>
          <Text>About LifeWear</Text>
          <Text>Extra size (Online exclusive)</Text>
          <Text>Pembelian Jumlah Besar</Text>

          <Text fontSize="16px" textTransform="uppercase" fontWeight="bold">
            Kirim Kado
          </Text>
          <Text>Special collaboration</Text>
          <Text>UNIQLO and MARNI</Text>

          <Text fontSize="16px" textTransform="uppercase" fontWeight="bold">
            Browse
          </Text>
          <Text>Koleksi Pria</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Baby;
