import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { ButtonProps } from '@/types/type';

const CustomButton = ({ onPress, title, className, ...props }: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={twMerge(
        'w-full flex-row items-center justify-center rounded-full p-5 shadow-md shadow-neutral-400/70',
        className
      )}>
      <Text className={twMerge('text-lg font-bold', className)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
