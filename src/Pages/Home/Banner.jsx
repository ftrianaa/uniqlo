import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import {
  AspectRatio,
  Box,
  Flex,
  Image,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import '../../CSS/styles.css';

export default function Banner(props) {
  const { images } = props;
  console.log(images, 'ni images');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    slides: {
      perView: 1,
    },
    loop: true,
  });
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <>
      {isDesktop ? (
        <Box className="navigation-wrapper">
          <Box ref={sliderRef} className="keen-slider">
            {images.map(item => (
              <Box p={2} className="keen-slider__slide ">
                <AspectRatio ratio={16 / 5}>
                  <Image src={item.src} alt={item.alt} objectFit="cover" />
                </AspectRatio>
              </Box>
            ))}
          </Box>
        </Box>
      ) : (
        <Box>
          {images.map(item => (
            <Flex p={2}>
              <Image src={item.src} alt={item.alt} w="150px" />
              <Box pl={3}>
                <Text fontWeight="bold" fontSize="15px">
                  {item.title}
                </Text>
                <Text fontSize="15px">{item.desc}</Text>
              </Box>
            </Flex>
          ))}
        </Box>
      )}
    </>
  );
}
