import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// axios.defaults.baseURL = "https://pet.tizenmile.keenetic.pro/api";
// axios.defaults.baseURL = 'http://localhost:3002/api';
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YwOWRkMWUwNjhhYjQ3MzRiMjIxMTciLCJpYXQiOjE2NzcxNzMxMzksImV4cCI6MTY3NzIwOTEzOX0.4kAM8lujgjNFvhJqb82g-wh3KB2YRHDv1YXxUhQIrBA";

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

export const delNotice = createAsyncThunk(
  "notices/delNotice",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`notices/${id}`);
      return response.data.notices;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
