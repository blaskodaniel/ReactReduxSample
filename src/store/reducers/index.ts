import { combineReducers } from 'redux'
import user from './user'
import testreducer from './test';

export default combineReducers({
  user,
  testreducer
})