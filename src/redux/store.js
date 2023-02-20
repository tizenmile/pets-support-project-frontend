import { configureStore} from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
  import storage from 'redux-persist/lib/storage'; 
import { authReducer } from "./auth/authSlice";
import { newsReducer } from "./news/newsSlice";
import { noticesReducer } from "./notices/noticesSlice";

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
  };

export const store = configureStore({
    reducer: {
        news: newsReducer,
        notices: noticesReducer,
        auth: persistReducer(authPersistConfig, authReducer)
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE,PAUSE, PERSIST, PURGE, REGISTER]
        }
    }),
});

export const persistor = persistStore(store);