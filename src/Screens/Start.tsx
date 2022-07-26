import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Button from '../Components/Button/Button';
import {StartProps} from './@Types/Types';
import {deviceHeight, deviceWidth} from '../Utils/Dimensions';
import {Colors, Fonts} from '../Styles/GeneralStyle';

const Start: React.FC<StartProps> = ({navigation}) => {
  const handleLogin = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <View style={styles.secondContainer}>
        <Text style={styles.LogoText}> Logo </Text>
        <Text style={styles.Register}>
          <Button title="Sing in" onPress={handleLogin} />
        </Text>
        <Text style={styles.Register}> Register </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    flex: 1,
    height: deviceHeight,
  },
  secondContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // alignItems: 'flex-sta',
    paddingTop: '20%',
    width: deviceWidth,
    height: '100%',
    backgroundColor: Colors.White,
  },
  LogoText: {
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
    fontSize: 80,
    color: Colors.tertiary,
    textAlign: 'center',
    width: 40,
  },
  Register: {
    fontFamily: Fonts.regular,
    fontWeight: 'bold',
    fontSize: 14,
    textDecorationLine: 'underline',
    color: Colors.tertiary,
    marginTop: 10,
    flex: 1,
  },
});

export default Start;
