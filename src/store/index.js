import {configureStore} from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './user';

const reducer = combineReducers({
    // list of reducers
    userReducer
});
const store = configureStore({
    reducer,
});
export default store;