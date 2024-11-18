import { Tabs } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';

const Layout = () => {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#252525',
        },
        tabBarActiveTintColor: '#0077B6',
        tabBarInactiveTintColor: '#fff',
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
          tabBarIcon: ({ color }) => (
            <Feather name="bar-chart-2" size={24} color={color} active={color === '#252525'} />
          ),
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
