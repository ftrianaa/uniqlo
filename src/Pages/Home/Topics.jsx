import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { Box, Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';
import '../../CSS/styles.css';

export default function Topics(props) {
  const { Items } = props;
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
      perView: 4,
      spacing: 15,
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
            {Items.map(item => (
              <Box p={2} className="keen-slider__slide ">
                <Image src={item.img} alt={item.title} />
                <Text fontWeight="bold" fontSize="18px">
                  {item.title}
                </Text>
                <Text fontSize="16px">{item.desc}</Text>
              </Box>
            ))}
          </Box>
          {/* {loaded && instanceRef.current && (
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
          )} */}
        </Box>
      ) : (
        <Box>
          {Items.map(item => (
            <Flex p={2}>
              <Image src={item.img} alt={item.title} w="150px" />
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
      {/* {loaded && instanceRef.current && (
        <Box className="dots">
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
        </Box>
      )} */}
    </>
  );
}

// function Arrow(props) {
//   const disabeld = props.disabled ? ' arrow--disabled' : '';
//   return (
//     <svg
//       onClick={props.onClick}
//       className={`arrow ${
//         props.left ? 'arrow--left' : 'arrow--right'
//       } ${disabeld}`}
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//     >
//       {props.left && (
//         <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
//       )}
//       {!props.left && (
//         <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
//       )}
//     </svg>
//   );
// }
