import { StyleSheet } from 'react-native';
import { MSelectColors } from './MSelectColors';
import { FontsDefinition } from '../../fonts';

export const styles = StyleSheet.create({
  container: {
    opacity: 0.5,
  },
  picker: {
    height: 56,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: MSelectColors.containerBorder,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  label: {
    fontSize: 14,
    color: MSelectColors.label,
    marginBottom: 5,
    fontWeight: '700',
    width: '100%',
    fontFamily: FontsDefinition.regular,
  },
  itemFont: {
    fontFamily: FontsDefinition.regular,
    color: MSelectColors.label,
  },
});
