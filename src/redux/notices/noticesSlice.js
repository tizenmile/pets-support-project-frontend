import { createSlice } from "@reduxjs/toolkit";
import {
  fetchNoticesByCategory,
  getOwnNotices,
  getFavNotices,
  addNoticeToFavorite,
} from "./operation";

const noticesInitialState = {
  items: [],
  favNotices: [],
  isLoading: false,
  error: null,
  page: 0,
  total: 0
};

const noticesSlice = createSlice({
  name: "notices",
  initialState: noticesInitialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchNoticesByCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
        
      })
      .addCase(getFavNotices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.favNotices = [...state.favNotices, ...action.payload.notices]
        state.page = state.favNotices.length !== state.total ? state.page + 1 : 0 
        state.total = action.payload.total
      })
      .addCase(getOwnNotices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })

      .addMatcher(fetchNoticesByCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addMatcher(getFavNotices.pending, (state) => {
        state.isLoading = true;
      })
      .addMatcher(getOwnNotices.pending, (state) => {
        state.isLoading = true;
      })

      .addMatcher(fetchNoticesByCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addMatcher(getFavNotices.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addMatcher(getOwnNotices.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const noticesReducer = noticesSlice.reducer;
