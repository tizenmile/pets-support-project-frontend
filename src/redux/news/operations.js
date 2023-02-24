import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchNews = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      // const response = await axios.get("https://connections-api.herokuapp.com/contacts")
      // localStorage.setItem('user', response.data)
      // console.log(response.data);
      return response.data;
    } catch (e) {
      localStorage.clear();
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
