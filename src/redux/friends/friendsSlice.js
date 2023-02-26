import { createSlice } from "@reduxjs/toolkit";

import { getFriends } from "./friendsOperations";

const friendsState = {
  friendsList: [],
  isLoading: false,
  error: null,
};

const pendingHandler = (state) => {
  state.isLoading = true;
  state.error = null;
};

const rejectedHandler = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const friendsSlice = createSlice({
  name: "friends",
  initialState: friendsState,
  extraReducers: (builder) => {
    builder.addCase(getFriends.pending, pendingHandler);
    builder.addCase(getFriends.rejected, rejectedHandler);
    builder.addCase(getFriends.fulfilled, (state, action) => {
      state.error = null;
      state.isLoading = false;
      state.friendsList = action.payload;
      console.log(action.payload);
    });
  },
});

export const friendsReducer = friendsSlice.reducer;
