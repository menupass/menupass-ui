import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import type { MInputProps } from './MInputTypes';
import { MInputStyle } from './MInputStyle';
import { MInputColors } from './MInputColors';

export const MTextInput = (props: MInputProps) => {
  const [color, setColor] = useState(MInputColors.containerBorder);

  const setBorderStyle = (t: string, hasError: boolean) => {
    if (t.trim() !== '' && hasError) {
      setColor(MInputColors.error);
    } else if (t.trim() !== '' && !hasError) {
      setColor(MInputColors.containerBorderFilled);
    } else {
      setColor(MInputColors.containerBorder);
    }
  };

  const onChangeText = (t: string) => {
    if (props.hasError) {
      setBorderStyle(t, true);
    } else {
      setBorderStyle(t, false);
    }
    if (props.onChangeText) {
      return props.onChangeText(t);
    }
  };

  return (
    <View>
      <Text style={MInputStyle.label}>{props.label}</Text>
      <View
        style={[
          MInputStyle.container,
          {
            borderColor: color,
          },
        ]}
      >
        <TextInput
          {...props}
          style={MInputStyle.input}
          placeholderTextColor={MInputColors.placeholderColor}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
};

export default MTextInput;
