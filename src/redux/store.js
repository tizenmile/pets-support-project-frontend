import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { newsReducer } from "./news/newsSlice";

export const store = configureStore({
    reducer: {
        news: newsReducer,
        auth: authReducer
    }
});