import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

console.log("sdsad");

export const getFriends = createAsyncThunk(
    "friends/getFriends",
    async (categoryName, thunkAPI) => {
      try {
        const response = await axios
        .get("https://pet.tizenmile.keenetic.pro/api/static/friends")
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );