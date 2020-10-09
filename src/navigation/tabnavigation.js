import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {HomeTab, SettingTab} from './stacknavigation';
import {useSelector} from 'react-redux';
import SQlite from 'react-native-sqlite-storage';
import {upLoadImport} from '../config/service';
import {checkPropTypes} from 'prop-types';
const Tab = createBottomTabNavigator();
let db;
const token =
  'eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyX2lkIjoiQVNQX05WMDAwMDAiLCJyb2xlX2lkIjoiUk9PVCIsImRlcGFydG1lbnRfaWQiOiJST09UIiwiaWF0IjoxNjAyMTUxMTIxLCJleHAiOjE2MDI3NTU5MjF9.qsVQb4EdzIc_CPhgWJ0t6EnCbniR7ZXXBmp7z6DYv7OC--uS47i2RgJx3Hq167mcilVvSXnjPdsBtQj4dcKeqA';
export default function TabCustom() {
  const [arrRes, setArrRes] = useState([]);
  const connection = useSelector(
    (state) => state.statusConnectReducer.statusConnect,
  );

  const openDB = () => {
    db = SQlite.openDatabase(
      {name: 'user_db.db', createFromLocation: 1, location: 'Library'},
      openSuccess,
      openError,
    );
  };
  const openSuccess = () => {
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM users', [], (tx, results) => {
        var len = results.rows.length;
        var temp = [];
        for (let i = 0; i < len; i++) {
          let row = results.rows.item(i);
          // console.log(row);
          upLoadImport(token, row.hint).then((res) => {
            console.log('Res', res.code);
            if (res.code === 'R_201') {
              //xoa phan tu co id  = row.id
              console.log('Xoa', row.id);
            }
            alert(res.code);
          });
        }
        setArrRes(temp);
      });
    });
  };
  const openError = (err) => {
    console.log(err);
  };
  const upLoadImportHistoryTank = () => {
    openDB();
  };
  useEffect(() => {
    if (connection === true) {
      upLoadImportHistoryTank();
    }
  }, [connection]);
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      tabBarOptions={{showIcon: true, labelStyle: {fontSize: 9}}}>
      <Tab.Screen
        name="Trang chủ"
        component={HomeTab}
        options={{
          tabBarIcon: ({color, focused}) => {
            if (focused) {
              return <AntDesign name="home" size={20} color={'#2F80ED'} />;
            } else {
              return <AntDesign name="home" size={20} color={'gray'} />;
            }
          },
        }}
      />
      <Tab.Screen
        name="Cài đặt"
        component={SettingTab}
        options={{
          tabBarIcon: ({color, focused}) => {
            if (focused) {
              return <AntDesign name="home" size={20} color={'#2F80ED'} />;
            } else {
              return <AntDesign name="home" size={20} color={'gray'} />;
            }
          },
        }}
      />
    </Tab.Navigator>
  );
}
