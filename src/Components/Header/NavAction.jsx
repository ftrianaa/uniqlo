import {
  Box,
  Center,
  Flex,
  HStack,
  Icon,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
const MobileNavAction = props => {
  const { label, icon, isActive, href, children } = props;
  return (
    <Center
      as="a"
      href={href}
      height="56px"
      rounded="4"
      aria-current={isActive ? 'page' : undefined}
      _activeLink={{
        color: mode('blue.500', 'blue.300'),
      }}
      _hover={{
        bg: mode('gray.100', 'gray.700'),
      }}
    >
      <Flex position="relative" direction="column" align="center" as="button">
        <Box fontSize="xl" as={icon} />
        <Text fontSize="sm" fontWeight="medium">
          {label}
        </Text>
        {children}
      </Flex>
    </Center>
  );
};
const DesktopNavAction = props => {
  const { label, icon, href } = props;
  const navigate = useNavigate();
  // console.log(href, 'ni href');
  return (
    <HStack
      spacing="2"
      as="a"
      onClick={() => navigate(`${href}`)}
      cursor="pointer"
    >
      <Text fontSize="sm" fontWeight="semibold">
        {label}
      </Text>
      <Icon as={icon} />
    </HStack>
  );
};

export const NavAction = {
  Mobile: MobileNavAction,
  Desktop: DesktopNavAction,
};
