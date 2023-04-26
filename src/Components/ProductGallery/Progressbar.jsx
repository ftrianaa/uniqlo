import { Box, Container, HStack } from '@chakra-ui/react';
import { Step } from './Step';
import { useStep } from './useStep';

export const ProgressBar = () => {
  const numberOfSteps = [
    { id: 1, value: 'Ketat' },
    { id: 2, value: 'ㅤ' },
    { id: 3, value: 'Pas' },
    { id: 4, value: 'ㅤ' },
    { id: 5, value: 'Longgar' },
  ];

  const [currentStep, { setStep }] = useStep({
    maxStep: numberOfSteps.length,
    initialStep: 2,
  });
  return (
    <Box bg="bg-surface">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minH={{ base: '20', lg: '40' }}
        w="100%"
      >
        <HStack spacing="0" justify="space-evenly" flex="1">
          {numberOfSteps.map((item, id) => (
            <Step
              key={id}
              // onClick={() => setStep(id)}
              isActive={currentStep === id}
              // isCompleted={currentStep > id}
              isLastStep={numberOfSteps.length === id + 1}
              label={item.value}
            />
          ))}
        </HStack>
      </Box>
    </Box>
  );
};
