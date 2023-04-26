import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Icon,
  Link,
  Select,
  Stack,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import { RiRulerLine } from 'react-icons/ri';
import { ColorPicker } from '../ColorPicker/ColorPicker';
import { SizePicker } from './SizePicker';
import { useNavigate } from 'react-router-dom';
const Details = () => {
  const navigate = useNavigate();
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Box zIndex={2}>
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
        <Flex justify="space-between" align="center">
          <Box w={{ base: '50%', lg: '70%' }}>
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
            w={{ base: '50%', lg: '30%' }}
            display="flex"
            alignItems="center"
            justifyContent="right"
            gap="2"
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
        w="100%"
        my={{ base: '3', lg: '5' }}
        size={{ base: 'lg', lg: 'md' }}
      >
        tambah ke keranjang
      </Button>
      <Flex justify="space-between" align="center">
        {isDesktop ? (
          <Button
            bgColor="white"
            color="black"
            borderRadius="0"
            textTransform="uppercase"
            fontWeight="bold"
            border="black 1px solid"
            w="48%"
            size={{ base: 'lg', lg: 'md' }}
          >
            tambah ke wishlist
          </Button>
        ) : (
          <></>
        )}

        <Button
          bgColor="white"
          color="black"
          borderRadius="0"
          textTransform="uppercase"
          fontWeight="bold"
          border="black 1px solid"
          w={{ base: '100%', lg: '48%' }}
          onClick={() => navigate('/store inventory')}
          size={{ base: 'lg', lg: 'md' }}
        >
          cari stok di toko
        </Button>
      </Flex>
    </Box>
  );
};

export default Details;
