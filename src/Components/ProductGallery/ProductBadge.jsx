import { Badge } from '@chakra-ui/react'

export const ProductBadge = (props) => (
  <Badge
    alignSelf="start"
    textTransform="none"
    fontSize="sm"
    fontWeight="semibold"
    lineHeight="1rem"
    borderRadius="base"
    py="1"
    px="2"
    {...props}
  />
)
