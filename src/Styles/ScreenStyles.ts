import {StyleSheet} from 'react-native';
import {Fonts} from './GeneralStyle';
import {deviceWidth} from '../Utils/Dimensions';

const ScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    height: '100%',
    width: deviceWidth,
    backgroundColor: '#ffffff',
    position: 'absolute',
    marginTop: 0,
    bottom: 0,
  },
  Header: {
    flexDirection: 'row',
    maxHeight: '9%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    top: 0,
    marginTop: 0,
    backgroundColor: '#ffffff',
  },
  HeaderTitle: {
    fontFamily: Fonts.regular,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#CC2E2E',
  },
});

export default ScreenStyles;
