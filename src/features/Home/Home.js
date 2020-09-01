import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';

import {styles} from './styles';
import Header from '../../components/Header/index';
import AppText from '../../components/AppText/AppText';
import {UserIcon} from '../../assets/svg/Svg';
export default function Home({props, navigation}) {
  const goToDetail = () => {
    navigation.navigate('HomeDetail');
  };
  const openDrawer = () => {
    navigation.openDrawer();
  };
  const renderLeft = () => {};
  const renderRight = () => {};
  useEffect(() => {
    navigation.addListener('focus', () => {
      console.log('Home log');
    });
  }, [navigation]);
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Home" renderLeft={renderLeft} renderRight={renderRight} />
      <View style={styles.content}>
        <UserIcon />
        <TouchableOpacity onPress={goToDetail} style={styles.btnTest}>
          <AppText i18nKey={'nameScreen'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={openDrawer} style={styles.btnTest}>
          <Text> Open drawer</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
