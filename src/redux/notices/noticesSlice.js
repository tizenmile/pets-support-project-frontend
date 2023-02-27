import { createSlice, current } from "@reduxjs/toolkit";
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
   reducers: {
    setPage(state, action) {
       state.page = action.payload;
       console.log(state.page);
     },
     setFavNotices(state, action) {
        console.log(state.favNotices); 
       state.favNotices = state.favNotices.filter(item => item._id !== action.payload)
       console.log(state.favNotices); 
       console.log(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNoticesByCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        console.log(action.payload.notices);
        state.items = state.page !== 0 ? [...state.items, ...action.payload.notices] : action.payload.notices
        state.page = state.items.length !== state.total && state.items.length !== 0 ? state.page + 1 : 0 
        state.total = action.payload.total
      })
      .addCase(getFavNotices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.favNotices = state.page !== 0 ? [...state.favNotices, ...action.payload.notices] : action.payload.notices
        state.page = state.favNotices.length !== state.total && state.favNotices.length !== 0 ? state.page + 1 : 0 
        state.total = action.payload.total
      })
      .addCase(getOwnNotices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.page !== 0 ? [...state.items, ...action.payload.noticesList] : action.payload.noticesList
        state.page = state.items.length !== state.total && state.items.length !== 0 ? state.page + 1 : 0 
        state.total = action.payload.total
        console.log(action.payload);
      })

      .addCase(fetchNoticesByCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFavNotices.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOwnNotices.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(fetchNoticesByCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getFavNotices.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getOwnNotices.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setPage, setFavNotices } = noticesSlice.actions;
export const noticesReducer = noticesSlice.reducer;
