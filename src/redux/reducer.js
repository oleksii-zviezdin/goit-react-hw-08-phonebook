import { authReducer } from './auth/authSlice';
import { persistedReducer } from './contacts/contactsSlice';

export const reducer = {
  contacts: persistedReducer,
  auth: authReducer,
};
