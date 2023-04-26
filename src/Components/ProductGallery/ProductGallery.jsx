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
  Heading,
  Link,
  ListItem,
  Progress,
  Stack,
  Text,
  UnorderedList,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import { Rating } from './Rating';
import { PriceTag } from './PriceTag';
import { Share } from './Share';
import Gallery from './Gallery';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { ProgressBar } from './Progressbar';
import { review } from './_data';
import { useNavigate } from 'react-router-dom';
import Details from './Details';

export const ProductGallery = () => {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  const navigate = useNavigate();
  const color = useColorModeValue('gray.600', 'gray.400');
  return (
    <Box
      bgColor="white"
      maxW="7xl"
      // mx="auto"

      py={{
        base: '5',
        md: '8',
        lg: '12',
      }}
    >
      <Stack
        direction={{
          base: 'column-reverse',
          md: 'row',
        }}
        spacing={{ base: '5', lg: '16' }}
      >
        <Box flex="1">
          <Stack spacing="1">
            <AspectRatio ratio={6 / 5}>
              <Gallery />
            </AspectRatio>

            {!isDesktop ? (
              <>
                <br />
                <Details />
              </>
            ) : (
              <></>
            )}

            <Flex align="center" justify="space-between">
              <Heading
                fontSize={{ base: '16px', lg: '20px' }}
                textTransform="uppercase"
                fontWeight="bold"
              >
                deskripsi
              </Heading>
              <Text
                color="#7d7d7d"
                textTransform="capitalize"
                fontSize={{ base: '13px', lg: '14px' }}
              >
                kode produk: 455758
              </Text>
            </Flex>

            <Accordion allowToggle allowMultiple>
              <AccordionItem>
                <h2 m="0" p="0">
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontSize={{ base: '15px', lg: '16px' }}
                      fontWeight={{ base: 'bold', lg: 'normal' }}
                      textTransform={{ base: 'uppercase', lg: 'none' }}
                    >
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
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontSize={{ base: '15px', lg: '16px' }}
                      fontWeight={{ base: 'bold', lg: 'normal' }}
                      textTransform={{ base: 'uppercase', lg: 'none' }}
                    >
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
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontSize={{ base: '15px', lg: '16px' }}
                      fontWeight={{ base: 'bold', lg: 'normal' }}
                      textTransform={{ base: 'uppercase', lg: 'none' }}
                    >
                      Kebijakan pengembalian
                    </Box>
                    <ChevronRightIcon />
                  </AccordionButton>
                </h2>
              </AccordionItem>
            </Accordion>
          </Stack>
          <Box>
            <Flex justifyContent="space-between" my="5">
              <Flex flexDir={{ base: 'column', lg: 'row' }}>
                <Text
                  fontSize={{ base: '16px', lg: '20px' }}
                  textTransform="uppercase"
                  fontWeight="bold"
                  my={{ base: '3', lg: '5' }}
                >
                  ulasan
                </Text>
                <Flex mx={{ base: '0', lg: '5' }} align="center">
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
              {!isDesktop ? (
                <>
                  <Box>
                    <Text
                      fontWeight="bold"
                      textTransform="uppercase"
                      textDecor="underline"
                      my="3"
                      onClick={() => navigate('/products/E457999/review/new')}
                    >
                      tulis ulasan
                    </Text>
                  </Box>
                </>
              ) : (
                <></>
              )}
            </Flex>
            <Divider my={{ base: '5', lg: '0' }} />
            <Flex flexDirection={{ base: 'column', lg: 'row' }}>
              <Box w={{ base: '100%', lg: '30%' }}>
                <Text
                  fontSize={{ base: '16px', lg: '20px' }}
                  textTransform="uppercase"
                  fontWeight="bold"
                  my={{ base: '3', lg: '5' }}
                >
                  rating
                </Text>
                <Flex my="5">
                  <Box
                    w={{ base: '45%', lg: '100%' }}
                    display="flex"
                    flexDir="row"
                  >
                    <Rating defaultValue={5} size="sm" />
                    <Link
                      href="#"
                      fontSize="sm"
                      fontWeight="medium"
                      color={color}
                      mx="3"
                    >
                      (8)
                    </Link>
                  </Box>
                  {!isDesktop ? (
                    <>
                      <Box w="55%">
                        <Progress
                          value={8}
                          max={12}
                          colorScheme="blackAlpha"
                          borderRadius="0"
                        />
                      </Box>
                    </>
                  ) : (
                    <></>
                  )}
                </Flex>
                <Flex my="5">
                  <Box
                    w={{ base: '45%', lg: '100%' }}
                    display="flex"
                    flexDir="row"
                  >
                    <Rating defaultValue={4} size="sm" />
                    <Link
                      href="#"
                      fontSize="sm"
                      fontWeight="medium"
                      color={color}
                      mx="3"
                    >
                      (1)
                    </Link>
                  </Box>
                  {!isDesktop ? (
                    <>
                      <Box w="55%">
                        <Progress
                          value={1}
                          max={12}
                          colorScheme="blackAlpha"
                          borderRadius="0"
                        />
                      </Box>
                    </>
                  ) : (
                    <></>
                  )}
                </Flex>
                <Flex my="5">
                  <Box
                    w={{ base: '45%', lg: '100%' }}
                    display="flex"
                    flexDir="row"
                  >
                    <Rating defaultValue={3} size="sm" />
                    <Link
                      href="#"
                      fontSize="sm"
                      fontWeight="medium"
                      color={color}
                      mx="3"
                    >
                      (1)
                    </Link>
                  </Box>
                  {!isDesktop ? (
                    <>
                      <Box w="55%">
                        <Progress
                          value={1}
                          max={12}
                          colorScheme="blackAlpha"
                          borderRadius="0"
                        />
                      </Box>
                    </>
                  ) : (
                    <></>
                  )}
                </Flex>
                <Flex my="5">
                  <Box
                    w={{ base: '45%', lg: '100%' }}
                    display="flex"
                    flexDir="row"
                  >
                    <Rating defaultValue={2} size="sm" />
                    <Link
                      href="#"
                      fontSize="sm"
                      fontWeight="medium"
                      color={color}
                      mx="3"
                    >
                      (1)
                    </Link>
                  </Box>
                  {!isDesktop ? (
                    <>
                      <Box w="55%">
                        <Progress
                          value={1}
                          max={12}
                          colorScheme="blackAlpha"
                          borderRadius="0"
                        />
                      </Box>
                    </>
                  ) : (
                    <></>
                  )}
                </Flex>
                <Flex my="5">
                  <Box
                    w={{ base: '45%', lg: '100%' }}
                    display="flex"
                    flexDir="row"
                  >
                    <Rating defaultValue={1} size="sm" />
                    <Link
                      href="#"
                      fontSize="sm"
                      fontWeight="medium"
                      color={color}
                      mx="3"
                    >
                      (1)
                    </Link>
                  </Box>
                  {!isDesktop ? (
                    <>
                      <Box w="55%">
                        <Progress
                          value={1}
                          max={12}
                          colorScheme="blackAlpha"
                          borderRadius="0"
                        />
                      </Box>
                    </>
                  ) : (
                    <></>
                  )}
                </Flex>
              </Box>
              <Box
                w={{ base: '100%', lg: '70%' }}
                borderY={{ base: '1px solid #ababab', lg: 'none' }}
                py={{ base: '5', lg: '5' }}
              >
                <Text
                  fontSize={{ base: '16px', lg: '20px' }}
                  textTransform="uppercase"
                  fontWeight="bold"
                >
                  ukuran yang pas
                </Text>
                <Flex align="center" justify="center" w="100%">
                  <ProgressBar />
                </Flex>
              </Box>
            </Flex>
            {isDesktop ? (
              <>
                <Button
                  textTransform="uppercase"
                  fontWeight="bold"
                  borderRadius="0"
                  bgColor="white"
                  color="black"
                  border="1px solid black"
                  w="40%"
                  my="5"
                  onClick={() => navigate('/products/E457999/review/new')}
                >
                  tulis ulasan
                </Button>
                <Divider />
              </>
            ) : (
              <></>
            )}

            <Text fontWeight="bold" my="5">
              12 ulasan
            </Text>

            {review.map((data, index) => (
              <Box key={index}>
                <Divider mt="5" />
                <Box my="5">
                  <Flex align="center" justify="space-between">
                    <Text
                      fontWeight="bold"
                      textTransform="uppercase"
                      fontSize={{ base: '15px', lg: '20px' }}
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
                    {data.age !== '' && isDesktop ? (
                      <ListItem mr="5">{data.age}</ListItem>
                    ) : (
                      <></>
                    )}
                    {data.height !== '' && isDesktop ? (
                      <ListItem mr="5">{data.height}</ListItem>
                    ) : (
                      <></>
                    )}
                    {data.weight !== '' && isDesktop ? (
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
              w={{ base: '100%', lg: '40%' }}
              my="5"
              size={{ base: 'lg', lg: 'md' }}
              onClick={() => navigate('/products/E457999/review')}
            >
              lihat lebih banyak
            </Button>
            {!isDesktop ? (
              <Text
                textTransform="uppercase"
                fontWeight="bold"
                fontSize="17px"
                textDecor="underline"
                textAlign="center"
                onClick={() => navigate('/products/E457999/review/new')}
              >
                tulis ulasan
              </Text>
            ) : (
              <></>
            )}
          </Box>
        </Box>
        <Box maxW="sm">
          <Stack spacing="8">
            <Stack spacing="4">
              <Stack>
                <Heading size={{ base: 'sm', lg: 'lg' }} fontWeight="bold">
                  Classic Black
                </Heading>
              </Stack>
              <Flex justify="space-between" w="100%" align="center">
                <PriceTag
                  price={229}
                  // salePrice={199}
                  currency="GBP"
                  rootProps={{
                    fontSize: 'xl',
                  }}
                />
                {/* {isDesktop ? (
                  <PriceTag
                    price={229}
                    // salePrice={199}
                    currency="GBP"
                    rootProps={{
                      fontSize: 'xl',
                    }}
                  />
                ) : (
                  <></>
                )} */}

                <Flex
                  // spacing="2"
                  justify={{ base: 'right', lg: 'right' }}
                  // alignSelf="centw"
                  align="center"
                  width="100vw"
                  gap="2"
                >
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
              <Text
                color={useColorModeValue('gray.600', 'gray.400')}
                fontSize={{ base: '15px', lg: '16px' }}
              >
                With a sleek design and a captivating essence, this is a modern
                Classic made for every occasion.
              </Text>
            </Stack>

            {isDesktop ? (
              <>
                <Divider /> <Details /> <Share />
              </>
            ) : (
              <></>
            )}
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};
