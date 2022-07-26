import {StyleSheet} from 'react-native';
import {Colors, Fonts, FontSizes} from '../../Styles/GeneralStyle';

const Style = StyleSheet.create({
  Card: {
    paddingStart: 11,
    paddingTop: 20,
    width: 177,
    height: 217,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 255)',
    marginVertical: 5,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 4,
  },
  CardImage: {
    alignItems: 'flex-start',
    width: 155,
    height: 150,
    borderRadius: 10,
    backgroundColor: Colors.DarkGray,
  },
  Price: {
    fontFamily: Fonts.bold,
    fontWeight: 'bold',
    fontSize: FontSizes.small,
    color: Colors.tertiary,
    marginStart: 5,
    marginTop: 15,
  },
  ProductTitle: {
    fontFamily: Fonts.regular,
    fontSize: FontSizes.small,
    color: Colors.LightBlack,
    marginStart: 5,
    marginTop: -29,
  },
});

export default Style;
