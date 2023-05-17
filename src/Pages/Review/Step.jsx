import { Box, Divider, HStack, Text } from '@chakra-ui/react';
import { StepCircle } from './StepCircle';

export const Step = props => {
  const { isActive, isCompleted, isLastStep, label, ...stackProps } = props;
  return (
    <Box>
      <Box>
        <Text fontWeight="bold" fontSize="9px" textTransform="uppercase">
          {label}
        </Text>
      </Box>
      <HStack flex={isLastStep ? '0' : '1'} spacing="0" {...stackProps}>
        <StepCircle isActive={isActive} isCompleted={isCompleted} />
        {!isLastStep && (
          <Divider
            orientation="horizontal"
            borderWidth="1px"
            borderColor={isCompleted ? 'accent' : 'inherit'}
            w={{ base: '16vw', lg: '3vw' }}
          />
        )}
      </HStack>
    </Box>
  );
};
