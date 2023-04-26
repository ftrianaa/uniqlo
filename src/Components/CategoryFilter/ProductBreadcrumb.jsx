import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { HiChevronRight } from 'react-icons/hi';

export const ProductBreadcrumb = props => {
  const { data } = props;
  return (
    <Breadcrumb
      fontSize="sm"
      fontWeight="medium"
      color={mode('gray.600', 'gray.400')}
      separator={'/'}
      my="5"
    >
      {data.map((breadcrumb, index) => (
        <BreadcrumbItem
          key={breadcrumb.slug}
          isCurrentPage={index === data.length - 1}
        >
          <BreadcrumbLink href={breadcrumb.slug}>
            {breadcrumb.label}
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};
