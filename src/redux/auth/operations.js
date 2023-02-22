import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = 'https://pet.tizenmile.keenetic.pro/api/';

// Utility to add JWT
const setAuthHeader = token => {
  axios.interceptors.request.use(
    config => {
      config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
          return config;
      },
      error => {
          return Promise.reject(error);
      }
  );
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common['Authorization'] = '';
}; 

const notify = (msg) => toast.info(msg, {
  position: "bottom-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
  });;

/*
 * POST @ /auth/register
 * body: {  email, password, name, city, mobile }
 */
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {

    try {
      const res = await axios.post('auth/register', credentials);
      
      if (res.status !== 200) {
        return thunkAPI.rejectWithValue(error.message);
      }

      // After successful registration, add the token to the HTTP header
    setAuthHeader(res.data.token)
    
      
      return res.data
    } catch (error) {
      console.log(error);

      if (error.response.status === 409) {
        notify('User is already exist')
        return
      }
      if (error.response.status === 400) {
        notify('User is already exist')
        return
      } else if (error.response.status === 500) {
        notify('Oops! Server error! Please try later!')
        return
      } else {
        notify('Something went wrong!')
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
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', credentials);
      // After successful login, add the token to the HTTP header
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      Notify.failure('Incorrect email or password! Try again!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/auth/logout');
    clearAuthHeader();
  } catch (error) {
    if (error.response.status === 500) {
      Notify.failure('Oops! Server error! Please try later!');
    }
    Notify.failure('Something went wrong! Please reload the page!');
    return thunkAPI.rejectWithValue(error.message);
  }
});

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    console.log(state);

    const persistedToken = state.auth.token;

    console.log(persistedToken);

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(persistedToken);
      const res = await axios.get('auth/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }


  // 'auth/refresh',
  // async (_, thunkAPI) => {
  //   // Reading the token from the state via getState()
  //   const {token} = thunkAPI.getState().auth;
  //   console.log(token);
 
  //   if (!token) {
  //     // If there is no token, exit without performing any request
  //     return thunkAPI.rejectWithValue('Unable to fetch user');
  //   }

  //   try {
  //     // If there is a token, add it to the HTTP header and perform the request
  //     setAuthHeader(token);
  //     const res = await axios.get('current');
  //     return res.data;
  //   } catch (error) {
  //     clearAuthHeader();
  //     if (error.response.status === 401) {
  //       console.log(
  //         'something went wrong, user unauthorized. Please, try again'
  //       );
  //       return thunkAPI.rejectWithValue(error.response.data.message);
  //     }
  //     console.log('something went wrong, please, try again');
  //     return thunkAPI.rejectWithValue(error.message);
  //   }
  // }
);
