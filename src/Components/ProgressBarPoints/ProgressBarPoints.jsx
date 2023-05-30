import { Box, Container, HStack } from '@chakra-ui/react';
import { Step } from './Step';
import { useStep } from './useStep';

export const ProgressBarPoins = () => {
  const numberOfSteps = [
    { id: 1, value: 'Newbie' },
    { id: 2, value: 'Intermediate' },
    { id: 3, value: 'Hard' },
  ];

  const [currentStep, { setStep }] = useStep({
    maxStep: numberOfSteps.length,
    initialStep: 2,
  });
  return (
    <Box bg="bg-surface">
      {/* <Container
        display="flex"
        justifyContent="center"
        alignItems="center"
        minH="40"
      > */}
      <HStack spacing="0" justify="space-evenly" flex="1">
        {numberOfSteps.map((item, id) => (
          <Step
            key={id}
            cursor="pointer"
            onClick={() => setStep(id)}
            isActive={currentStep === id}
            isCompleted={currentStep > id}
            isLastStep={numberOfSteps.length === id + 1}
            label={item.value}
          />
        ))}
      </HStack>
      {/* </Container> */}
    </Box>
  );
};
