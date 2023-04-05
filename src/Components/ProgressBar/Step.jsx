import { Box, Divider, HStack, Stack, Text } from '@chakra-ui/react';
import { StepCircle } from './StepCircle';

export const Step = props => {
  const { isActive, isCompleted, isLastStep, ...stackProps } = props;
  return (
    <Box>
      <HStack flex={isLastStep ? '0' : '1'} spacing="0" {...stackProps}>
        <StepCircle isActive={isActive} isCompleted={isCompleted} />
        {!isLastStep && (
          <Divider
            orientation="horizontal"
            borderWidth="1px"
            borderColor={isCompleted ? 'accent' : 'inherit'}
            w="5vw  "
          />
        )}
      </HStack>
      <Box>
        <Text>pas</Text>
      </Box>
    </Box>
  );
};
