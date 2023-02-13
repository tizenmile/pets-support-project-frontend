import { configureStore } from "@reduxjs/toolkit";
import { newsReducer } from "./news/newsSlice";

export const store = configureStore({
    reducer: {
        news: newsReducer,
    }
});