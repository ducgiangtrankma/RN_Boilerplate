/* eslint-disable no-shadow */
import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {changeLanguage} from '../../redux/action/changeLanguage';
import {useSelector, useDispatch} from 'react-redux';
import {styles} from './styles';
import AppText from '../../components/AppText/AppText';
export default function Setting({props, navigation}) {
  const language = useSelector((state) => state.languageReducer.language);
  const disPatch = useDispatch();
  // useEffect(() => {
  //   console.log('Ngon ngu :', language);
  // }, [language]);
  const logOut = () => {
    navigation.replace('Auth');
  };
  const changeLanguagePress = (language) => {
    disPatch(changeLanguage(language));
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={logOut}>
        <AppText fontSize={20} i18nKey={'logout'} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          changeLanguagePress('en');
        }}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{marginTop: 50}}>
        <Text>Tiếng Anh</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          changeLanguagePress('vi');
        }}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{marginTop: 50}}>
        <Text>Tiếng Việt </Text>
      </TouchableOpacity>
    </View>
  );
}
