import { StyleSheet } from 'react-native';
import { MAvatarColors } from './MAvatarColors';
import { Fonts } from '../../fonts';

export const MAvatarStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  photoContainer: {
    width: 64,
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
    backgroundColor: MAvatarColors.photoContainer,
  },
  userInfoContainer: {
    marginLeft: 17,
  },
  username: {
    ...Fonts.p2,
    color: MAvatarColors.username,
  },
  status: {
    ...Fonts.p4,
    color: MAvatarColors.status,
  },
});
