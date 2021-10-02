import {ViewStyle, TouchableOpacityProps, TextStyle} from 'react-native';
export interface HyperButtonProps extends TouchableOpacityProps {
  containerStyles?: ViewStyle;
  imgStyle?: ViewStyle;
  textStyle?: TextStyle;
  onPress?: () => void;
  imgWidth?: number;
  imgHeight?: number;
  img?: any;
  text?: string;
}
