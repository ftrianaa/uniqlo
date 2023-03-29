import {
  Box,
  Grid,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import { CheckboxFilter } from './CheckboxFilter';
import { ColorPicker } from './ColorPicker';
import { PriceRangePicker } from './PriceRangePicker';
import { ProductBreadcrumb } from './ProductBreadcrumb';
import { SizePicker } from './SizePicker';
import { SortbySelect } from './SortBySelect';
import { MobileFilter } from './MobileFilter';
import {
  blueFilters,
  breadcrumbData,
  colorFilter,
  genderFilter,
  sizeFilter,
} from './_data';
import { Items } from '../Items/Items';

export const CategoryFilter = () => (
  <Box
    maxW="7xl"
    mx="auto"
    px={{
      base: '4',
      md: '8',
      lg: '12',
    }}
  >
    <Box>
      <Grid
        templateColumns={{
          base: '1fr',
          md: '240px 1fr',
        }}
        gap="14"
      >
        <Stack
          spacing="10"
          maxW="240px"
          display={{
            base: 'none',
            md: 'flex',
          }}
        >
          <Box>
            <Image src="https://im.uniqlo.com/global-cms/spa/res30e7c4091690753456c88b55cf3b6951fr.jpg" />
            <Text fontWeight="bold">UT Attack on Titan Lengan Pendek</Text>
            <Text>
              Terinspirasi dari pertarungan hebat antara manusia dan Titan.
            </Text>
            <Text fontWeight="bold" fontSize="20px">
              Rp199.000
            </Text>
          </Box>
        </Stack>

        <Box width="full">
          <Stack
            spacing={{
              base: '6',
              md: '4',
            }}
            direction={{
              base: 'column',
              md: 'row',
            }}
            justify="space-between"
            align="flex-start"
            width="full"
          >
            <Stack
              direction={{
                base: 'column',
                md: 'row',
              }}
              align="baseline"
            >
              <Heading size="md" fontSize="2xl">
                Watches
              </Heading>
              <Text color="gray.500">(300 products)</Text>
            </Stack>
            <MobileFilter />
            <HStack
              display={{
                base: 'none',
                md: 'flex',
              }}
            >
              <Text flexShrink={0} color="gray.500" fontSize="sm">
                Sort by
              </Text>
              <SortbySelect />
            </HStack>
          </Stack>
          <Box mt="6" minH="480px" rounded="xl">
            <Items />
          </Box>
        </Box>
      </Grid>
    </Box>
  </Box>
);
