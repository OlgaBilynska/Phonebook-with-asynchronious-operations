import { createAsyncThunk } from '@reduxjs/toolkit';

// import {
//   fetchContactsRequest,
//   fetchContactsSuccess,
//   fetchContactsError,
// } from './actions';
import * as API from './../contactsAPI';

// export const fetchContacts = () => async dispatch => {
//   dispatch(fetchContactsRequest());

//   try {
//     const contacts = await API.fetchContacts();
//     console.log('contacts', contacts);
//     dispatch(fetchContactsSuccess(contacts));
//   } catch (error) {
//     dispatch(fetchContactsError(error.message));
//   }
// };

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await API.fetchContacts();
      console.log('contacts', contacts);
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, { rejectWithValue }) => {
    try {
      const newContact = await API.addContact(data);
      console.log('nC', newContact);
      return newContact;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
