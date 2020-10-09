import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, SafeAreaView} from 'react-native';
import {styles} from './styles';
import Header from '../../components/Header/index';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Text} from '../../components';
import {useSelector} from 'react-redux';
import SQlite from 'react-native-sqlite-storage';

let db;

export default function Home({props, navigation}) {
  const [dataGet, setDataGet] = useState([]);
  const [items, setItmes] = useState([
    {
      create_at: 1599368992,
      liquid_level: 1,
      pressure: 3,
      tank_id: 'Test',
      temperature: 2,
    },
  ]);
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
  // const openSuccess = () => {
  //   console.log('opensucces');
  //   db.transaction((tx) => {
  //     console.log('degbu 1');
  //     tx.executeSql('SELECT * FROM users', [], (tx, results) => {
  //       console.log('Query completed');
  //       var len = results.rows.length;
  //       var temp = [];
  //       for (let i = 0; i < len; i++) {
  //         let row = results.rows.item(i);
  //         //console.log(row);
  //         temp.push(results.rows.item(i));
  //       }
  //       setDataGet(temp);
  //     });
  //   });
  // };

  const openError = (err) => {
    console.log(err);
  };
  const renderRight = () => {};
  // useEffect(() => {
  //   // console.log('Debug');
  //   db = SQlite.openDatabase(
  //     {name: 'user_db.db', createFromLocation: 1, location: 'Library'},
  //     openSuccess,
  //     openError,
  //   );
  //   console.log(db);
  // }, []);
  const insertLocalDB = () => {
    // const input = JSON.stringify({items});
    // const url =
    //   'http://123.25.15.73:8764/warehouse/v1/import-histories/2c9c808474a626930174b0fb67410001/tank-import-histories';
    // db.transaction((tx) => {
    //   tx.executeSql(
    //     'INSERT INTO users (name, hint) VALUES (?,?)',
    //     [url, input],
    //     (tx, results) => {
    //       console.log('Debug', results.rowsAffected);
    //       if (results.rowsAffected > 0) {
    //         alert('Luu thanh cong');
    //       } else {
    //         alert('Co loi');
    //       }
    //     },
    //   );
    // });
  };
  const delteDataTable = () => {
    // db.transaction((tx) => {
    //   tx.executeSql('DELETE FROM users', [], (tx, results) => {
    //     //console.log(results.rowsAffected);
    //   });
    // });
  };
  const upload = () => {
    // console.log(dataGet);
    // dataGet.map((e) => {
    //   console.log(e.hint);
    // });
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Home"
        renderLeft={renderLeft}
        renderRight={renderRight}
        onPressLeft={openDrawer}
      />
      <View style={styles.content}>
        <Text>{dataGet.length}</Text>
        {connection ? <Text>Có kết nối mạng</Text> : <Text>Mất kết nối</Text>}
        <TouchableOpacity style={{marginTop: 20}} onPress={insertLocalDB}>
          <Text>Insert LocalDb</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop: 20}} onPress={delteDataTable}>
          <Text>Xoa du lieu bang</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop: 20}} onPress={upload}>
          <Text>Tai len</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
