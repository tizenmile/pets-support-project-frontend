import { createSlice } from '@reduxjs/toolkit';

import { getByQueryNews, getNews } from './newsOperations';

const newsState = {
  news: [],
  isLoading: false,
  error: null,
};

const pendingHandler = state => {
  state.isLoading = true;
  state.error = null;
};

const rejectedHandler = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const newsSlice = createSlice({
  name: 'news',
  initialState: newsState,
  extraReducers: builder => {
    builder.addCase(getNews.pending, pendingHandler);
    builder.addCase(getByQueryNews.pending, pendingHandler);

    builder.addCase(getNews.rejected, rejectedHandler);
    builder.addCase(getByQueryNews.rejected, rejectedHandler);

    builder.addCase(getNews.fulfilled, (state, action) => {
      state.error = null;
      state.isLoading = false;
      state.news = action.payload;
    });
    builder.addCase(getByQueryNews.fulfilled, (state, action) => {
      state.error = null;
      state.isLoading = false;
      state.news = action.payload;
    });

  },
});

export const newsReducer = newsSlice.reducer;