import { combineReducers } from 'redux';
import postReducer from './postReducer';
import commentReducer from './commentReducer';

export default combineReducers({
  blogs: postReducer,
  comments: commentReducer
});
