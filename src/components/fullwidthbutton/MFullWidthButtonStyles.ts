import { StyleSheet } from 'react-native';
import { MFullWidthButtonColor } from './MFullWidthButtonColor';
import { Fonts } from '../../fonts';

export const MFullWidthButtonStyles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: MFullWidthButtonColor.containerBg,
    borderRadius: 10,
  },
  text: {
    ...Fonts.p2,
    color: MFullWidthButtonColor.label,
    fontWeight: '700',
  },
});
