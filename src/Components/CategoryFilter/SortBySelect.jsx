import { Select, useColorModeValue } from '@chakra-ui/react';
const sortByOptions = {
  defaultValue: 'best-seller',
  options: [
    {
      label: 'Best Seller',
      value: 'best-seller',
    },
    {
      label: 'Best Match',
      value: 'best-match',
    },
    {
      label: 'Price: Low to High',
      value: 'low-to-high',
    },
    {
      label: 'Price: High to Low',
      value: 'high-to-low',
    },
  ],
};

export const SortbySelect = props => (
  <Select
    size="sm"
    aria-label="Sort by"
    defaultValue={sortByOptions.defaultValue}
    focusBorderColor={useColorModeValue('blue.500', 'blue.200')}
    {...props}
    borderColor="#7d7d7d"
  >
    {sortByOptions.options.map(option => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </Select>
);
