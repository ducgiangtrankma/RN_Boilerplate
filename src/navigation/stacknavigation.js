import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
//screen
import SignIn from '../features/Authentication/SignIn';
import Home from '../features/Home/Home';
import Setting from '../features/Setting/Setting';
import DetailHome from '../features/DetailHome/DetailHome';
const Stack = createStackNavigator();
const Auth = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Sigin"
        component={SignIn}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const HomeTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeDetail"
        component={DetailHome}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const SettingTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export {Auth, HomeTab, SettingTab};
