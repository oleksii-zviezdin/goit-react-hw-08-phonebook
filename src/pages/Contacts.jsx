import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContact } from 'redux/contacts/operation';
import { ContactForm, ContactList, Loader } from 'components';
import { FormTitle } from 'components/App.styled';
import { Filter } from 'components';
import {
  // selectError,
  selectIsLoading,
  selectItems,
} from 'redux/contacts/selector';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectItems);
  // const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch, contacts]);

  return (
    <>
      {isLoading && <Loader />}
      <FormTitle>Your Phonebook</FormTitle>
      {/* {isError && <ContactForm />} */}
      {/* {isError && contacts?.length > 1 && <Filter />} */}
      {/* {isError && <ContactList />} */}
      <ContactForm />
      {contacts?.length > 1 && <Filter />}
      <ContactList />
    </>
  );
}
