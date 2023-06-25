import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import fetchContact from 'redux/contacts/operation';
import { ContactForm, ContactList } from 'components';
import { FormTitle } from 'components/App.styled';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <>
      <FormTitle>Phonebook</FormTitle>
      <ContactForm />
      {/* <div>{isLoading && 'Request in progress...'}</div> */}
      <ContactList />
    </>
  );
}
