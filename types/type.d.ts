import { TextInputProps, TouchableOpacityProps } from 'react-native';

declare interface ButtonProps extends TouchableOpacityProps {
  title: string;
  className?: string;
}
