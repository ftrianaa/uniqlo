import {
  AspectRatio,
  Box,
  Circle,
  Flex,
  HStack,
  IconButton,
  Image,
  Skeleton,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import { Carousel, CarouselSlide, useCarousel } from './Carousel';
import { useNavigate } from 'react-router-dom';
import { products } from './_data';
import { ProductCard } from '../../Components/ProductCard/ProductCard';
export const Product = props => {
  const { images, aspectRatio = 2 / 3, rootProps } = props;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [ref, slider] = useCarousel({
    slideChanged: slider => setCurrentSlide(slider.track.details.rel),
  });
  const hasPrevious = currentSlide < images.length;
  const hasNext = currentSlide < images.length;
  const navigate = useNavigate();
  return (
    <Stack spacing="4" {...rootProps}>
      <Box
        position="relative"
        sx={{
          _hover: {
            '> button': {
              display: 'inline-flex',
            },
          },
        }}
      >
        <Carousel ref={ref}>
          {images.map((image, i) => (
            <CarouselSlide key={i}>
              <ProductCard product={image} />
            </CarouselSlide>
          ))}
        </Carousel>
        {/* {hasPrevious && (
          <CarouselIconButton
            pos="absolute"
            left="3"
            top="50%"
            transform="translateY(-50%)"
            onClick={() => slider.current?.prev()}
            icon={<IoChevronBackOutline />}
            aria-label="Previous Slide"
          />
        )}

        {hasNext && (
          <CarouselIconButton
            pos="absolute"
            right="3"
            top="50%"
            transform="translateY(-50%)"
            onClick={() => slider.current?.next()}
            icon={<IoChevronForwardOutline />}
            aria-label="Next Slide"
          />
        )}
        <HStack
          position="absolute"
          width="full"
          justify="center"
          bottom="0"
          py="4"
        >
          {images.map((_, index) => (
            <Circle
              key={index}
              size="2"
              bg={currentSlide === index ? 'white' : 'whiteAlpha.400'}
            />
          ))}
        </HStack> */}
      </Box>
    </Stack>
  );
};
// const CarouselIconButton = props => (
//   <IconButton
//     display="none"
//     fontSize="lg"
//     isRound
//     boxShadow="base"
//     bg={useColorModeValue('white', 'gray.800')}
//     _hover={{
//       bg: useColorModeValue('gray.100', 'gray.700'),
//     }}
//     _active={{
//       bg: useColorModeValue('gray.200', 'gray.600'),
//     }}
//     _focus={{
//       boxShadow: 'inerhit',
//     }}
//     _focusVisible={{
//       boxShadow: 'outline',
//     }}
//     {...props}
//   />
// );
