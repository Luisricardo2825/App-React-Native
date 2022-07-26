import {Image} from 'react-native';
import React from 'react';
import Styles from './style';

interface AvatarProps {
  source: string;
}

const Avatar: React.FC<AvatarProps> = ({source}) => {
  return <Image source={{uri: source}} style={Styles.Avatar} />;
};
export default Avatar;
