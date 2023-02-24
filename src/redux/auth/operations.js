import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ToastContainer, toast } from "react-toastify";

// axios.defaults.baseURL = 'https://pet.tizenmile.keenetic.pro/api/';

// Utility to add JWT
const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

/*
 * POST @ /auth/register
 * body: {  email, password, name, city, mobile }
 */
export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/auth/register", credentials);

      console.log(res);

      if (res.statusText !== "OK") {
        return thunkAPI.rejectWithValue(error.message);
      }

      // After successful registration, add the token to the HTTP header
      setAuthHeader(res.data.token);

      // const res = {user: user.data,
      //   token: token.data.token
      // }
      return res.data;
    } catch (error) {
      console.log(error);
      // Notify.failure('User is already exist');

      if (error.response.status === 400) {
        console.log(error);
        // Notify.failure('User is already exist');
      } else if (error.response.status === 500) {
        console.log(error);
        // Notify.failure('Oops! Server error! Please try later!');
      } else {
        console.log(error);
        // Notify.failure('Something went wrong!');
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/login
 * body: { email, password }
 */
export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/users/login", credentials);
      // After successful login, add the token to the HTTP header
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      Notify.failure("Incorrect email or password! Try again!");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/auth/logout");
    clearAuthHeader();
  } catch (error) {
    if (error.response.status === 500) {
      Notify.failure("Oops! Server error! Please try later!");
    }
    Notify.failure("Something went wrong! Please reload the page!");
    return thunkAPI.rejectWithValue(error.message);
  }
});

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    console.log(persistedToken);

    if (!persistedToken) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(persistedToken);
      const res = await axios.get("/users/current");
      return res.data;
    } catch (error) {
      clearAuthHeader();
      if (error.response.status === 401) {
        Notify.failure(
          "something went wrong, user unauthorized. Please, try again"
        );
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
      Notify.failure("something went wrong, please, try again");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
