import { Box, Divider, Flex, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Child = () => {
  const navigate = useNavigate();

  return (
    // <Box fontSize="14px" px="20px">
    <Flex gap={'20px'} fontSize="14px" px="20px" w="94.5vw">
      <Box flex={1} display={'flex'} flexDirection={'column'} gap={'10px'}>
        <Text fontSize="16px" textTransform="uppercase" fontWeight="bold">
          ATASAN
        </Text>
        <Text onClick={() => navigate('/child/shirt')} cursor="pointer">
          Koleksi Atasan
        </Text>
        <Text onClick={() => navigate('/child/shirt')} cursor="pointer">
          T-Shirt Lengan Pendek
        </Text>
        <Text onClick={() => navigate('/child/shirt')} cursor="pointer">
          T-Shirt Lengan Panjang
        </Text>
        <Text onClick={() => navigate('/child/shirt')} cursor="pointer">
          Atasan Crop
        </Text>
        <Text onClick={() => navigate('/child/shirt')} cursor="pointer">
          Koleksi Sweat & Jaket Hoodie
        </Text>
        <Text onClick={() => navigate('/child/shirt')} cursor="pointer">
          Cardigan
        </Text>
        <Text onClick={() => navigate('/child/shirt')} cursor="pointer">
          Sweater
        </Text>
        <Text fontSize="16px" textTransform="uppercase" fontWeight="bold">
          GAUN
        </Text>
        <Text onClick={() => navigate('/child/shirt')} cursor="pointer">
          Gaun
        </Text>
        <Text fontSize="16px" textTransform="uppercase" fontWeight="bold">
          modest wear
        </Text>
        <Text onClick={() => navigate('/child/shirt')} cursor="pointer">
          modest wear
        </Text>
      </Box>
      <Box flex={1} display={'flex'} flexDirection={'column'} gap={'10px'}>
        <Text fontSize="16px" textTransform="uppercase" fontWeight="bold">
          luaran
        </Text>
        <Text onClick={() => navigate('/child/shirt')} cursor="pointer">
          Bratop
        </Text>
        <Text onClick={() => navigate('/child/shirt')} cursor="pointer">
          UT(Graphic T-Shirt)
        </Text>
        <Text onClick={() => navigate('/child/shirt')} cursor="pointer">
          Koleksi Sweat & Jaket Hoodie
        </Text>
        <Text onClick={() => navigate('/child/shirt')} cursor="pointer">
          Kemeja & Blus (Lengan Pendek)
        </Text>
        <Text onClick={() => navigate('/child/shirt')} cursor="pointer">
          Kemeja & Blus (Lengan Panjang)
        </Text>
        <Text onClick={() => navigate('/child/shirt')} cursor="pointer">
          Cardigan
        </Text>
        <Text onClick={() => navigate('/child/shirt')} cursor="pointer">
          Sweater
        </Text>
        <Text></Text>

        <Text fontSize="16px" textTransform="uppercase" fontWeight="bold">
          dalaman
        </Text>
        <Text onClick={() => navigate('/child/shirt')} cursor="pointer">
          koleksi loungewear
        </Text>
        <Text onClick={() => navigate('/child/shirt')} cursor="pointer">
          piyama
        </Text>
        <Text onClick={() => navigate('/child/shirt')} cursor="pointer">
          sandal rumah
        </Text>

        <Text fontSize="16px" textTransform="uppercase" fontWeight="bold">
          GAUN
        </Text>
        <Text onClick={() => navigate('/child/shirt')} cursor="pointer">
          Gaun
        </Text>
      </Box>

      <Box flex={1} display={'flex'} flexDirection={'column'} gap={'10px'}>
        <Text fontSize="16px" textTransform="uppercase" fontWeight="bold">
          bawahan
        </Text>
        <Text onClick={() => navigate('/child/shirt')} cursor="pointer">
          Koleksi Atasan
        </Text>
        <Text onClick={() => navigate('/child/shirt')} cursor="pointer">
          T-Shirt Lengan Pendek
        </Text>
        <Text onClick={() => navigate('/child/shirt')} cursor="pointer">
          Koleksi Sweat & Jaket Hoodie
        </Text>
        <Text onClick={() => navigate('/child/shirt')} cursor="pointer">
          Kemeja & Blus (Lengan Pendek)
        </Text>
        <Text onClick={() => navigate('/child/shirt')} cursor="pointer">
          Kemeja & Blus (Lengan Panjang)
        </Text>
        <Text onClick={() => navigate('/child/shirt')} cursor="pointer">
          Cardigan
        </Text>
        <Text onClick={() => navigate('/child/shirt')} cursor="pointer">
          Sweater
        </Text>
        <Text></Text>

        <Text fontSize="16px" textTransform="uppercase" fontWeight="bold">
          GAUN
        </Text>
        <Text onClick={() => navigate('/child/shirt')} cursor="pointer">
          Gaun
        </Text>

        <Text fontSize="16px" textTransform="uppercase" fontWeight="bold">
          GAUN
        </Text>
        <Text onClick={() => navigate('/child/shirt')} cursor="pointer">
          Gaun
        </Text>
      </Box>
      <Box flex={1} display={'flex'} flexDirection={'column'} gap={'10px'}>
        <Text fontSize="16px" textTransform="uppercase" fontWeight="bold">
          GAUN
        </Text>
        <Text onClick={() => navigate('/child/shirt')} cursor="pointer">
          Gaun
        </Text>

        <Text fontSize="16px" textTransform="uppercase" fontWeight="bold">
          sport utility wear
        </Text>
        <Text onClick={() => navigate('/child/shirt')} cursor="pointer">
          {' '}
          sport utility wear
        </Text>
      </Box>
      <Divider orientation="vertical" h="80vh" />
      <Box flex={1.5} display={'flex'} flexDirection={'column'} gap={'10px'}>
        <Text fontSize="16px" textTransform="uppercase" fontWeight="bold">
          Featured
        </Text>
        <Text onClick={() => navigate('/child/shirt')} cursor="pointer">
          New Arrivals
        </Text>
        <Text onClick={() => navigate('/child/shirt')} cursor="pointer">
          Limited Offers
        </Text>
        <Text onClick={() => navigate('/child/shirt')} cursor="pointer">
          Value Buy
        </Text>
        <Text onClick={() => navigate('/child/shirt')} cursor="pointer">
          Coming Soon
        </Text>
        <Text onClick={() => navigate('/child/shirt')} cursor="pointer">
          Featured News
        </Text>
        <Text onClick={() => navigate('/child/shirt')} cursor="pointer">
          UT Graphic T-Shirts
        </Text>
        <Text onClick={() => navigate('/child/shirt')} cursor="pointer">
          Styling Book
        </Text>
        <Text onClick={() => navigate('/child/shirt')} cursor="pointer">
          About LifeWear
        </Text>
        <Text onClick={() => navigate('/child/shirt')} cursor="pointer">
          Extra size (Online exclusive)
        </Text>
        <Text onClick={() => navigate('/child/shirt')} cursor="pointer">
          Pembelian Juplah Besar
        </Text>

        <Text fontSize="16px" textTransform="uppercase" fontWeight="bold">
          Kirim Kado
        </Text>
        <Text onClick={() => navigate('/child/shirt')} cursor="pointer">
          Special collaboration
        </Text>
        <Text onClick={() => navigate('/child/shirt')} cursor="pointer">
          UNIQLO and MARNI
        </Text>

        <Text fontSize="16px" textTransform="uppercase" fontWeight="bold">
          Browse
        </Text>
        <Text onClick={() => navigate('/child/shirt')} cursor="pointer">
          {' '}
          Koleksi Pria
        </Text>
      </Box>
    </Flex>
    // </Box>
  );
};

export default Child;
