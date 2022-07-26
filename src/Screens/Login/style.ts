import {StyleSheet} from 'react-native';
import {Colors, Fonts, FontSizes} from '../../Styles/GeneralStyle';
import {deviceHeight, deviceWidth} from '../../Utils/Dimensions';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    height: deviceHeight,
    width: deviceWidth,
    backgroundColor: Colors.White,
    position: 'absolute',
    marginTop: 0,
  },
  Header: {
    flexDirection: 'row',
    maxHeight: '9%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    top: 0,
    marginTop: 0,
    backgroundColor: Colors.White,
  },
  HeaderTitle: {
    fontFamily: Fonts.regular,
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.tertiary,
    marginLeft: '25%',
  },
  SignInButton: {
    margin: deviceWidth * (5 / 100),
    width: deviceWidth * (50 / 100),
    paddingStart: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: deviceHeight * (7 / 100),
    backgroundColor: Colors.tertiary,
  },
  RegisterText: {
    fontFamily: Fonts.regular,
    fontSize: FontSizes.small,
    color: Colors.tertiary,
    textDecorationLine: 'underline',
  },
  IconStyle: {alignSelf: 'flex-end', margin: 5},
  slide: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 81,
    height: 81,
    borderRadius: 20,
    backgroundColor: Colors.White,
    marginHorizontal: 5,
    marginVertical: 0,
    marginTop: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 4,
  },
});

export default Styles;
