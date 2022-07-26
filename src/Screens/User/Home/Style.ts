import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../Styles/GeneralStyle';
import {deviceHeight} from '../../../Utils/Dimensions';

const Style = StyleSheet.create({
  Titles: {
    fontFamily: Fonts.bold,
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'flex-start',
    marginTop: 3,
    marginLeft: 20,
    marginBottom: 10,
    color: Colors.HomeSectionTitleColor,
  },
  FlatList: {
    marginBottom: 0,
    marginTop: 0,
    height: '75%',
  },
  HorizontalBox: {maxHeight: deviceHeight * 0.15, marginHorizontal: 20},
  FlatListContainer: {paddingBottom: 120},
});
export default Style;
