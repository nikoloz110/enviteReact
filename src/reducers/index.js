import {combineReducers} from 'redux';
import UserReducer from './user-reducer';

const AllReducers = combineReducers({
  users: UserReducer
});

export default AllReducers;