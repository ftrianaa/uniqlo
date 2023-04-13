import {
  AspectRatio,
  Box,
  Flex,
  HStack,
  Image,
  Skeleton,
  Stack,
  Tag,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Rating } from './Rating';
import { PriceTag } from './PriceTag';
import { useNavigate } from 'react-router-dom';
import { TbHeartPlus } from 'react-icons/tb';
import { ColorPicker } from '../ProductGallery/ColorPicker';
export const ProductCard = props => {
  const { product } = props;
  const navigate = useNavigate();
  // let colors = [];
  // product.color.map(item => colors.push(item));
  // console.log(colors, 'ini color');
  return (
    <Stack
      spacing="3"
      w={{ base: '100px', lg: '230px' }}
      onClick={() => navigate('/products/baju')}
      cursor="pointer"
    >
      <Box position="relative" className="group">
        <AspectRatio ratio={5 / 5} width={{ base: '110px', lg: '230px' }}>
          <Box>
            <Box position="absolute" zIndex="1" top="10px" right="10px">
              <TbHeartPlus size="24px" />
            </Box>
            <Image
              src={product.imageUrl}
              alt={product.name}
              draggable="false"
              fallback={<Skeleton />}
            />
          </Box>
        </AspectRatio>
      </Box>

      <Stack spacing="1">
        <ColorPicker options={product.colors} />
        <Flex
          justify="space-between"
          textTransform="uppercase"
          fontSize="13px"
          color="#ababab"
          fontWeight="bold"
          my="3"
        >
          <Text>{product.category}</Text>
          <Text>{product.size}</Text>
        </Flex>
        <Text fontWeight="bold" my="5">
          {product.name}
        </Text>
        <PriceTag
          currency={product.currency}
          price={product.price}
          priceProps={{
            fontWeight: 'bold',
            fontSize: 'sm',
            color: useColorModeValue('black', 'white'),
          }}
        />
        <HStack>
          <Rating defaultValue={product.rating} size="sm" />
          <Text
            fontWeight="medium"
            fontSize="sm"
            color={useColorModeValue('gray.800', 'gray.200')}
          >
            (12)
          </Text>
        </HStack>
      </Stack>
    </Stack>
  );
};
