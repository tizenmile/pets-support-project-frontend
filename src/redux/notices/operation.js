import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://pet.tizenmile.keenetic.pro/api";
// axios.defaults.baseURL = 'http://localhost:3002/api';

export const fetchNoticesByCategory = createAsyncThunk(
  "notices/fetchNoticesByCategory",
  async (categoryName, thunkAPI) => {
    try {
      const response = await axios.get(`notices/category/${categoryName}`);
      return response.data.notices;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addNoticeToFavorite = createAsyncThunk(
  "notices/addNoticeToFavorite",
  async (noticeId, thunkAPI) => {
    try {
      const response = await axios.put(`notices/add-to-fav/${noticeId}`);
      return response.data.notices;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const delNoticeFromFavorite = createAsyncThunk(
  "notices/delNoticeFromFavorite",
  async (noticeId, thunkAPI) => {
    try {
      const response = await axios.put(`notices/del-from-fav/${noticeId}`);
      return response.data.notices;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getFavNotices = createAsyncThunk(
  "notices/getFavNotices",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`notices/fav-notice/`);
      return response.data.notices;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getOwnNotices = createAsyncThunk(
  "notices/getOwnNotices",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`notices/owner/own-notices`);
      return response.data.noticesList;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
