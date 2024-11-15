import { Image, Text, TouchableOpacity, View } from 'react-native';
import React, { useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import Swiper from 'react-native-swiper';
import { onboarding } from '@/constants';
import CustomButton from '@/components/CustomButton';
import BgImg from '~/components/BgImg';

const Onboarding = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === onboarding.length - 1;

  return (
    <BgImg>
      <SafeAreaView className="flex h-full items-center justify-between bg-white">
        <TouchableOpacity
          onPress={() => {
            router.replace('/(root)/(tabs)/home');
          }}
          className="flex w-full items-end justify-end p-5">
          <Text className="text-md font-JakartaBold text-black">Skip</Text>
        </TouchableOpacity>
        <Swiper
          ref={swiperRef}
          loop={false}
          dot={<View className="mx-1 h-[4px] w-[32px] rounded-full bg-[#E2E8F0]" />}
          activeDot={<View className="mx-1 h-[4px] w-[32px] rounded-full bg-[#0286FF]" />}
          onIndexChanged={(index) => setActiveIndex(index)}>
          {onboarding.map((item) => (
            <View key={item.id} className="flex items-center justify-center p-5">
              <Image source={item.image} resizeMode="contain" className="h-[300px] w-full" />
              <View className="m-10 flex w-full flex-row items-center justify-center">
                <Text className="mx-10 text-center text-3xl font-bold text-black">
                  {item.title}
                </Text>
              </View>
              <Text className="font-JakartaSemiBold mx-10 mt-3 text-center text-lg text-[#858585]">
                {item.description}
              </Text>
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
      </SafeAreaView>
    </BgImg>
  );
};

export default Onboarding;
