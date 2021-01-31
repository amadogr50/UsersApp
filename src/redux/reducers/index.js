import {combineReducers} from 'redux';
import usersReducer from './users';
import albumsReducer from './albums';

export default combineReducers({
  users: usersReducer,
  albums: albumsReducer,
});
