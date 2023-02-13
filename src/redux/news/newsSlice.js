import { createSlice } from '@reduxjs/toolkit'
import { fetchNews } from "./operations";

const initialState = {
  total: null,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews, (state, action) => {})

  },
});

export const { addNews, deleteNews } = newsSlice.actions;
export const newsReducer = newsSlice.reducer;
