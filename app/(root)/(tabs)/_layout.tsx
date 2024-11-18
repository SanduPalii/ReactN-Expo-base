import { Tabs } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
import Colors from '@/constants/Colors';

const Layout = () => {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Colors.surface,
        },
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.textPrimary,
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Connection',
          headerShown: false,
          tabBarIcon: ({ color }) => <Feather name="bluetooth" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="statistics"
        options={{
          title: 'Statistics',
          headerShown: false,
          tabBarIcon: ({ color }) => <Feather name="bar-chart-2" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          headerShown: false,
          tabBarIcon: ({ color }) => <Feather name="settings" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="help"
        options={{
          title: 'Help',
          headerShown: false,
          tabBarIcon: ({ color }) => <Feather name="help-circle" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
};

export default Layout;
