import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import {
  defaultCheckedColor,
  defaultLabelColor,
  styles,
} from './MRadioButtonStyles';
import type { MRadioButtonTypes } from './MRadioButtonTypes';

export const MRadioButton = ({
  items,
  onChangeValue,
  side,
  flexDirection,
  labelColor,
  value,
  checkedColor,
  notCheckedColor,
  style,
}: MRadioButtonTypes) => {
  const directionType =
    flexDirection === 'row'
      ? { ...styles.containerRow }
      : { ...styles.containerColumn };
  const radioChecked = [
    styles.radioChecked,
    {
      borderColor: checkedColor ? checkedColor : defaultCheckedColor,
      marginRight: side === 'left' ? 10 : 0,
      marginLeft: side === 'right' ? 10 : 0,
    },
  ];
  const radio = [
    styles.radio,
    {
      borderColor: notCheckedColor ? notCheckedColor : defaultCheckedColor,
      marginRight: side === 'left' ? 10 : 0,
      marginLeft: side === 'right' ? 10 : 0,
    },
  ];
  const disabled = { opacity: 0.4 };
  return (
    <>
      {items.map((item, index: number) => (
        <View style={[directionType, style]} key={item.value}>
          <TouchableOpacity
            disabled={item.disabled}
            onPress={() => onChangeValue(item.value, index)}
            style={[styles.radioContainer, item.disabled ? disabled : null]}
            activeOpacity={0.7}
          >
            {side === 'left' && (
              <View style={item.value === value ? radioChecked : radio} />
            )}
            <Text
              style={[
                styles.label,
                { color: labelColor ? labelColor : defaultLabelColor },
              ]}
            >
              {item.label}
            </Text>
            {side === 'right' && (
              <View style={item.value === value ? radioChecked : radio} />
            )}
          </TouchableOpacity>
        </View>
      ))}
    </>
  );
};

export default MRadioButton;
