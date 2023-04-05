import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  AspectRatio,
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  ListItem,
  Select,
  Skeleton,
  Stack,
  Text,
  UnorderedList,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiClock, FiHeart } from 'react-icons/fi';
import { RiRulerLine } from 'react-icons/ri';
import { Rating } from './Rating';
import { ColorPicker } from '../ColorPicker/ColorPicker';

import { PriceTag } from './PriceTag';
import { ProductBadge } from './ProductBadge';
import { Promos } from './Promos';
import { QuantityPicker } from './QuantityPicker';
import { Share } from './Share';
import { SizePicker } from './SizePicker';
import Gallery from './Gallery';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { ProgressBar } from '../ProgressBar/Progressbar';
import { review } from './_data';
import { useNavigate } from 'react-router-dom';

export const ProductGallery = () => {
  const navigate = useNavigate();
  return (
    <Box
      bgColor="white"
      maxW="7xl"
      // mx="auto"

      py={{
        base: '6',
        md: '8',
        lg: '12',
      }}
    >
      <Stack
        direction={{
          base: 'column',
          md: 'row',
        }}
        spacing="16"
      >
        <Box flex="1">
          <Stack spacing="8">
            <AspectRatio ratio={4 / 3}>
              <Gallery />
            </AspectRatio>
            <Flex align="center" justify="space-between">
              <Heading
                fontSize="20px"
                textTransform="uppercase"
                fontWeight="bold"
              >
                deskripsi
              </Heading>
              <Text color="#7d7d7d" textTransform="capitalize" fontSize="14px">
                kode produk: 455758
              </Text>
            </Flex>
            <Accordion>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Ikhtisar
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Material
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Kebijakan pengembalian
                    </Box>
                    <ChevronRightIcon />
                  </AccordionButton>
                </h2>
              </AccordionItem>
            </Accordion>
          </Stack>
          <Box>
            <Flex alignItems="center">
              <Heading
                fontSize="20px"
                textTransform="uppercase"
                fontWeight="bold"
              >
                ulasan
              </Heading>
              <Flex mx="5">
                <Rating defaultValue={4} size="sm" />
                <Link
                  href="#"
                  fontSize="sm"
                  fontWeight="medium"
                  color={useColorModeValue('gray.600', 'gray.400')}
                >
                  (12)
                </Link>
              </Flex>
            </Flex>
            <Divider />
            <Flex>
              <Box w="30%">
                <Heading
                  fontSize="20px"
                  textTransform="uppercase"
                  fontWeight="bold"
                >
                  rating
                </Heading>
                <Flex my="5">
                  <Rating defaultValue={5} size="sm" />
                  <Link
                    href="#"
                    fontSize="sm"
                    fontWeight="medium"
                    color={useColorModeValue('gray.600', 'gray.400')}
                    mx="3"
                  >
                    (8)
                  </Link>
                </Flex>{' '}
                <Flex my="5">
                  <Rating defaultValue={4} size="sm" />
                  <Link
                    href="#"
                    fontSize="sm"
                    fontWeight="medium"
                    color={useColorModeValue('gray.600', 'gray.400')}
                    mx="3"
                  >
                    (1)
                  </Link>
                </Flex>{' '}
                <Flex my="5">
                  <Rating defaultValue={3} size="sm" />
                  <Link
                    href="#"
                    fontSize="sm"
                    fontWeight="medium"
                    color={useColorModeValue('gray.600', 'gray.400')}
                    mx="3"
                  >
                    (1)
                  </Link>
                </Flex>{' '}
                <Flex my="5">
                  <Rating defaultValue={2} size="sm" />
                  <Link
                    href="#"
                    fontSize="sm"
                    fontWeight="medium"
                    color={useColorModeValue('gray.600', 'gray.400')}
                    mx="3"
                  >
                    (1)
                  </Link>
                </Flex>{' '}
                <Flex my="5">
                  <Rating defaultValue={1} size="sm" />
                  <Link
                    href="#"
                    fontSize="sm"
                    fontWeight="medium"
                    color={useColorModeValue('gray.600', 'gray.400')}
                    mx="3"
                  >
                    (1)
                  </Link>
                </Flex>
              </Box>
              <Box w="70%">
                <Heading
                  fontSize="20px"
                  textTransform="uppercase"
                  fontWeight="bold"
                >
                  ukuran yang pas
                </Heading>
                <ProgressBar />
              </Box>
            </Flex>
            <Button
              textTransform="uppercase"
              fontWeight="bold"
              borderRadius="0"
              bgColor="white"
              color="black"
              border="1px solid black"
              w="40%"
              my="5"
            >
              tulis ulasan
            </Button>
            <Divider />
            <Text fontWeight="bold" my="5">
              12 ulasan
            </Text>
            <Divider />
            {review.map((data, index) => (
              <Box key={index}>
                <Divider />
                <Box my="3">
                  <Flex align="center" justify="space-between">
                    <Text
                      fontWeight="bold"
                      textTransform="uppercase"
                      fontSize="20px"
                    >
                      {data.title}
                    </Text>
                    <Text color="#7d7d7d" fontSize="14px">
                      {data.date}
                    </Text>
                  </Flex>
                  <Box my="3">
                    <Rating defaultValue={5} size="sm" />
                  </Box>
                  <Box my="3">
                    <Flex>
                      <Text>Ukuran yang dibeli: </Text>
                      <Text>{data.size}</Text>
                    </Flex>
                    <Flex>
                      <Text>Ukuran yang pas: </Text>
                      <Text>{data.fit}</Text>
                    </Flex>
                  </Box>
                  <Text>{data.comment}</Text>
                </Box>
                <Flex>
                  {data.name !== '' ? (
                    <Text
                      fontWeight="bold"
                      textTransform="uppercase"
                      fontSize="14px"
                      mr="2"
                    >
                      {data.name}
                    </Text>
                  ) : (
                    <Text mr="2">''</Text>
                  )}
                  <UnorderedList
                    display="flex"
                    size="sm"
                    fontSize="14px"
                    color="#7d7d7d"
                  >
                    {data.gender !== '' ? (
                      <ListItem mr="5">{data.gender}</ListItem>
                    ) : (
                      <></>
                    )}
                    {data.age !== '' ? (
                      <ListItem mr="5">{data.age}</ListItem>
                    ) : (
                      <></>
                    )}
                    {data.height !== '' ? (
                      <ListItem mr="5">{data.height}</ListItem>
                    ) : (
                      <></>
                    )}
                    {data.weight !== '' ? (
                      <ListItem mr="5">{data.weight}</ListItem>
                    ) : (
                      <></>
                    )}
                    {data.from !== '' ? (
                      <ListItem mr="5">{data.from}</ListItem>
                    ) : (
                      <></>
                    )}
                  </UnorderedList>
                </Flex>
              </Box>
            ))}

            <Button
              textTransform="uppercase"
              fontWeight="bold"
              borderRadius="0"
              bgColor="white"
              color="black"
              border="1px solid black"
              w="40%"
              my="5"
            >
              lihat lebih banyak
            </Button>
          </Box>
        </Box>
        <Box maxW="sm">
          <Stack spacing="8">
            <Stack spacing="4">
              <Stack>
                <Heading size="lg" fontWeight="medium">
                  Classic Black
                </Heading>
              </Stack>
              <Flex spacing="1" justify="space-between">
                <PriceTag
                  price={229}
                  // salePrice={199}
                  currency="GBP"
                  rootProps={{
                    fontSize: 'xl',
                  }}
                />
                <Flex spacing="2" alignSelf="baseline">
                  <Rating defaultValue={4} size="sm" />
                  <Link
                    href="#"
                    fontSize="sm"
                    fontWeight="medium"
                    color={useColorModeValue('gray.600', 'gray.400')}
                  >
                    (12)
                  </Link>
                </Flex>
              </Flex>
              <Text color={useColorModeValue('gray.600', 'gray.400')}>
                With a sleek design and a captivating essence, this is a modern
                Classic made for every occasion.
              </Text>
            </Stack>
            <Divider />
            <Stack>
              <Stack>
                <ColorPicker
                  defaultValue="Black"
                  options={[
                    {
                      label: 'Black',
                      value: '#000',
                    },
                    {
                      label: 'Dark Gray',
                      value: '#666',
                    },
                    {
                      label: 'Light Gray',
                      value: '#BBB',
                    },
                  ]}
                />
              </Stack>
              <Flex>
                <Box w="70%">
                  <SizePicker
                    defaultValue="32"
                    options={[
                      {
                        label: '32mm',
                        value: '32',
                      },
                      {
                        label: '36mm',
                        value: '36',
                      },
                      {
                        label: '40mm',
                        value: '40',
                      },
                    ]}
                  />
                </Box>
                <Box
                  spacing="1"
                  color={useColorModeValue('gray.600', 'gray.400')}
                >
                  <Icon as={RiRulerLine} />
                  <Link
                    href="#"
                    fontSize="xs"
                    fontWeight="bold"
                    textDecoration="underline"
                    textTransform="uppercase"
                  >
                    Grafik Ukuran
                  </Link>
                </Box>
              </Flex>
            </Stack>

            <HStack
              spacing={{
                base: '4',
                md: '8',
              }}
              align="flex-end"
              justify="space-evenly"
            >
              <Box flex="1">
                <FormControl w="40%">
                  <FormLabel fontSize="sm" fontWeight="medium">
                    Jumlah
                  </FormLabel>
                  <Select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Select>
                  <FormHelperText>Stock hampir habis</FormHelperText>
                </FormControl>
              </Box>
            </HStack>
            <Button
              bgColor="red"
              color="white"
              borderRadius="0"
              textTransform="uppercase"
              fontWeight="bold"
            >
              Add to cart
            </Button>
            <Flex justify="space-between" align="center">
              <Button
                bgColor="white"
                color="black"
                borderRadius="0"
                textTransform="uppercase"
                fontWeight="bold"
                border="black 1px solid"
                w="48%"
              >
                tambah ke wishlist
              </Button>
              <Button
                bgColor="white"
                color="black"
                borderRadius="0"
                textTransform="uppercase"
                fontWeight="bold"
                border="black 1px solid"
                w="48%"
                onClick={() => navigate('/store inventory')}
              >
                cari stok di toko
              </Button>
            </Flex>
            <Share />
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};
