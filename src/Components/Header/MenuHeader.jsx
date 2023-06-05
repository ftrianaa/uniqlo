import { useNavigate } from 'react-router-dom';
import {
  Box,
  Flex,
  HStack,
  useBreakpointValue,
  useColorModeValue as mode,
  IconButton,
  Image,
  useDisclosure,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Text,
  Tabs,
  TabList,
  Tab,
  Stack,
  TabPanel,
  TabPanels,
} from '@chakra-ui/react';
import Women from '../MenuDropdown/Women';
import Men from '../MenuDropdown/Men';
import Child from '../MenuDropdown/Child';
import Baby from '../MenuDropdown/Baby';

const MenuHeader = () => {
  const navigate = useNavigate();
  return (
    <>
      <Popover islazy trigger={'hover'}>
        <PopoverTrigger>
          <Box>
            <Text
              onClick={() => navigate('/women')}
              size={'md'}
              as={'Button'}
              fontWeight="bold"
            >
              Shop All
            </Text>
          </Box>
        </PopoverTrigger>
        <PopoverContent w="100%" borderRadius="0">
          <PopoverBody padding={'25px'}>
            <Women />
          </PopoverBody>
        </PopoverContent>
      </Popover>
      <Popover islazy trigger={'hover'}>
        <PopoverTrigger>
          <Box>
            <Text
              onClick={() => navigate('/men')}
              size={'md'}
              as={'Button'}
              fontWeight="bold"
            >
              Category
            </Text>
          </Box>
        </PopoverTrigger>
        <PopoverContent w="100%" borderRadius="0">
          <PopoverBody padding={'25px'}>
            <Men />
          </PopoverBody>
        </PopoverContent>
      </Popover>
      <Popover islazy trigger={'hover'}>
        <PopoverTrigger>
          <Box>
            <Text
              onClick={() => navigate('/child')}
              size={'md'}
              as={'Button'}
              fontWeight="bold"
            >
              Journal
            </Text>
          </Box>
        </PopoverTrigger>
        <PopoverContent w="100%" borderRadius="0">
          <PopoverArrow />
          <PopoverBody padding={'25px'}>
            <Child />
          </PopoverBody>
        </PopoverContent>
      </Popover>
      <Popover islazy trigger={'hover'}>
        <PopoverTrigger>
          <Box>
            <Text
              onClick={() => navigate('/baby')}
              size={'md'}
              as={'Button'}
              fontWeight="bold"
            >
              Store Location
            </Text>
          </Box>
        </PopoverTrigger>
        <PopoverContent w="100%" borderRadius="0">
          <PopoverBody padding={'25px'}>
            <Baby />
          </PopoverBody>
        </PopoverContent>
      </Popover>
      <Popover islazy trigger={'hover'}>
        <PopoverTrigger>
          <Box>
            <Text
              onClick={() => navigate('/baby')}
              size={'md'}
              as={'Button'}
              fontWeight="bold"
            >
              Careers
            </Text>
          </Box>
        </PopoverTrigger>
        <PopoverContent w="100%" borderRadius="0">
          <PopoverBody padding={'25px'}>
            <Baby />
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};
export default MenuHeader;
