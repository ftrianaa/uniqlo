import {
  Box,
  Button,
  Container,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FiPlayCircle } from 'react-icons/fi';
import { items, tutorials } from './data';

export const ResourcesPopover = () => (
  // <Popover trigger="hover" openDelay={0} placement="bottom" gutter={12}>
  //   {({ isOpen }) => (
  //     <>
  //       <PopoverTrigger>
  //         <Button variant="link">Resources</Button>
  //       </PopoverTrigger>
  //       <PopoverContent
  //         width={{
  //           base: 'sm',
  //           md: '100%',
  //         }}
  //       >
  <Box
    bg="bg-surface"
    boxShadow="md"
    pt={{
      base: '4',
      md: '8',
    }}
    pb="8"
    // onMouseOver={open}
  >
    <Container>
      <Stack
        direction={{
          base: 'column',
          lg: 'row',
        }}
        spacing={{
          base: '14',
          lg: '16',
        }}
      >
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
          }}
          maxW={{
            lg: '2xl',
          }}
          gap={6}
        >
          {items.map((item, id) => (
            <Stack key={id} spacing="3">
              <Text fontSize="sm" fontWeight="medium" color="accent">
                {item.title}
              </Text>
              <Stack>
                {item.links.map((link, id) => (
                  <Link variant="menu" href={link.href} key={id}>
                    <Stack spacing="4" direction="row" p="3">
                      <Icon as={link.icon} boxSize="6" color="accent" />
                      <Stack spacing="1">
                        <Text fontWeight="medium">{link.title}</Text>
                        <Text fontSize="sm" color="muted">
                          {link.description}
                        </Text>
                      </Stack>
                    </Stack>
                  </Link>
                ))}
              </Stack>
            </Stack>
          ))}
        </SimpleGrid>
        {tutorials.map((item, id) => (
          <Stack key={id} spacing="6">
            <Text fontSize="sm" fontWeight="medium" color="accent">
              {item.title}
            </Text>
            <Stack
              spacing="8"
              direction={{
                base: 'column',
                md: 'row',
                lg: 'column',
              }}
            >
              {item.links.map((link, id) => (
                <Stack
                  direction={{
                    base: 'column',
                    lg: 'row',
                  }}
                  spacing="6"
                  key={id}
                >
                  {/* <Box>
                            <AspectRatio
                              ratio={3 / 2}
                              width={{
                                base: '60',
                                lg: '40',
                              }}
                            >
                              <Image
                                borderRadius="md"
                                objectFit="cover"
                                src={link.previewImage}
                                alt={link.title}
                              />
                            </AspectRatio>
                          </Box> */}

                  <Stack spacing="3" shouldWrapChildren>
                    <Stack spacing="1">
                      <Text fontWeight="medium">{link.title}</Text>
                      <Text fontSize="sm" color="muted">
                        {link.description}
                      </Text>
                    </Stack>
                    <Button
                      variant="link"
                      colorScheme="blue"
                      leftIcon={<FiPlayCircle fontSize="1.25rem" />}
                    >
                      Watch video
                    </Button>
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Container>
  </Box>
  //       </PopoverContent>
  //     </>
  //   )}
  // </Popover>
);
