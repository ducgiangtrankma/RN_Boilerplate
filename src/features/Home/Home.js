import React, {useEffect} from 'react';
import {View, TouchableOpacity, SafeAreaView} from 'react-native';
import {styles} from './styles';
import Header from '../../components/Header/index';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Text} from '../../components';
import {useSelector} from 'react-redux';
export default function Home({props, navigation}) {
  const connection = useSelector(
    (state) => state.statusConnectReducer.statusConnect,
  );
  console.log(connection);
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
        {connection ? <Text>Có kết nối mạng</Text> : <Text>Mất kết nối</Text>}
      </View>
    </SafeAreaView>
  );
}
