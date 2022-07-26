import {TextInputProps} from 'react-native';
export interface InputProps extends TextInputProps {
  label?: string;
  onChangeText?: (text: string) => void;
  value?: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  error?: string;
  touched?: boolean;
}
