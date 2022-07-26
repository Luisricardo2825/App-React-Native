import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  FlatList: {width: '100%', backgroundColor: 'none', marginTop: 10},
  contentContainerStyle: {paddingBottom: 10, width: '100%'},
  Background: {
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
  contentBox: {
    flexDirection: 'column',
    flex: 1,
    width: '100%',
    borderBottomColor: '#383737',
    alignItems: 'center',
    backgroundColor: '#0000005c',
  },
  additionalInformationContainer: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});

export default Styles;
