import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
import { client } from '../../library/client';

// const apiClient = axios.create({
//   baseURL: 'https://668fa5b6c0a7969efd98da33.mockapi.io/contacts',
// });

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContact',
  async (_, thunkAPI) => {
    try {
      const { data } = await client.get('/contact');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const { data } = await client.post(`/contact`, contact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      await client.delete(`/contact/${contactId}`);
      return contactId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
