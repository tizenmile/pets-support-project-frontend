import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://pet.tizenmile.keenetic.pro/api';
// axios.defaults.baseURL = 'http://localhost:3002/api';
// axios.defaults.headers = {"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YwOWRkMWUwNjhhYjQ3MzRiMjIxMTciLCJpYXQiOjE2NzY5Nzc3OTcsImV4cCI6MTY3NzAxMzc5N30.48-yZ56-vyv0YK1yayyNzjYfudVs_mVIq-Q7_GoI2rs"};


export const fetchSellNotices = createAsyncThunk(
  'notices/fetchSellNotices',
  async (_, thunkAPI) => {
    try {
        const response = await axios.get(`notices/category/sell`);
        return response.data.notices;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
        
    }
  }
);

export const addNoticeToFavorite = createAsyncThunk(
  'notices/addNoticeToFavorite',
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
  'notices/delNoticeFromFavorite',
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
  'notices/getFavNotices',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`notices/fav-notice/`);
        return response.data.notices;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
        
    }
  }
);

