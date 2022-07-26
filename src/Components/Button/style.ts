//Style a button from react-native using typescript:

import {StyleSheet} from 'react-native';
import {Colors, Fonts, FontSizes} from '../../Styles/GeneralStyle';

export const styles = StyleSheet.create({
  Button: {
    alignItems: 'flex-start',
    paddingStart: 74,
    paddingTop: 14,
    width: 194,
    height: 51,
    borderRadius: 25.5,
    backgroundColor: Colors.tertiary,
  },
  ButtonText: {
    fontFamily: Fonts.regular,
    fontWeight: 'bold',
    fontSize: FontSizes.medium,
    color: Colors.White,
  },
});
