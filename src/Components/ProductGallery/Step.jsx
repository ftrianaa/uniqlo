import { Box, Divider, HStack, Stack, Text } from '@chakra-ui/react';
import { StepCircle } from './StepCircle';

export const Step = props => {
  const { isActive, isCompleted, isLastStep, label, ...stackProps } = props;
  return (
    <Box
      display="flex"
      flexDir="column"
      alignItems="left"
      justifyContent="center"
      // h="40px"
    >
      <HStack
        flex={isLastStep ? '0' : '1'}
        align="normal"
        justify="normal"
        spacing="0"
        {...stackProps}
      >
        <StepCircle
          isActive={isActive}
          isCompleted={isCompleted}
          label={label}
        />
        {!isLastStep && (
          <Box pt="2">
            <Divider
              orientation="horizontal"
              borderWidth="1px"
              borderColor={isCompleted ? 'accent' : 'inherit'}
              w={{ base: '13vw', lg: '5vw  ' }}
            />
          </Box>
        )}
      </HStack>
    </Box>
  );
};
