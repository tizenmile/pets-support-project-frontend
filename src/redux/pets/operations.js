import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://pet.tizenmile.keenetic.pro/api/";

axios.defaults.headers = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzYmU1MGJmZGY4MWE2MDQxMjZkYWEiLCJpYXQiOjE2NzcxNzExMTYsImV4cCI6MTY3NzIwNzExNn0.6Km8vAB4fNF1_0bVSMgYSAtBY7Gbyz3Y7Yv9PZMWFdU",
};

export const fetchPets = createAsyncThunk(
  "pets/fetchAll",

  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/auth/current");
      return response.data.petResult;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addNewPet = createAsyncThunk(
  "pets/addNewPet",
  async (newPet, thunkAPI) => {
    try {
      const res = await axios.post("/pets", newPet, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deletePet = createAsyncThunk(
  "pets/deletPet",
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`/pets/${payload}`);
      return payload;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
