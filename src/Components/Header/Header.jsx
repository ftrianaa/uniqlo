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
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Heading,
  Text,
} from '@chakra-ui/react';
import { AiOutlineSearch, AiOutlineUser } from 'react-icons/ai';
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
import { useNavigate } from 'react-router-dom';

import Men from '../MenuDropdown/Men';
import Women from '../MenuDropdown/Women';
import Child from '../MenuDropdown/Child';
import Baby from '../MenuDropdown/Baby';
import Profile from '../MenuDropdown/Profile';
const buttonArr = [
  {
    id: 1,
    name: 'women',
    route: '/women',
  },
  {
    id: 2,
    name: 'men',
    route: '/men',
  },
  {
    id: 3,
    name: 'kids',
    route: '/kids',
  },
  {
    id: 4,
    name: 'baby',
    route: '/baby',
  },
];

const Header = () => {
  const navigate = useNavigate();
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });

  const { onToggle, isOpen } = useDisclosure();

  return (
    <>
      <Flex
        bgColor="#f4f4f4"
        className="top-header"
        px={{ base: 5, md: 10, lg: 20 }}
        h="30px"
        align="center"
        justify="left"
        textTransform="uppercase"
        fontWeight="bold"
        fontSize="14px"
      >
        <Text>Heritage</Text>
        <Text mx="5">Signature</Text>
        <Text>Scarves</Text>
      </Flex>
      <Flex
        direction="column"
        pb="4.5rem"
        overflow="hidden"
        display={{
          base: 'none',
          lg: 'none',
        }}
      >
        {/* <Box px="3" py="3" borderBottomWidth="1px" overflow="auto">
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

              <Image
                src="https://cdn.shopify.com/s/files/1/0608/6724/8340/files/Logo_klamby_baru_banget_140x@2x.png?v=1643345083"
                h="3"
              />
            </HStack>
          </Flex>
          <SearchInput />
        </Box> */}

        {/* <Flex flex="1" fontSize="sm" overflow="auto">
          <NavCategoryMenu.Mobile />
          <NavCategorySubmenu.Mobile />
        </Flex> */}
        {/* <MobileBottomNav /> */}
      </Flex>
      <Box
        px={{ base: 5, md: 10, lg: 20 }}
        bg={mode('white', 'gray.800')}
        position="sticky"
        top="0"
        zIndex="999"
        borderBottom="1px solid rgb(204, 204, 204)"
      >
        <Flex height="4.5rem" align="center" maxW="8xl" mx="auto">
          <HStack flex="24rem" spacing="32px">
            {isDesktop ? (
              <>
                <Image
                  src="https://cdn.shopify.com/s/files/1/0608/6724/8340/files/Logo_klamby_baru_banget_140x@2x.png?v=1643345083"
                  h="9"
                />
                <Popover islazy trigger={'hover'}>
                  <PopoverTrigger>
                    <Box>
                      <Text
                        onClick={() => navigate('/women')}
                        size={'md'}
                        as={'Button'}
                        fontWeight="bold"
                      >
                        WANITA
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
                        PRIA
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
                        ANAK
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
                        BAYI
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
            ) : (
              // <ButtonGroup variant="link" spacing="5" size="sm">
              //   {buttonArr.map((item, index) => (
              //     <Button
              //       onPointerEnter={onToggle}
              //       onPointerLeave={onToggle}
              //       onClick={() => navigate(item.route)}
              //       textTransform="uppercase"
              //     >
              //       {item.name}
              //     </Button>
              //   ))}
              // </ButtonGroup>
              // <IconButton
              //   variant="ghost"
              //   icon={<FiMenu fontSize="1.25rem" />}
              //   aria-label="Open Menu"
              // />
              <Image
                src="https://cdn.shopify.com/s/files/1/0608/6724/8340/files/Logo_klamby_baru_banget_140x@2x.png?v=1643345083"
                h="7"
              />
            )}
          </HStack>

          <HStack spacing="8" flexShrink={0}>
            {!isDesktop ? (
              <Box>
                <AiOutlineSearch />
              </Box>
            ) : (
              <></>
            )}
            {isDesktop ? (
              <>
                <Box width="full" mx="8">
                  <SearchInput />
                </Box>

                <Popover islazy trigger={'hover'}>
                  <PopoverTrigger>
                    <Box>
                      <AiOutlineUser cursor="pointer" />
                    </Box>
                  </PopoverTrigger>
                  <PopoverContent width={'100%'} borderRadius="0">
                    <PopoverArrow />
                    <PopoverBody padding={'25px'}>
                      <Profile />
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </>
            ) : (
              <></>
            )}

            <NavAction.Desktop icon={RiHeartLine} href="/wishlist" />
            {/* <NavAction.Desktop icon={AiOutlineUser} href="/member/details" /> */}
            <Box position="relative">
              <NavAction.Desktop icon={RiShoppingCartLine} href="/cart" />
              <CartCount>1</CartCount>
            </Box>
            {!isDesktop ? (
              <IconButton
                variant="ghost"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            ) : (
              <></>
            )}
          </HStack>
        </Flex>
      </Box>

      {/* {isOpen && isDesktop ? (
        <ResourcesSubmenu isOpen={isDesktop && isOpen} />
      ) : (
        <></>
      )} */}
    </>
  );
};

export default Header;
