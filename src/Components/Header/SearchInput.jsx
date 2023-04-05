import {
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import { RiSearchLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

export const SearchInput = () => {
  const navigate = useNavigate();
  return (
    <InputGroup>
      <InputRightElement>
        <Icon
          as={RiSearchLine}
          color="gray.500"
          fontSize="lg"
          onClick={() => navigate('/search/shirt')}
          cursor="pointer"
        />
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
