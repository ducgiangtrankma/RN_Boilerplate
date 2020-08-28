import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {styles} from './styles';
import Header from '../../components/Header/index';
export default function Home({props, navigation}) {
  const goToDetail = () => {
    navigation.navigate('HomeDetail');
  };
  const renderLeft = () => {};
  const renderRight = () => {};
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Home" renderLeft={renderLeft} renderRight={renderRight} />
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <TouchableOpacity onPress={goToDetail}>
          <Text> Go to detail screen</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
