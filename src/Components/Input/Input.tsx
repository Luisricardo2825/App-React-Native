/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {deviceWidth} from '../../Utils/Dimensions';
import {FontSizes, Colors} from '../../Styles/GeneralStyle';
import {InputProps} from './@Types/Input';

const Input: React.FC<InputProps> = props => {
  const {label, placeholder, error, touched} = props;
  const validationColor = !touched
    ? Colors.tertiary
    : error
    ? Colors.LightBlack
    : Colors.tertiary;
  return (
    <View
      style={{
        alignItems: 'flex-start',
        width: deviceWidth / 1.5,
      }}>
      <Text
        style={{
          fontFamily: 'Open Sans',
          fontWeight: 'bold',
          fontSize: FontSizes.small,
          color: validationColor,
        }}>
        {label}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
        }}>
        <TextInput
          style={{
            fontFamily: 'Open Sans',
            fontWeight: 'bold',
            fontSize: FontSizes.large,
            color: Colors.LightBlack,
            padding: 0,
            width: deviceWidth / 1.5,
          }}
          placeholder={placeholder}
          {...props}
        />
      </View>
      <View
        style={{
          backgroundColor: validationColor,
          width: deviceWidth / 1.5,
          height: 2,
        }}
      />
      <Text
        style={{
          fontFamily: 'Open Sans',
          fontSize: FontSizes.small,
          color: Colors.warning,
          padding: 0,
          marginBottom: 5,
          height: 15,
        }}>
        {error}
      </Text>
    </View>
  );
};

export default Input;
