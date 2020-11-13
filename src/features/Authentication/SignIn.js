import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import ApiClient from '../../config/Api';
export default function SignIn({props, navigation}) {
  const signIn = () => {
    navigation.replace('Main');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={signIn}>
        <Text>Sign to App</Text>
      </TouchableOpacity>
    </View>
  );
}
