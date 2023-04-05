import {
  Box,
  Grid,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';

import { Items } from '../Items/Items';
import { useNavigate } from 'react-router-dom';

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
            <Image src="https://im.uniqlo.com/global-cms/spa/res30e7c4091690753456c88b55cf3b6951fr.jpg" />
            <Text fontWeight="bold" mt="5">
              UT Attack on Titan Lengan Pendek
            </Text>
            <Text>
              Terinspirasi dari pertarungan hebat antara manusia dan Titan.
            </Text>
            <Text fontWeight="bold" fontSize="20px">
              Rp199.000
            </Text>
          </Box>

          <Box width="full">
            <Items />
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};
