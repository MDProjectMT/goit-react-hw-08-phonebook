import { createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../../library/client';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContact',
  async (_, thunkAPI) => {
    try {
      const { data } = await client.get('/contacts');
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
      const { data } = await client.post('/contacts', contact);
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
      await client.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
