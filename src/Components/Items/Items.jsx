import { Box, SimpleGrid } from '@chakra-ui/react';

import { ProductCard } from '../ProductCard/ProductCard';
import { products } from './_data';

export const Items = () => {
  return (
    <Box>
      <SimpleGrid
        columns="2"
        gap={{
          base: '2',
          lg: '8',
        }}
      >
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </Box>
  );
};
