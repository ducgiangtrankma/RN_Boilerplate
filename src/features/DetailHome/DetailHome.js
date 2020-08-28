import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
export default function DetailHome({props, navigation}) {
  const backHome = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={backHome}>
        <Text> Back home screnn</Text>
      </TouchableOpacity>
    </View>
  );
}
