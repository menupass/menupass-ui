import { Platform, StyleSheet } from 'react-native';
import { MInputColors } from './MInputColors';
import { Fonts, FontsDefinition } from '../../fonts';

export const MInputStyle = StyleSheet.create({
  container: {
    height: 56,
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: MInputColors.containerBorder,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  label: {
    fontSize: 14,
    color: MInputColors.label,
    marginBottom: 5,
    fontFamily: FontsDefinition.bold,
  },
  input: {
    ...Fonts.p3,
    color: MInputColors.inputTextColor,
    width: Platform.OS === 'web' ? '100%' : '97%',
    height: 45,
  },
});
