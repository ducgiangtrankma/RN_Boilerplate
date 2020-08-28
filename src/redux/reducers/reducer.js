import {combineReducers} from 'redux';
import auth from './AuthReducer';
import languageReducer from './ChangeLanguageReducer';
export default combineReducers({
  auth,
  languageReducer,
});
