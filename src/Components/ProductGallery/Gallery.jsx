import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { images } from './_data';
import { AspectRatio, Box, Flex, Image, Text } from '@chakra-ui/react';
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
      spacing: 15,
    },
    loop: true,
  });
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: images.length,
        spacing: 10,
        origin: 'center',
      },
      vertical: true,
      loop: true,
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <>
      <Flex>
        <Box w="80%">
          <div className="navigation-wrapper">
            <div ref={sliderRef} className="keen-slider">
              {images.map(item => (
                <Box p={2} className="keen-slider__slide ">
                  <AspectRatio ratio={4 / 3}>
                    <Image src={item.src} alt={item.title} />
                  </AspectRatio>
                </Box>
              ))}
            </div>

            {loaded && instanceRef.current && (
              <>
                <Arrow
                  left
                  onClick={e =>
                    e.stopPropagation() || instanceRef.current?.prev()
                  }
                  disabled={currentSlide === 0}
                />

                <Arrow
                  onClick={e =>
                    e.stopPropagation() || instanceRef.current?.next()
                  }
                  disabled={
                    currentSlide ===
                    instanceRef.current.track.details.slides.length - 1
                  }
                />
              </>
            )}
          </div>
        </Box>
        <Box w="20%">
          <div ref={thumbnailRef} className="keen-slider thumbnail">
            {images.map(item => (
              <Box className="keen-slider__slide ">
                <AspectRatio ratio={4 / 3}>
                  <Image src={item.src} alt={item.title} />
                </AspectRatio>
              </Box>
            ))}
          </div>
        </Box>
      </Flex>
      {/* {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map(idx => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={'dot' + (currentSlide === idx ? ' active' : '')}
              ></button>
            );
          })}
        </div>
      )} */}
    </>
  );
}

function Arrow(props) {
  const disabeld = props.disabled ? ' arrow--disabled' : '';
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? 'arrow--left' : 'arrow--right'
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
