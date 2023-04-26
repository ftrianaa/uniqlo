import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { Items } from './data';
import { Box, Image, Text } from '@chakra-ui/react';
import '../../CSS/styles.css';

import { products } from './data';
import { ProductCard } from './ProductCard';
import { useNavigate } from 'react-router-dom';
export default function ProductCarousel() {
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
    breakpoints: {
      '(max-width: 767px)': {
        slides: {
          perView: 2,
          spacing: 1,
        },
      },
      '(min-width: 768px)': {
        slides: {
          perView: 4,
          spacing: 5,
        },
      },
    },

    loop: true,
  });
  const navigate = useNavigate();
  return (
    <>
      <Box className="navigation-wrapper">
        <Box ref={sliderRef} className="keen-slider">
          {products.map(product => (
            <Box
              className="keen-slider__slide"
              onClick={() => navigate('/products/baju')}
              cursor="pointer"
            >
              <ProductCard key={product.id} product={product} />
            </Box>
          ))}
        </Box>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={e => e.stopPropagation() || instanceRef.current?.prev()}
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={e => e.stopPropagation() || instanceRef.current?.next()}
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </Box>
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
