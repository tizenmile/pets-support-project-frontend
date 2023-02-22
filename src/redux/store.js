import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { noticesReducer } from "./notices/noticesSlice";
import { authReducer } from "./auth/authSlice";
import { newsReducer } from "./news/newsSlice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    news: newsReducer,
    notices: noticesReducer,
    auth: persistReducer(authPersistConfig, authReducer),
    news: newsReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    }
  }),
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
