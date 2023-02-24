import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    foundedNotice(state, action) {
      return action.payload;
    },
  },
});
const { foundedNotice } = searchSlice.actions;
export default foundedNotice;
