import {
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import { RiSearchLine } from 'react-icons/ri';

export const SearchInput = () => {
  return (
    <InputGroup>
      <InputRightElement>
        <Icon as={RiSearchLine} color="gray.500" fontSize="lg" />
      </InputRightElement>
      <Input
        focusBorderColor="blue.500"
        width="sm"
        fontSize="sm"
        variant="filled"
        type="text"
        placeholder="Masukkan kata kunci"
        autoComplete="off"
      />
    </InputGroup>
  );
};
