import { Box, Grid, Image, Text } from '@chakra-ui/react';

import { Items } from '../Items/Items';
import { useNavigate } from 'react-router-dom';
import Img8 from '../../assets/products/img8.png';

export const MenuGallery = () => {
  const navigate = useNavigate();
  return (
    <Box maxW="7xl" mx="auto">
      <Box>
        <Grid
          templateColumns={{
            base: '1fr',
            md: '320px 1fr',
          }}
          gap="8"
        >
          <Box onClick={() => navigate('/products/baju')} cursor="pointer">
            <Image src={Img8} />
            <Text
              fontWeight="bold"
              mt="5"
              fontSize={{ base: '15px', lg: '16px' }}
            >
              UT Attack on Titan Lengan Pendek
            </Text>
            <Text fontSize={{ base: '15px', lg: '16px' }}>
              Terinspirasi dari pertarungan hebat antara manusia dan Titan.
            </Text>
            <Text fontWeight="bold" fontSize={{ base: '15px', lg: '20px' }}>
              Rp199.000
            </Text>
          </Box>

          <Box width={'100%'}>
            <Items />
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};
