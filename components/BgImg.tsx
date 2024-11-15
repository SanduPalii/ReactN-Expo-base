import { View, Text, ImageBackground } from 'react-native';
import React, { Component } from 'react';
import { images } from '~/constants';

const BgImg = ({ children }) => {
  return <ImageBackground source={images.tap_background}>{children}</ImageBackground>;
};

export default BgImg;
