import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerCustom from './drawernavigation';
import {Auth} from './stacknavigation';
const Stack = createStackNavigator();
export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="App"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="Main" component={DrawerCustom} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
