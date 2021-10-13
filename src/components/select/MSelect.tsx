import React from 'react';
import { Text, View } from 'react-native';
import type { MSelectTypes, MSelectItems } from './MSelectTypes';
import { Picker } from '@react-native-picker/picker';
import { styles } from './MSelectStyles';

export const MSelect = ({
  label,
  values,
  selectedValue,
  onValueChange,
}: MSelectTypes) => (
  <View>
    <Text style={styles.label}>{label}</Text>
    <Picker
      style={styles.picker}
      selectedValue={selectedValue}
      onValueChange={onValueChange}
      itemStyle={styles.itemFont}
    >
      {values.map((item: MSelectItems) => (
        <Picker.Item label={item.label} value={item.value} />
      ))}
    </Picker>
  </View>
);

export default MSelect;
