import {
  selectFilter,
  selectIsLoading,
  selectItems,
} from 'redux/contacts/selector';
import { ContactListItem } from '../index';
import { ContnactsList } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/contacts/selector';
import { Loader } from '../index';

export const ContactList = () => {
  const contacts = useSelector(selectItems);
  const isLoading = useSelector(selectIsLoading);
  console.log(isLoading);
  const filter = useSelector(selectFilter);

  const filteredContacts = getFilteredContacts(filter, contacts);
  return (
    <ContnactsList>
      {isLoading && <Loader />}
      {filteredContacts?.length === 0 && (
        <div style={{ textAlign: 'center' }}>
          {filter && (
            <>
              <p>Sorry, but we did not find anything for this query</p>
              <p style={{ fontWeight: 'bold', fontSize: '24px' }}>"{filter}"</p>
            </>
          )}
        </div>
      )}
      {filteredContacts?.map(({ id, name, number }) => {
        return <ContactListItem key={id} id={id} name={name} tel={number} />;
      })}
    </ContnactsList>
  );
};
