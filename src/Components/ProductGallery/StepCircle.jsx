import { Box, Circle, Icon, Text } from '@chakra-ui/react';
import { HiCheck } from 'react-icons/hi';

export const StepCircle = props => {
  const { isCompleted, isActive, label } = props;
  return (
    <Box
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
    >
      <Circle
        size="4"
        bg={isCompleted ? 'accent' : 'inherit'}
        borderWidth={isCompleted ? '0' : '2px'}
        borderColor={isActive ? 'accent' : 'inherit'}
        {...props}
      >
        {isCompleted ? (
          <Icon as={HiCheck} color="inverted" boxSize="5" />
        ) : (
          // <Circle bg={isActive ? 'accent' : 'border'} size="3" />
          <Circle bg={isActive ? 'accent' : 'border'} size="4" />
        )}
      </Circle>

      <Box>
        <Text>{label}</Text>
      </Box>
    </Box>
  );
};
