import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
export default function Setting({props, navigation}) {
  const logOut = () => {
    navigation.replace('Auth');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={logOut}>
        <Text> Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
