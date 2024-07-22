import { createAsyncThunk } from '@reduxjs/toolkit';
import { clearAuthHeader, client, setAuthHeader } from '../../library/client';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    const { password } = credentials;
    if (password.length < 6) {
      return window.alert('Password is too short');
    }
    try {
      const res = await client.post('/users/signup', credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          return thunkAPI.rejectWithValue(
            'Użytkownik o takim e-mailu już istnieje'
          );
        }
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    const { password } = credentials;
    if (password.length < 6) {
      return window.alert('Password is too short');
    }
    try {
      const res = await client.post('/users/login', credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await client.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await client.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
