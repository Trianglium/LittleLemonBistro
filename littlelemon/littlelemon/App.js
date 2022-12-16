import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigators/RootNavigator";
import { View } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';

export default function App() {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: '#495E57',
        }}>
        <LittleLemonHeader />
      </View>

      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>

      <View style={{ backgroundColor: '#495E57' }}>
        <LittleLemonFooter />
      </View>
    </>
  );
}
