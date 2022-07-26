import React from 'react';
import {ScrollView} from 'react-native';
import {HorizontalScrollBoxProps} from './@Types/HorizontalScrollBox';
import Style from './Style';

const HorizontalScrollBox: React.FC<HorizontalScrollBoxProps> = ({
  children,
  style,
}) => {
  return (
    <ScrollView
      horizontal={true}
      alwaysBounceHorizontal
      showsHorizontalScrollIndicator={false}
      style={Style(style).HorizontalScrollBox}>
      {children}
    </ScrollView>
  );
};

export default HorizontalScrollBox;
