import { Redirect } from 'expo-router';
// import { useAuth } from '@clerk/clerk-expo'
import 'react-native-get-random-values';

const Home = () => {
  return <Redirect href="/(auth)/welcome" />;
};
export default Home;
