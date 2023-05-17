import { FormControl, useRadioGroup } from '@chakra-ui/react';
import { SizePickerButton } from './SizePickerButton';

export const SizePicker = props => {
  const { options, rootProps, hideLabel, label, ...rest } = props;
  const { getRadioProps } = useRadioGroup(rest);
  return (
    <FormControl {...rootProps}>
      {options.map(option => (
        <SizePickerButton
          key={option.value}
          label={option.label}
          {...getRadioProps({
            value: option.value,
          })}
        />
      ))}
    </FormControl>
  );
};
