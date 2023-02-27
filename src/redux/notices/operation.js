import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// axios.defaults.baseURL = "https://pet.tizenmile.keenetic.pro/api";
axios.defaults.baseURL = 'http://localhost:3002/api';
axios.defaults.headers.common['Authorization'] = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YwOWRkMWUwNjhhYjQ3MzRiMjIxMTciLCJpYXQiOjE2Nzc0MzU2MTUsImV4cCI6MTY3NzQ3MTYxNX0.ScqG7_hnXzRgHv6O50fBe2_F8cHUHH_qudHRvXdX3kc";

export const fetchNoticesByCategory = createAsyncThunk(
  "notices/fetchNoticesByCategory",
  async ({categoryName, page}, thunkAPI) => {
    try {
      const response = await axios.get(`notices/category/${categoryName}?limit=3&page=${page}`);
      return response.data.data;
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
      console.log(response.data);
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
      console.log(response.data);
      return response.data.notices;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getFavNotices = createAsyncThunk(
  "notices/getFavNotices",
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(`notices/fav-notice?limit=3&page=${page}`);
      console.log(response.data.data);
      return response.data.data;
      
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getOwnNotices = createAsyncThunk(
  "notices/getOwnNotices",
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(`notices/owner/own-notices?limit=3&page=${page}`);
      return response.data.data;
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
