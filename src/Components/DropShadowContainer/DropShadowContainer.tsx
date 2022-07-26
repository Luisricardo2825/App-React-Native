import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {deviceHeight, deviceWidth} from '../../Utils/Dimensions';
import {DropShadowContainerProps} from './@Types/DropShadowContainer';

const DropShadowContainer: React.FC<DropShadowContainerProps> = ({
  children,
  ContainerStyle,
  ContentStyle,
}) => {
  const {DropShadowContainerStyle, DropShadowContentContainer} = styles;

  return (
    <View
      style={{
        ...DropShadowContainerStyle,
        ...ContainerStyle,
      }}>
      <View
        style={{
          ...DropShadowContentContainer,
          ...ContentStyle,
        }}>
        {children}
      </View>
    </View>
  );
};
interface Styles {
  DropShadowContainerStyle: ViewStyle;
  DropShadowContentContainer: ViewStyle;
}
const styles = StyleSheet.create<Styles>({
  DropShadowContainerStyle: {
    height: deviceHeight,
    width: deviceWidth,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    overflow: 'hidden',
  },
  DropShadowContentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '105%',
    width: '100%',
    backgroundColor: '#ffffff',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    overflow: 'hidden',
  },
});

export default DropShadowContainer;
