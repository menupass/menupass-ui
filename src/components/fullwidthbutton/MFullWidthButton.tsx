import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import type { MFullWidthButtonTypes } from './MFullWidthButtonTypes';
import { MFullWidthButtonStyles } from './MFullWidthButtonStyles';
import { MFullWidthButtonColor } from './MFullWidthButtonColor';

export const MFullWidthButton = (props: MFullWidthButtonTypes) => {
  return (
    <TouchableOpacity
      disabled={props.disabled}
      activeOpacity={0.7}
      onPress={props.onPress}
      style={[
        MFullWidthButtonStyles.container,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          backgroundColor: props.disabled
            ? MFullWidthButtonColor.containerBgDisabled
            : props.bgColor
            ? props.bgColor
            : MFullWidthButtonColor.containerBg,
          height: props.height ? props.height : 56,
        },
      ]}
    >
      <Text
        style={[
          MFullWidthButtonStyles.text,
          {
            color: props.disabled
              ? MFullWidthButtonColor.labelDisabled
              : props.labelColor
              ? props.labelColor
              : MFullWidthButtonColor.label,
          },
        ]}
      >
        {props.label}
      </Text>
    </TouchableOpacity>
  );
};

export default MFullWidthButton;
