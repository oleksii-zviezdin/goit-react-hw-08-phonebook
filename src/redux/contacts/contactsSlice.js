import { createSlice } from '@reduxjs/toolkit';
import { initialStateContants } from './initialStateContants';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { fetchContact, addContact, deleteContact } from './operation';

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialStateContants,
  reducers: {
    filterContacts: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: {
    [fetchContact.pending](state) {
      state.contacts.isLoading = true;
    },
    [fetchContact.fulfilled](state, { payload }) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = payload;
    },
    [fetchContact.rejected](state, { payload }) {
      state.contacts.isLoading = false;
      state.contacts.error = payload;
    },
    [addContact.pending](state) {
      state.contacts.isLoading = true;
    },
    [addContact.fulfilled](state, { payload }) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.push(payload);
    },
    [addContact.rejected](state, { payload }) {
      state.contacts.isLoading = false;
      state.contacts.error = payload;
    },
    [deleteContact.pending](state) {
      state.contacts.isLoading = true;
    },
    [deleteContact.fulfilled](state, { payload }) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      const contacts = state.contacts.items.filter(
        contact => contact.id !== payload.id
      );
      state.contacts.items = contacts;
      // const index = state.items.findIndex(contact => contact.id === payload.id);
      // state.items.splice(index, 1);
    },
    [deleteContact.rejected](state, { payload }) {
      state.contacts.isLoading = false;
      state.contacts.error = payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

export const persistedReducerContacts = persistReducer(persistConfig, contactsReducer);
export const { filterContacts } = contactsSlice.actions;
