import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';

export const RootStack = createStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  TutorialScreen1: undefined;
  TutorialScreen2: undefined;
  TutorialScreen3: undefined;
  index: undefined;
};

export type TutorialScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'TutorialScreen1' | 'TutorialScreen2' | 'TutorialScreen3' | 'index'
>;
