import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import type { MInputProps } from './MInputTypes';
import { MInputStyle } from './MInputStyle';
import { MInputColors } from './MInputColors';

export const MTextInput = (props: MInputProps) => {
  const [filled, setFilled] = useState(false);

  const setBorderStyle = (t: string) => {
    if (t.trim() !== '') {
      setFilled(true);
    } else {
      setFilled(false);
    }
  };

  const onChangeText = (t: string) => {
    setBorderStyle(t);
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
            borderColor: filled
              ? MInputColors.containerBorderFilled
              : MInputColors.containerBorder,
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
