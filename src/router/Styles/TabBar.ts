import {StyleSheet} from 'react-native';
import {Colors} from '../../Styles/GeneralStyle';

const Style = StyleSheet.create({
  tabBar: {
    padding: 20,
    paddingTop: 0,
    backgroundColor: Colors.tertiary,
    maxHeight: 50,
    width: '90%',
    position: 'absolute',
    bottom: 15,
    left: 20,
    right: 20,
    borderRadius: 30,
    shadowColor: '#000',
    overflow: 'hidden',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 1.58,
    shadowRadius: 16.0,
    elevation: 4,
  },
});

export default Style;
