import React from 'react';
import {Text, Pressable} from 'react-native';
import {ButtonProps} from './@Types/Buton';
import {styles} from './style';

const Button: React.FC<ButtonProps> = ({title, onPress, style, CustomText}) => {
  const buttonStyle = [styles.Button, style];
  return (
    <Pressable style={buttonStyle} onPress={onPress}>
      <Text style={{...styles.ButtonText, ...CustomText}}>{title}</Text>
    </Pressable>
  );
};
export default Button;
