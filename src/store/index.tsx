import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import sessionStorage from "redux-persist/lib/storage/session";
import { combineReducers } from "redux";

import userReducer from "@/store/user";

// 設定 user 儲存於 sessionStorage
const userPersistConfig = {
  key: "user",
  storage: sessionStorage,
};
const persistedUserReducer = persistReducer(userPersistConfig, userReducer);

// 其他... ex: 購物車

// 合併多個 Reducer
const rootReducer = combineReducers({
  user: persistedUserReducer,
  // 其他
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
