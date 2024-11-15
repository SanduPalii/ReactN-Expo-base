import { icons } from '@/constants';
import { Tabs } from 'expo-router';
import { Image, ImageSourcePropType, View } from 'react-native';

const TabIcon = ({ source, focused }: { source: ImageSourcePropType; focused: boolean }) => (
  <View
    className={`mt-2 flex flex-row items-baseline justify-center rounded-full ${
      focused ? 'bg-red-400' : ''
    }`}>
    <View className={`h-10 w-10 items-center ${focused ? 'bg-green-400' : ''}`}>
      <Image source={source} tintColor="white" resizeMode="contain" className="mt-2 h-6 w-6" />
    </View>
  </View>
);

const Layout = () => {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'white',
        tabBarStyle: {
          backgroundColor: '#252525',
          paddingBottom: 11,
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'stretch',
          flexDirection: 'row',
          position: 'absolute',
        },
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Connection',
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon focused={focused} source={icons.bluetooth_white} />,
        }}
      />
      <Tabs.Screen
        name="statistics"
        options={{
          title: 'Statistics',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} source={icons.statistics_white} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon focused={focused} source={icons.settings_white} />,
        }}
      />
      <Tabs.Screen
        name="help"
        options={{
          title: 'Help',
          headerShown: false,
          tabBarIcon: ({ focused }) => <TabIcon focused={focused} source={icons.help_white} />,
        }}
      />
    </Tabs>
  );
};

export default Layout;
