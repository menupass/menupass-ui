import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import type { MInputProps } from './MInputTypes';
import { MInputStyle } from './MInputStyle';
import { MInputColors } from './MInputColors';
import IMask from 'imask';
import { Eye, EyeBlock } from '../icons';
import CurrencyInput from 'react-native-currency-input';
import type { MCurrencyProps } from './MInputTypes';

export const MTextInput = (props: MInputProps | MCurrencyProps) => {
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

  if (props.isCurrency && !props.onChangeValue) {
    throw 'onChangeValue prop is required for currency input';
  }

  return (
    <View>
      <Text style={MInputStyle.label}>{props.label}</Text>
      <View
        style={[
          MInputStyle.container,
          {
            borderColor: color,
            height: props.height ? props.height : 56,
            borderRadius: props.borderRadius ? props.borderRadius : 10,
          },
        ]}
      >
        {props.isCurrency ? (
          <CurrencyInput
            prefix={props.prefix}
            delimiter={props.delimiter}
            separator={props.separator}
            precision={props.precision}
            minValue={props.minValue}
            value={props.value}
            style={[
              MInputStyle.input,
              {
                height: props.height ? props.height - 11 : 45,
              },
            ]}
            onChangeValue={props.onChangeValue}
          />
        ) : (
          <>
            <TextInput
              {...props}
              secureTextEntry={secureTextEntry}
              style={[
                MInputStyle.input,
                {
                  height: props.height ? props.height - 11 : 45,
                },
              ]}
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
          </>
        )}
      </View>
    </View>
  );
};

export default MTextInput;
