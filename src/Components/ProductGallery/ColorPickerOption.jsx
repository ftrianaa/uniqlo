import { chakra, Square, useRadio, useTheme } from '@chakra-ui/react';

export const ColorPickerOption = props => {
  const { color } = props;
  const { getInputProps, htmlProps } = useRadio(props);
  const theme = useTheme();
  return (
    <chakra.label cursor="pointer" {...htmlProps}>
      <chakra.input {...getInputProps()} />
      <Square size="3" bg={color}></Square>
    </chakra.label>
  );
};
