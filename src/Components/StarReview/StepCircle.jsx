import { Circle, Icon, useColorModeValue } from '@chakra-ui/react';
import { HiCheck } from 'react-icons/hi';
import { FaStar } from 'react-icons/fa';

export const StepCircle = props => {
  const { isCompleted, isActive } = props;
  const color = useColorModeValue('gray.200', 'gray.600');
  const activeColor = useColorModeValue('yellow.400', 'yellow.200');
  return (
    <Icon
      // size="4"
      // bg={isCompleted ? 'accent' : 'inherit'}
      // borderWidth={isCompleted ? '0' : '2px'}
      // borderColor={isActive ? 'accent' : 'inherit'}
      as={FaStar}
      color={isCompleted ? activeColor : color}
      // color={color}
      {...props}
    >
      {/* {isCompleted ? (
        <Icon as={FaStar} color={activeColor} boxSize="5" />
      ) : (
        // <Circle bg={isActive ? 'accent' : 'border'} size="3" />
        <Icon as={FaStar} color={color} boxSize="5" />
      )} */}
    </Icon>
  );
};
