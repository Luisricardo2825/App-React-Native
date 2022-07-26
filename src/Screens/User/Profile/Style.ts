import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  FlatList: {width: '100%', backgroundColor: 'none', marginTop: 10},
  contentContainerStyle: {paddingBottom: 10, width: '100%'},
  ImageBackground: {
    flexDirection: 'column',
    backgroundColor: 'white',
    width: '100%',
    justifyContent: 'flex-start',
    height: '100%',
    alignItems: 'center',
    paddingBottom: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
  },
});

export default Styles;
