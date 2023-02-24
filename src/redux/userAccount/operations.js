import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
// axios.defaults.baseURL = "https://pet.tizenmile.keenetic.pro";
axios.defaults.baseURL = "http://localhost:3002";
axios.defaults.headers = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2Y3MjdkODFiODU1MDI1MWY1NmZiY2MiLCJpYXQiOjE2NzcyMjgyOTcsImV4cCI6MTY3NzI2NDI5N30.fpHjg_EYNakFJjcxiOaLD5zjQUYMBx4-EE0o5TAc4AA",
};

export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/api/auth/current`);

      return response.data.userResult;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateUserData = createAsyncThunk(
  "user/updateUserData",
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`/api/auth/update`, user);
      toast.success("Your personal info updated successfully");
      return response.data.result;
    } catch (error) {
      toast.error(`${error.message}`);
      return rejectWithValue(error.message);
    }
  }
);

export const updateUserAvatar = createAsyncThunk(
  "user/updateUserAvatar",
  async (image, { rejectWithValue }) => {
    try {
      const response = await axios.put(`/api/auth/avatar`, image, {});
      toast.success("Your avatar updated successfully");
      return response.data.avatarURL;
    } catch (error) {
      toast.error(`${error.message}`);
      return rejectWithValue(error.message);
    }
  }
);
