import { Redirect } from 'expo-router';
import 'react-native-get-random-values';

const Home = () => {
  return <Redirect href="/(auth)/welcome" />;
};
export default Home;
