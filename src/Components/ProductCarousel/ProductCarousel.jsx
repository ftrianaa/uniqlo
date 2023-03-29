import { ProductCard } from './ProductCard';
import { products } from './_data';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export const ProductCarousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Slider>
  );
};
