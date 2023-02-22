import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getNews = createAsyncThunk("news", async (page, thunkApi) => {
  try {
    const response = await axios.get(
      "https://pet.tizenmile.keenetic.pro/api/static/news",
      {
        params: { page },
      }
    );

    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.status);
  }
});

export const getByQueryNews = createAsyncThunk(
  "news/getByQuery",
  async (query, thunkApi) => {
    try {
      const response = await axios.get(`/api/static/news/search?text=${query}`);
      // console.log('notice/getByQuery', response.data);
      return response.data; // TODO
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.status);
    }
  }
);