import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact } from './operations';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        console.log('state', state.items);
        state.items = action.payload;
        state.isLoading = false; // Set isLoading to false here
        state.error = null; // Clear any previous errors
      })
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
        state.error = null; // Clear any previous errors
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        console.log('action');
        state.items.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addContact.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const contactReducer = contactSlice.reducer;

// export const contactSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
// reducers: {
//   addContact: {
//     reducer(state, action) {
//       state.push(action.payload);
//     },
//     prepare(contact) {
//       return {
//         payload: {
//           id: nanoid(),
//           ...contact,
//         },
//       };
//     },
//   },

//   deleteContact(state, action) {
//     return state.filter(contact => contact.id !== action.payload);
//   },
// },
// });

// const contactSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   extraReducers: {
//     [fetchContacts.fulfilled]: (state, action) => {
//       console.log('state', state.items);
//       state.items = action.payload;
//     },
//     [fetchContacts.pending]: state => {
//       state.isLoading = true;
//     },

//     [fetchContacts.fulfilled]: state => {
//       state.isLoading = false;
//     },
//     [fetchContacts.rejected]: state => {
//       state.isLoading = false;
//     },
//     [fetchContacts.rejected]: (state, action) => {
//       state.error = action.payload;
//     },
//     [fetchContacts.pending]: state => {
//       state.error = null;
//     },

//     [addContact.fulfilled]: (state, action) => {
//       console.log('action');
//       state.items.push(action.payload);
//     },
//     [addContact.pending]: state => {
//       state.isLoading = true;
//     },
//     [addContact.fulfilled]: state => (state.isLoading = false),
//     [addContact.rejected]: state => (state.isLoading = false),
//     [addContact.rejected]: (state, action) => (state.error = action.payload),
//     [addContact.pending]: state => (state.error = null),
//   },
// });

// export const contactReducer = contactSlice.reducer;

// export const { addContact, deleteContact } = contactSlice.actions;
// export const contactReducer = contactSlice.reducer;
