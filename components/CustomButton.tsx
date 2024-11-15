import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { ButtonProps } from '@/types/type';

const CustomButton = ({ onPress, title, className, ...props }: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={twMerge(
        'w-10/12 items-center rounded-full bg-[#0077B6] p-5 shadow-md shadow-neutral-400/70',
        className
      )}>
      <Text className={twMerge('items-center text-lg text-white', className)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
