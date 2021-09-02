import { StyleSheet } from 'react-native';
import { MInputColors } from './MInputColors';
import { Fonts } from '../../fonts';

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
    fontWeight: '700',
  },
  input: {
    ...Fonts.p3,
    color: MInputColors.inputTextColor,
    width: '100%',
    height: 45,
  },
});
