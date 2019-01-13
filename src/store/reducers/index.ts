import { combineReducers } from 'redux'
import user from './user'
import testreducer from './test';
import AppReducer from './app';

export default combineReducers({
  AppReducer,
  user,
  testreducer
})