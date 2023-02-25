import { StatusBar } from 'expo-status-bar';
import { colorPallet } from './src/colors/colors';
import { Home } from './src/screens/Home';

export default function App() {
  return (
    <>
      <Home/>
      <StatusBar backgroundColor={colorPallet.gray700} />
    </>
  );
}

