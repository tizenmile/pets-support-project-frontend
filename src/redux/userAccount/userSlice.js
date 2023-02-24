import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchUserData, updateUserData, updateUserAvatar } from "./operations";
import {
  fetchUserSuccessReducer,
  updateUserSuccessReducer,
  updateUserAvatarSuccessReducer,
  pendingReducer,
  rejectedReducer,
  fulfilledReducer,
} from "./reducers";

const extraActions = [fetchUserData, updateUserData, updateUserAvatar];

const getActions = (type) => extraActions.map((action) => action[type]);

const userInitialState = {
  userData: [],
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.fulfilled, fetchUserSuccessReducer)
      .addCase(updateUserData.fulfilled, updateUserSuccessReducer)
      .addCase(updateUserAvatar.fulfilled, updateUserAvatarSuccessReducer)
      .addMatcher(isAnyOf(...getActions("pending")), pendingReducer)
      .addMatcher(isAnyOf(...getActions("rejected")), rejectedReducer)
      .addMatcher(isAnyOf(...getActions("fulfilled")), fulfilledReducer);
  },
});

export const userReducer = userSlice.reducer;
