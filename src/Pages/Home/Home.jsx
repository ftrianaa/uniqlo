import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';

import { AspectRatio, Box, Heading, Text } from '@chakra-ui/react';
import { images, imageBanner, products, Items } from './_data';
import { Gallery } from './Gallery';
import AppBenefits from '../../Components/AppBenefits/AppBenefits';
import 'keen-slider/keen-slider.min.css';
import './styles.css';
import { Slider } from '../../Components/Slider/Slider';
import ProductCarousel from '../../Components/ProductCarousel/ProductCarousel';
import Banner from './Banner';
import { Product } from './Product';
import Topics from './Topics';
// import Product from './Product';
// console.log(images, 'ini imageesss');
const WheelControls = slider => {
  let touchTimeout;
  let position;
  let wheelActive;

  function dispatch(e, name) {
    position.x -= e.deltaX;
    position.y -= e.deltaY;
    slider.container.dispatchEvent(
      new CustomEvent(name, {
        detail: {
          x: position.x,
          y: position.y,
        },
      })
    );
  }

  function wheelStart(e) {
    position = {
      x: e.pageX,
      y: e.pageY,
    };
    dispatch(e, 'ksDragStart');
  }

  function wheel(e) {
    dispatch(e, 'ksDrag');
  }

  function wheelEnd(e) {
    dispatch(e, 'ksDragEnd');
  }

  function eventWheel(e) {
    e.preventDefault();
    if (!wheelActive) {
      wheelStart(e);
      wheelActive = true;
    }
    wheel(e);
    clearTimeout(touchTimeout);
    touchTimeout = setTimeout(() => {
      wheelActive = false;
      wheelEnd(e);
    }, 50);
  }

  slider.on('created', () => {
    slider.container.addEventListener('wheel', eventWheel, {
      passive: false,
    });
  });
};

export const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
      loop: false,
      rubberband: false,
      vertical: true,
    },
    [WheelControls]
  );
  // const [sliderRef] = useKeenSlider(
  //   {
  //     loop: false,
  //     rubberband: false,
  //     vertical: true,
  //   },
  //   [WheelControls]
  // );

  return (
    <>
      {/* <Box
        maxW="3xl"
        mx="auto"
        px={{
          base: '4',
          md: '8',
          lg: '12',
        }}
        py={{
          base: '6',
          md: '8',
          lg: '12',
        }}
      > */}
      {/* <Gallery images={images} /> */}
      <Box className="navigation-wrapper">
        <Box ref={sliderRef} className="keen-slider" style={{ height: '73vh' }}>
          <Box className="keen-slider__slide ">
            <Text
              textTransform="uppercase"
              fontSize={{ base: '22x', lg: '33px' }}
              fontWeight="bold"
              textAlign="center"
            >
              Koleksi Terbaru
            </Text>
            <Gallery images={images} />
          </Box>
          <Box className="keen-slider__slide ">
            <Text
              textTransform="uppercase"
              fontSize={{ base: '22px', lg: '33px' }}
              fontWeight="bold"
              textAlign="center"
            >
              Best seller
            </Text>
            <AspectRatio ratio={16 / 5}>
              <Banner images={imageBanner} />
            </AspectRatio>
          </Box>
          <Box className="keen-slider__slide">
            <Text
              textTransform="uppercase"
              fontSize={{ base: '18px', lg: '33px' }}
              fontWeight="bold"
              textAlign="center"
            >
              Koleksi Musim Panas 2022
            </Text>
            <Product images={products} />
          </Box>
          <Box className="keen-slider__slide ">
            <Text
              textTransform="uppercase"
              fontSize={{ base: '22x', lg: '33px' }}
              fontWeight="bold"
              textAlign="center"
            >
              Topics
            </Text>
            <Topics Items={Items} />
          </Box>
        </Box>
        {loaded && instanceRef.current && (
          <Box className="dotz">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map(idx => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={'dotx' + (currentSlide === idx ? ' active' : '')}
                ></button>
              );
            })}
          </Box>
        )}
      </Box>
      {/* {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )} */}
      {/* </Box> */}

      <Box bgColor="white" pb="4">
        <Heading
          fontWeight="bold"
          fontSize="36px"
          textTransform="uppercase"
          mx="4"
        >
          app benefits
        </Heading>
        <AppBenefits />
      </Box>
      {/* </Box> */}
    </>
  );
};
