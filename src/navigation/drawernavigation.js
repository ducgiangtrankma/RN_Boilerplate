/* eslint-disable react/react-in-jsx-scope */
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {styles} from './styles';
import TabCustom from './tabnavigation';
import DetaiHome from '../features/DetailHome/DetailHome';
const Drawer = createDrawerNavigator();
const DrawerCustom = ({navigation}) => {
  return (
    <Drawer.Navigator
      initialRouteName="MenuTab"
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={TabCustom} />
      <Drawer.Screen name="Detai Home" component={DetaiHome} />
    </Drawer.Navigator>
  );
};
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContainer}>
        <Image
          source={require('../assets/images/doraemon.png')}
          style={styles.imageHeader}
        />
      </View>
      <DrawerItemList {...props} />
      <DrawerItem label="Help" onPress={() => alert('Ok nha')} />
      <DrawerItem
        label="LogOut"
        onPress={() => props.navigation.replace('Auth')}
      />
    </DrawerContentScrollView>
  );
}
export default DrawerCustom;
