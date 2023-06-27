import { persistedReducerAuth } from './auth/authSlice';
import { persistedReducerContacts } from './contacts/contactsSlice';

export const reducer = {
  contacts: persistedReducerContacts,
  auth: persistedReducerAuth,
};
