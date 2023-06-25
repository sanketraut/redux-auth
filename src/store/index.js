import {configureStore} from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
const reducer = combineReducers({
    // list of reducers
});
const store = configureStore({
    reducer,
});
export default store;