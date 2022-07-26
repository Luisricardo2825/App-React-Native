import {ViewStyle, TextStyle, StyleProp} from 'react-native';

export interface ButtonProps {
  onPress?: () => void;
  title?: string;
  color?: string;
  accessibilityLabel?: string;
  style?: StyleProp<ViewStyle>;
  CustomText?: TextStyle;
}
