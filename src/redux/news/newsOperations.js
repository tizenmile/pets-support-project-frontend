import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getNews = createAsyncThunk(
  "news/getNews",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("/static/news");
      return res.data[0].news;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
