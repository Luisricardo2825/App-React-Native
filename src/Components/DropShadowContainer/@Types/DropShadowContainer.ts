import React from 'react';
import {ViewStyle} from 'react-native';
export interface DropShadowContainerProps {
  children: React.ReactNode;
  shadowColor?: string;
  shadowOffset?: {
    width: number;
    height: number;
  };
  shadowOpacity?: number;
  shadowRadius?: number;
  ContainerStyle?: ViewStyle;
  ContentStyle?: ViewStyle;
}
