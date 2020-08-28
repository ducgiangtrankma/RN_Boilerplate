import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';

import {styles} from './styles';
import Header from '../../components/Header/index';
import AppText from '../../components/AppText/AppText';

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
          {/* <Text> Go to detail screen</Text> */}
          <AppText i18nKey={'nameScreen'} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
