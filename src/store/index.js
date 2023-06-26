import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import userReducer from './user';

const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, userReducer);
const reducer = combineReducers({
    // list of reducers
    user: persistedReducer
});
export const store = configureStore({
    reducer,
});
export const persistor = persistStore(store);