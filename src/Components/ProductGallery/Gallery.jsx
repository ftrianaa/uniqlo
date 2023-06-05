import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { images } from './_data';
import {
  AspectRatio,
  Box,
  Flex,
  Image,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import '../../CSS/styles.css';

function ThumbnailPlugin(mainRef) {
  return slider => {
    function removeActive() {
      slider.slides.forEach(slide => {
        slide.classList.remove('active');
      });
    }
    function addActive(idx) {
      slider.slides[idx].classList.add('active');
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener('click', () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on('created', () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on('animationStarted', main => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

export default function Gallery() {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
  });
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 5,
      },
      loop: true,
    },
    [ThumbnailPlugin(instanceRef)]
  );
  // console.log(instanceRef, 'ini sider ref');
  return (
    <>
      <Box ref={sliderRef} className="keen-slider">
        {images.map(item => (
          <Box className={`keen-slider__slide`}>
            <AspectRatio ratio={6 / 5} maxH="50vh">
              <Image src={item.src} alt={item.title} />
            </AspectRatio>
          </Box>
        ))}
      </Box>
      <Box ref={thumbnailRef} className="keen-slider thumbnail">
        {images.map(item => (
          <Box className={`keen-slider__slide`}>
            <AspectRatio ratio={16 / 9}>
              <Image src={item.src} alt={item.title} />
            </AspectRatio>
          </Box>
        ))}
      </Box>
    </>
  );
}
