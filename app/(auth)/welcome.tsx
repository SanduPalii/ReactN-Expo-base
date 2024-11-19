import { Image, Text, TouchableOpacity, View } from 'react-native';
import React, { useRef, useState } from 'react';
import { router } from 'expo-router';
import Swiper from 'react-native-swiper';
import { onboarding } from '@/constants';
import CustomButton from '@/components/CustomButton';
import BgImg from '~/components/BgImg';
import { twMerge } from 'tailwind-merge';

const Onboarding = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === onboarding.length - 1;

  return (
    <BgImg>
      <TouchableOpacity
        onPress={() => {
          router.replace('/(root)/(tabs)/home');
        }}
        className="flex w-full items-end justify-end p-5">
        <Text className="text-md font-JakartaBold text-accent">Skip</Text>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View className="bg-textSecondary mx-1 h-[4px] w-[32px] rounded-full" />}
        activeDot={<View className="bg-primary mx-1 h-[4px] w-[32px] rounded-full" />}
        onIndexChanged={(index) => setActiveIndex(index)}>
        {onboarding.map((item) => (
          <View key={item.id} className="flex items-center justify-center p-5">
            <View className="m-10 flex w-full flex-row items-center justify-center">
              <Text className="text-textPrimary mx-10 text-center text-3xl font-bold">
                {item.title}
              </Text>
            </View>
            <Text className="font-JakartaSemiBold text-textPrimary mx-10 mt-3 text-center text-lg">
              {item.description}
            </Text>
            <Image source={item.image} resizeMode="contain" className="mt-10 h-[300px] w-full   " />
          </View>
        ))}
      </Swiper>
      <CustomButton
        title={isLastSlide ? 'Get started' : 'Next'}
        onPress={() =>
          isLastSlide ? router.replace('/(root)/(tabs)/home') : swiperRef.current?.scrollBy(1)
        }
        className="mt-1"
      />
    </BgImg>
  );
};

export default Onboarding;
