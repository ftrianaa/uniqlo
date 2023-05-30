import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { ProgressBarPoins } from '../../../Components/ProgressBarPoints/ProgressBarPoints';

const Level = () => {
  return (
    <>
      <Box>
        <Text textTransform="uppercase" fontSize="32px" fontWeight="bold">
          Level
        </Text>
      </Box>
      <Flex justify="center" align="center" my="5">
        <ProgressBarPoins />
      </Flex>
      <Text>
        Progress <b>95%</b> menuju Intermediate
      </Text>
      <Text fontSize="smaller">
        Dapatkan 12.000 poin untuk menuju level selanjutnya
      </Text>
      <Box my="5">
        <Text fontWeight="bold">Quest</Text>
        <Accordion allowToggle my="3">
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Flex justify="space-between">
                    <Text>Beli 1 pakaian dari Season Collection</Text>
                    <Text>2.000 poin</Text>
                  </Flex>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <List>
                <ListItem>
                  <Text>
                    Belanja sebesar <b>Rp300.000</b> dari Season Collection
                    (Winter, Summer, Fall, Autumn)
                  </Text>
                </ListItem>
              </List>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Flex justify="space-between">
                    <Text>Belanja offline di Klamby Store</Text>
                    <Text>10.000 poin</Text>
                  </Flex>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Datang ke store Klamby di kota terdekat dan beli 1 barang apapun
              secara offline dengan harga <b>Rp500.000</b>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </>
  );
};

const Points = () => {
  return (
    <>
      <Level />
      <Box>
        <Text textTransform="uppercase" fontSize="32px" fontWeight="bold">
          Point
        </Text>
      </Box>
      <Box>
        Sisa poin kamu adalah: <b>150</b>
      </Box>
    </>
  );
};

export default Points;
