import {
  chakra,
  Circle,
  Icon,
  Square,
  useColorModeValue,
  useRadio,
  useTheme,
  VisuallyHidden,
} from '@chakra-ui/react';
import { isDark } from '@chakra-ui/theme-tools';
import { FiCheck } from 'react-icons/fi';

export const ColorPickerOption = props => {
  const { color, value } = props;
  const { getInputProps, htmlProps, getCheckboxProps, getLabelProps, state } =
    useRadio(props);
  const theme = useTheme();
  return (
    <chakra.label cursor="pointer" {...htmlProps}>
      <chakra.input {...getInputProps()} />
      <Square size="3" bg={color}></Square>
    </chakra.label>
  );
};
