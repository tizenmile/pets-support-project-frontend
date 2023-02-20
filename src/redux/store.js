import { configureStore } from "@reduxjs/toolkit";
import { newsReducer } from "./news/newsSlice";
import { noticesReducer } from "./notices/noticesSlice";
import { authReducer } from "./auth/authSlice";

export const store = configureStore({
    reducer: {
        news: newsReducer,
        notices: noticesReducer,
        auth: authReducer,
    }
});
