import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Divider,
  Flex,
  Heading,
  Link,
  ListItem,
  Progress,
  Text,
  UnorderedList,
  useColorModeValue as mode,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Rating } from '../Search/Rating';
import { AiOutlineLeft } from 'react-icons/ai';
import { ProgressBar } from './Progressbar';
import { review } from './data';

const Review = () => {
  const navigate = useNavigate();
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  const color = useColorModeValue('gray.600', 'gray.400');

  return (
    <>
      {!isDesktop ? (
        <>
          <Box px={{ base: 5, md: 10 }} py="5" bgColor="white">
            <Flex
              justify="space-between"
              align="center"
              onClick={() => navigate('/products/baju')}
            >
              <AiOutlineLeft />
              <Text fontSize="16px" fontWeight="bold">
                T-Shirt Kerah Bulat Lengan Pendek Uniqlo U
              </Text>
            </Flex>
            <Flex align="center" justify="right">
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
            </Flex>
          </Box>
          <Box bgColor={'#f4f4f4'}>
            <Text
              fontSize="22px"
              textTransform="uppercase"
              fontWeight="bold"
              textAlign="left"
              p={5}
              px={{ base: 5, md: 10 }}
            >
              ulasan
            </Text>
          </Box>
        </>
      ) : (
        <></>
      )}
      <Box bgColor="white" px={{ base: 5, md: 10, lg: '20' }}>
        <Box>
          {isDesktop ? (
            <>
              <Breadcrumb
                fontSize="sm"
                fontWeight="medium"
                color={mode('gray.600', 'gray.400')}
                separator={'/'}
                my="5"
              >
                <BreadcrumbItem>
                  <BreadcrumbLink onClick={() => navigate('/')}>
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbLink onClick={() => navigate('/products/baju')}>
                    Product
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Review</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
              <Box py="5">
                <Text
                  fontWeight="bold"
                  textDecor="underline"
                  cursor="pointer"
                  textTransform="uppercase"
                  onClick={() => navigate('/products/baju')}
                >
                  kembali ke detail produk
                </Text>
                <Heading fontSize="32px" fontWeight="bold">
                  T-Shirt Kerah Bulat Lengan Pendek Uniqlo U
                </Heading>
              </Box>
            </>
          ) : (
            <></>
          )}
          <Box py={{ base: 0, lg: '5' }}>
            <Flex
              justify="space-between"
              my="5"
              flexDir={{ base: 'column-reverse', lg: 'row' }}
            >
              <Box w={{ base: '100%', lg: '68%' }}>
                <Box>
                  {review.map((data, index) => (
                    <Box key={index}>
                      <Divider />
                      <Box my="3">
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
                          <Rating defaultValue={data.rate} size="sm" />
                        </Box>
                        <Box my="3">
                          <Flex>
                            <Text>Ukuran yang dibeli: </Text>
                            <Text mx="2">{data.size}</Text>
                          </Flex>
                          <Flex>
                            <Text>Ukuran yang pas: </Text>
                            <Text mx="2">{data.fit}</Text>
                          </Flex>
                        </Box>
                        <Text>{data.comment}</Text>
                      </Box>
                      <Flex mb="3">
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
                          <Text mr="2"></Text>
                        )}
                        <UnorderedList
                          display="flex"
                          size="sm"
                          fontSize="14px"
                          color="#7d7d7d"
                          flexWrap="wrap"
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
                          {data.city !== '' ? (
                            <ListItem mr="5">{data.city}</ListItem>
                          ) : (
                            <></>
                          )}
                        </UnorderedList>
                      </Flex>
                    </Box>
                  ))}
                </Box>
              </Box>

              <Box w={{ base: '100%', lg: '30%' }}>
                <Box
                  border={{
                    base: 'none',
                    lg: '1px solid rgb(224, 224, 224) ',
                  }}
                  p={{ base: 0, lg: '5' }}
                >
                  <Box>
                    <Text
                      fontWeight="bold"
                      fontSize="26px"
                      textTransform="uppercase"
                      display={{ base: 'none', lg: 'block' }}
                    >
                      rangkuman ulasan
                    </Text>
                    <Box>
                      <Text
                        fontSize="14px"
                        textTransform="uppercase"
                        fontWeight="bold"
                        my="3"
                      >
                        rating
                      </Text>
                      <Flex my="5" align="center">
                        <Box
                          w={{ base: '45%', lg: '100%' }}
                          display="flex"
                          flexDir="row"
                        >
                          <Rating defaultValue={5} size="sm" />
                          {isDesktop ? (
                            <>
                              <Link
                                href="#"
                                fontSize="sm"
                                fontWeight="medium"
                                color={color}
                                mx="3"
                              >
                                (8)
                              </Link>
                            </>
                          ) : (
                            <></>
                          )}
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
                            <Link
                              href="#"
                              fontSize="sm"
                              fontWeight="medium"
                              color={color}
                              mx="3"
                            >
                              (8)
                            </Link>
                          </>
                        ) : (
                          <></>
                        )}
                      </Flex>
                      <Flex my="5" align="center">
                        <Box
                          w={{ base: '45%', lg: '100%' }}
                          display="flex"
                          flexDir="row"
                        >
                          <Rating defaultValue={4} size="sm" />
                          {isDesktop ? (
                            <>
                              <Link
                                href="#"
                                fontSize="sm"
                                fontWeight="medium"
                                color={color}
                                mx="3"
                              >
                                (1)
                              </Link>
                            </>
                          ) : (
                            <></>
                          )}
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
                            <Link
                              href="#"
                              fontSize="sm"
                              fontWeight="medium"
                              color={color}
                              mx="3"
                            >
                              (1)
                            </Link>
                          </>
                        ) : (
                          <></>
                        )}
                      </Flex>
                      <Flex my="5" align="center">
                        <Box
                          w={{ base: '45%', lg: '100%' }}
                          display="flex"
                          flexDir="row"
                        >
                          <Rating defaultValue={3} size="sm" />
                          {isDesktop ? (
                            <>
                              <Link
                                href="#"
                                fontSize="sm"
                                fontWeight="medium"
                                color={color}
                                mx="3"
                              >
                                (1)
                              </Link>
                            </>
                          ) : (
                            <></>
                          )}
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
                            <Link
                              href="#"
                              fontSize="sm"
                              fontWeight="medium"
                              color={color}
                              mx="3"
                            >
                              (1)
                            </Link>
                          </>
                        ) : (
                          <></>
                        )}
                      </Flex>
                      <Flex my="5" align="center">
                        <Box
                          w={{ base: '45%', lg: '100%' }}
                          display="flex"
                          flexDir="row"
                        >
                          <Rating defaultValue={2} size="sm" />
                          {isDesktop ? (
                            <>
                              <Link
                                href="#"
                                fontSize="sm"
                                fontWeight="medium"
                                color={color}
                                mx="3"
                              >
                                (1)
                              </Link>
                            </>
                          ) : (
                            <></>
                          )}
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
                            <Link
                              href="#"
                              fontSize="sm"
                              fontWeight="medium"
                              color={color}
                              mx="3"
                            >
                              (1)
                            </Link>
                          </>
                        ) : (
                          <></>
                        )}
                      </Flex>
                      <Flex my="5" align="center">
                        <Box
                          w={{ base: '45%', lg: '100%' }}
                          display="flex"
                          flexDir="row"
                        >
                          <Rating defaultValue={1} size="sm" />
                          {isDesktop ? (
                            <>
                              <Link
                                href="#"
                                fontSize="sm"
                                fontWeight="medium"
                                color={color}
                                mx="3"
                              >
                                (1)
                              </Link>
                            </>
                          ) : (
                            <></>
                          )}
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
                            <Link
                              href="#"
                              fontSize="sm"
                              fontWeight="medium"
                              color={color}
                              mx="3"
                            >
                              (1)
                            </Link>
                          </>
                        ) : (
                          <></>
                        )}
                      </Flex>
                    </Box>
                  </Box>
                  {!isDesktop ? <Divider /> : <></>}
                  <Box mb={{ base: 4, lg: 0 }}>
                    <Text
                      fontSize={{ base: '15px', lg: '20px' }}
                      textTransform="uppercase"
                      fontWeight="bold"
                      my="4"
                    >
                      ukuran yang pas
                    </Text>
                    <Flex justify="center" align="center">
                      <ProgressBar />
                    </Flex>
                  </Box>

                  <Button
                    textTransform="uppercase"
                    fontWeight="bold"
                    borderRadius="0"
                    bgColor="white"
                    color="black"
                    border="1px solid black"
                    w="90%"
                    my="5"
                    onClick={() => navigate('/products/E457999/review/new')}
                    display={{ base: 'none', lg: 'block' }}
                  >
                    tulis ulasan
                  </Button>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Review;
