import React from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import {styles} from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Header} from '../../components';
export default function Home({props, navigation}) {
  const openDrawer = () => {
    navigation.openDrawer();
  };
  const renderLeft = () => {
    return <AntDesign name="menufold" size={18} />;
  };
  const renderRight = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Home"
        renderLeft={renderLeft}
        renderRight={renderRight}
        onPressLeft={openDrawer}
      />
      <View style={styles.content}>
        <Text>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
}
