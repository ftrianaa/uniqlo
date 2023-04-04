import { Box, SimpleGrid } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { ProductCard } from './ProductCard';
import { products } from './_data';

export const Items = () => {
  const navigate = useNavigate();
  return (
    <Box onClick={() => navigate('/products/baju')} cursor="pointer">
      <SimpleGrid
        columns={{
          base: 1,
          sm: 2,
          md: 3,
          lg: 4,
        }}
        gap={{
          base: '8',
          lg: '10',
        }}
      >
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </Box>
  );
};
