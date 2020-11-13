import {BaseUrl} from '../constants';
import axios from 'axios';
import {stringify} from 'qs';
import AsyncStorage from '@react-native-community/async-storage';
const ApiClient = axios.create({
  baseURL: BaseUrl,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: (params) => stringify(params, {arrayFormat: 'repeat'}),
});
ApiClient.interceptors.request.use(
  async (config) => {
    let token = null;
    try {
      const value = await AsyncStorage.getItem('Authorization');
      if (value !== null) {
        token = value;
      }
    } catch (e) {
      console.log('Lỗi không đọc được token', e);
    }
    if (token) {
      // config.headers.Authorization = `${token}`;
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
ApiClient.interceptors.response.use(
  (response) => {
    console.log(response);
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    console.log(error);
    if (error.code === 'ECONNABORTED') {
      throw 'timeout';
    } else {
      throw error;
    }
  },
);

export default ApiClient;
