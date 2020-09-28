import {combineReducers} from 'redux';
import auth from './AuthReducer';
import languageReducer from './ChangeLanguageReducer';
import fontsSizeReducer from './ChangeFontSizeReducer';
export default combineReducers({
  auth,
  languageReducer,
  fontsSizeReducer,
});
