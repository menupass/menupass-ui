import { StyleSheet } from 'react-native';
import { fonts } from '../../../example/src/consts/fonts';

export const defaultLabelColor = '#000000';
export const defaultCheckedColor = '#000000';

export const styles = StyleSheet.create({
  containerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerColumn: {
    flexDirection: 'column',
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontFamily: fonts.Regular,
    color: defaultLabelColor,
    fontWeight: '700',
  },
  radioChecked: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: defaultCheckedColor,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: defaultCheckedColor,
  },
});
