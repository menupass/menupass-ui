import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import type { MInputProps } from './MInputTypes';
import { MInputStyle } from './MInputStyle';
import { MInputColors } from './MInputColors';
import IMask from 'imask';
import { Eye, EyeBlock } from '../icons';

export const MTextInput = (props: MInputProps) => {
  const [color, setColor] = useState(MInputColors.containerBorder);
  const [secureTextEntry, setSecureTextEntry] = useState(props.secureTextEntry);

  const setBorderStyle = (t: string, hasError: boolean) => {
    if (t.trim() !== '' && hasError) {
      setColor(MInputColors.error);
    } else if (t.trim() !== '' && !hasError) {
      setColor(MInputColors.containerBorderFilled);
    } else {
      setColor(MInputColors.containerBorder);
    }
  };

  const maskCreator = IMask.createMask({ mask: props.mask || '' });

  const onChangeText = (t: string) => {
    const maskedText = maskCreator.resolve(t);

    if (props.hasError) {
      setBorderStyle(t, true);
    } else {
      setBorderStyle(t, false);
    }
    if (props.onChangeText) {
      return props.onChangeText(props.mask ? maskedText : t);
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
          secureTextEntry={secureTextEntry}
          style={MInputStyle.input}
          placeholderTextColor={MInputColors.placeholderColor}
          onChangeText={onChangeText}
        />
        {props.isPassword && secureTextEntry && (
          <TouchableOpacity onPress={() => setSecureTextEntry(false)}>
            <Eye />
          </TouchableOpacity>
        )}
        {props.isPassword && !secureTextEntry && (
          <TouchableOpacity onPress={() => setSecureTextEntry(true)}>
            <EyeBlock />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default MTextInput;
