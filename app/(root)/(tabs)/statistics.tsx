import { View, Text } from 'react-native';
import React from 'react';
import BgImg from '~/components/BgImg';

const Statistics = () => {
  return (
    <BgImg>
      <View className="flex-1 items-center justify-center">
        <Text className="text-textPrimary items-center justify-center text-2xl">Statistics</Text>
      </View>
    </BgImg>
  );
};

export default Statistics;
