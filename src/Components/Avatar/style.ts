import {StyleSheet} from 'react-native';
import {Colors} from '../../Styles/GeneralStyle';

const Styles = StyleSheet.create({
  Avatar: {
    alignItems: 'flex-start',
    width: 130,
    height: 130,
    borderRadius: 150,
    backgroundColor: Colors.White,
    borderWidth: 4,
    borderColor: Colors.tertiary,
    marginTop: 20,
  },
});

export default Styles;
