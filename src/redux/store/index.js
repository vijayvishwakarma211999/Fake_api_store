import { configureStore } from "@reduxjs/toolkit";
import rootReducers  from "../slice"
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import {persistStore} from 'redux-persist'

const persistConfig = {
    key: 'root',
    version:1,
    storage,
    whitelist:["auth"]
}
export const persistedReducer = persistReducer(persistConfig,rootReducers)
 export const store = configureStore({
    reducer: persistedReducer,
    middleware:[thunk],
 })
 export const persistor = persistStore(store)