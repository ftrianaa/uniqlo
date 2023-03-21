// import {
//   Box,
//   Button,
//   ButtonGroup,
//   Container,
//   HStack,
//   IconButton,
//   useBreakpointValue,
// } from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
// import { Logo } from './Logo';
import { ResourcesPopover } from './ResourcesPopover';
import {
  Box,
  Center,
  Flex,
  HStack,
  useBreakpointValue,
  useColorModeValue as mode,
  VisuallyHidden,
  Button,
  IconButton,
  ButtonGroup,
  Image,
  useDisclosure,
} from '@chakra-ui/react';
import { AiOutlineUser } from 'react-icons/ai';
import { MdMenu } from 'react-icons/md';
import { RiHeartLine, RiShoppingCartLine } from 'react-icons/ri';
// import { CurrencySelect } from '../CurrencySelect';
// import { Logo } from './Logo';
import { CartCount } from './CartCount';
import { MobileBottomNav } from './MobileBottomNav';
import { NavAction } from './NavAction';
import { NavCategoryMenu } from './NavCategoryMenu';
import { NavCategorySubmenu } from './NavCategorySubmenu';
import { SearchInput } from './SearchInput';
import { ResourcesSubmenu } from './ResourcesSubmenu';
import { PopoverIcon } from './PopoverIcon';

const Header = () => {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  const { onToggle, isOpen } = useDisclosure({
    defaultIsOpen: false,
  });
  return (
    <>
      <Flex
        direction="column"
        pb="4.5rem"
        overflow="hidden"
        display={{
          base: 'flex',
          lg: 'none',
        }}
        position="sticky"
        top="0"
      >
        <Box px="3" py="3" borderBottomWidth="1px" overflow="auto">
          <Flex
            align="center"
            justify="space-between"
            mb="3"
            display={{
              base: 'flex',
              lg: 'none',
            }}
          >
            <HStack spacing="3">
              <Center w="8" h="8" as="button" type="button">
                <VisuallyHidden>Toggle Menu</VisuallyHidden>
                <Box as={MdMenu} fontSize="3xl" />
              </Center>
              {/* <Logo h="3" /> */}
              <Image src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Uniqlo_logo_Japanese.svg" />
            </HStack>
            {/* <Box>
              <CurrencySelect />
            </Box> */}
          </Flex>
          <SearchInput />
        </Box>

        {/* <Flex flex="1" fontSize="sm" overflow="auto">
          <NavCategoryMenu.Mobile />
          <NavCategorySubmenu.Mobile />
        </Flex> */}
        <MobileBottomNav />
      </Flex>

      {/* <Box
        minH="100vh"
        display={{
          base: 'none',
          lg: 'block',
        }}
      > */}
      <Box
        px="8"
        bg={mode('white', 'gray.800')}
        position="sticky"
        top="0"
        zIndex="999"
      >
        <Flex height="4.5rem" align="center" maxW="8xl" mx="auto">
          <HStack flex="24rem" spacing="32px">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Uniqlo_logo_Japanese.svg"
              h="9"
            />

            {isDesktop ? (
              <ButtonGroup variant="link" spacing="5" size="sm">
                <Button onMouseOver={onToggle} onMouseOut={onToggle}>
                  Product
                </Button>
                <Button onMouseOver={onToggle} onMouseOut={onToggle}>
                  Pricing
                </Button>
                <Button onMouseOver={onToggle} onMouseOut={onToggle}>
                  Resources
                </Button>
                <Button onMouseOver={onToggle} onMouseOut={onToggle}>
                  Support
                </Button>
              </ButtonGroup>
            ) : (
              <IconButton
                variant="ghost"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
          </HStack>

          <HStack spacing="8" flexShrink={0}>
            <Box width="full" mx="8">
              <SearchInput />
            </Box>
            <NavAction.Desktop icon={RiHeartLine} />
            <NavAction.Desktop icon={AiOutlineUser} />
            <Box position="relative">
              <NavAction.Desktop icon={RiShoppingCartLine} />
              <CartCount>1</CartCount>
            </Box>
          </HStack>
        </Flex>
        {isOpen && isDesktop ? (
          <ResourcesSubmenu isOpen={isDesktop && isOpen} />
        ) : (
          <></>
        )}
      </Box>
      {/* <NavCategoryMenu.Desktop />
        <NavCategorySubmenu.Desktop /> */}
      {/* <Box bg="blackAlpha.400" pos="fixed" zIndex="-1" inset="0" /> */}
      {/* </Box> */}
    </>
  );
};

export default Header;
