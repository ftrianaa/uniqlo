import { FormControl, HStack, useRadioGroup } from '@chakra-ui/react';
import { ColorPickerOption } from './ColorPickerOption';

export const ColorPicker = props => {
  const { options, rootProps, hideLabel, label, ...rest } = props;
  // console.log(options, 'fehbjhbfeebfh');
  const { getRadioProps, getRootProps, value } = useRadioGroup(rest);
  return (
    <FormControl {...rootProps}>
      {/* {!hideLabel && (
        <FormLabel fontSize="sm" fontWeight="medium">
          {label ?? `Color: ${selectedOption?.label ?? '-'}`}
        </FormLabel>
      )} */}
      <HStack {...getRootProps()}>
        {options.map(option => (
          <ColorPickerOption
            key={option.label}
            color={option.value}
            {...getRadioProps({
              value: option.value,
            })}
          />
        ))}
      </HStack>
    </FormControl>
  );
};
