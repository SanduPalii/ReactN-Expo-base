import { View, Text, ImageBackground } from 'react-native';
import React from 'react';
import { images } from '~/constants';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

const BgImg = ({ children }: { children: React.ReactNode }) => {
  return (
    <ImageBackground source={images.tap_background}>
      <StatusBar style="light" />
      <SafeAreaView className="flex h-full items-center justify-between ">{children}</SafeAreaView>
    </ImageBackground>
  );
};

export default BgImg;
