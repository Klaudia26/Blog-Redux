import { combineReducers } from 'redux';
import postReducer from './postReducer';
import userReducer from '../reducers/userReducer';

export default combineReducers({
  posts: postReducer,
  user: userReducer,
});
