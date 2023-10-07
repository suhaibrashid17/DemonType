import {combineReducers,configureStore} from "@reduxjs/toolkit";
import authReducer from "../Auth/AuthSlice";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

const configStore={
    key:"root",
    version:1,
    storage
}
const reducers=combineReducers({
    auth:authReducer,
});
const persistedReducer=persistReducer(configStore,reducers);
export const store=configureStore({
    reducer:persistedReducer,
})
