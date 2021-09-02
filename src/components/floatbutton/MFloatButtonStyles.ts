import { StyleSheet } from 'react-native';
import { MFloatButtonColors } from './MFloatButtonColors';

export const MFloatButtonStyles = StyleSheet.create({
  container: {
    width: 56,
    height: 56,
    borderRadius: 56 / 2,
    backgroundColor: MFloatButtonColors.containerBg,
    position: 'absolute',
    bottom: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
