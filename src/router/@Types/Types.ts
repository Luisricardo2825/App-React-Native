import {MaterialBottomTabNavigationOptions} from '@react-navigation/material-bottom-tabs';

export interface Option extends MaterialBottomTabNavigationOptions {
  route?: any;
  size?: number;
  name?: string;
  IconFamily?: string;
}

export interface TabOptionsProps {
  [x: string]: Option;
}
