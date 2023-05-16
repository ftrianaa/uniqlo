import { Box, Button, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { latestJournal } from '../../Signature/_data';

const LatestJournal = () => {
  return (
    <Box>
      <Box>
        <Text
          fontSize={{ base: '22px', lg: '36px' }}
          fontWeight="bold"
          textTransform="uppercase"
        >
          Latest journal
        </Text>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
          voluptates tenetur id, sed dignissimos necessitatibus distinctio eos
          impedit expedita vero.
        </Text>
      </Box>

      <Grid
        templateColumns={{ base: 'repeat(2,1fr)', lg: 'repeat(3,1fr)' }}
        gap="5"
        my="5"
      >
        {latestJournal.map((item, id) => (
          <GridItem key={id}>
            <Image src={item.img} />
            <Text
              fontWeight="bold"
              fontSize={{ base: '18px', md: '20px' }}
              my="3"
            >
              {item.title}
            </Text>
            <Text>{item.desc}</Text>
            <Text
              textTransform="uppercase"
              fontWeight="bold"
              borderRadius="0"
              textDecor="underline"
              my="2"
              cursor="pointer"
            >
              lihat selengkapnya
            </Text>
          </GridItem>
        ))}
      </Grid>
      <Button
        w="100%"
        textTransform="uppercase"
        variant="outline"
        borderColor="black"
        borderRadius="0"
        my="5"
        // onClick={() => navigate('/new arrivals/koleksi-kemeja')}
      >
        Selengkapnya
      </Button>
    </Box>
  );
};

export default LatestJournal;
