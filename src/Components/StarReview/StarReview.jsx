import { Box, Container, HStack, Text } from '@chakra-ui/react';
import { Step } from './Step';
import { useStep } from './useStep';
import { useState } from 'react';

export const StarReview = () => {
  const numberOfSteps = [
    { id: 1, value: 'Buruk' },
    { id: 2, value: 'Cukup' },
    { id: 3, value: 'Biasa' },
    { id: 4, value: 'Baik' },
    { id: 5, value: 'Sangat baik' },
  ];
  const [rate, setRate] = useState(0);
  const [currentStep, { setStep }] = useStep({
    maxStep: numberOfSteps.length,
    initialStep: 2,
  });
  let text = '';
  // console.log(setStep, 'curr step');
  return (
    <Box bg="bg-surface">
      {/* <Container
        display="flex"
        justifyContent="center"
        alignItems="center"
        minH="40"
      > */}
      <HStack spacing="0" justify="space-evenly" flex="1">
        {numberOfSteps.map((item, id) => {
          if (currentStep === id) {
            text = (
              <Text fontSize="14px" color="#ababab">
                {item.value}
              </Text>
            );
          }
          return (
            <Step
              key={id}
              cursor="pointer"
              onClick={() => setStep(id)}
              isActive={currentStep === id}
              isCompleted={currentStep >= id}
              isLastStep={numberOfSteps.length === id + 1}
              label={item.value}
            />
          );
        })}
        {text}
      </HStack>
      {/* </Container> */}
    </Box>
  );
};
