import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/auth/current`);

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
      const response = await axios.patch(`/auth/update`, user);
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
      const response = await axios.post(`/auth/avatar`, image, {});
      toast.success("Your avatar updated successfully");
      return response.data.avatarURL;
    } catch (error) {
      toast.error(`${error.message}`);
      return rejectWithValue(error.message);
    }
  }
);
