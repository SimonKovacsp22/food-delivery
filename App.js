import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import { withExpoSnack } from 'nativewind';
import { styled } from "nativewind";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { s } from "react-native-wind";
import HomeScreen from './screens/HomeScreen';

const StyledText = styled(Text);
const Stack = createNativeStackNavigator();




export default function App() {
  return (
    <NavigationContainer>
    
    <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen}  />
    </Stack.Navigator>
    
    </NavigationContainer>
  );
}


