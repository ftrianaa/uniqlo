import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Checkbox,
  Container,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Link,
  ListItem,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Select,
  Text,
  Textarea,
  UnorderedList,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ColorPicker } from '../../Components/ColorPicker/ColorPicker';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import { SizePicker } from '../../Components/ProductGallery/SizePicker';
import { Rating } from '../Search/Rating';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { ProgressBar } from './Progressbar';
import { StarReview } from '../../Components/StarReview/StarReview';
import { review } from './data';

const Review = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Container bgColor="white" px="20">
        <Box>
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

            <Flex justify="space-between" my="5">
              <Box w="68%">
                <Box>
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
                          <Rating defaultValue={data.rate} size="sm" />
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
                          <Text mr="2"></Text>
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
              <Flex w="30%">
                <Box>
                  <Box border="1px solid rgb(224, 224, 224) " p="5">
                    <Box>
                      <Text
                        fontWeight="bold"
                        fontSize="26px"
                        textTransform="uppercase"
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
                        <Flex>
                          <Rating defaultValue={5} size="sm" />
                          <Link
                            href="#"
                            fontSize="sm"
                            fontWeight="medium"
                            color={mode('gray.600', 'gray.400')}
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
                            color={mode('gray.600', 'gray.400')}
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
                            color={mode('gray.600', 'gray.400')}
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
                            color={mode('gray.600', 'gray.400')}
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
                            color={mode('gray.600', 'gray.400')}
                            mx="3"
                          >
                            (1)
                          </Link>
                        </Flex>
                      </Box>
                    </Box>
                    <Box>
                      <Text
                        fontSize="20px"
                        textTransform="uppercase"
                        fontWeight="bold"
                        my="4"
                      >
                        ukuran yang pas
                      </Text>
                      <ProgressBar />
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
                    >
                      tulis ulasan
                    </Button>
                  </Box>
                </Box>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Review;
