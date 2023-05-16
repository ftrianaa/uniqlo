import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { news } from '../../../Category/data';

const LatestLookbook = () => {
  return (
    <Box>
      <Heading
        textTransform="uppercase"
        fontSize={{ base: '22px', lg: '36px' }}
        fontWeight="bold"
      >
        latest lookbook
      </Heading>
      <Grid
        templateColumns={{ base: 'repeat(1,1fr)', lg: 'repeat(2,1fr)' }}
        gap="1"
        borderTop="1px solid #dadada"
        borderBottom="1px solid #dadada"
      >
        {news.map((item, index) => (
          <Flex key={index} flexDirection={{ base: 'row', lg: 'column' }}>
            <Image src={item.src} w={{ base: '155px', lg: '100%' }} />
            <Box px={{ base: 3, lg: 0 }}>
              <Text fontWeight="bold">{item.alt}</Text>
              <Text>{item.description}</Text>
            </Box>
          </Flex>
        ))}
      </Grid>
      <Button
        w="100%"
        textTransform="uppercase"
        variant="outline"
        borderColor="black"
        borderRadius="0"
        my="10"
      >
        Selengkapnya
      </Button>
    </Box>
  );
};

export default LatestLookbook;
