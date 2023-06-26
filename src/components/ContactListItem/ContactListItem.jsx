import { PropTypes } from 'prop-types';
import { ContactItem, RemoveButton } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operation';

export const ContactListItem = ({ id, name, tel }) => {
  const dispatch = useDispatch();
  const contactNameAndId = { id, name };
  console.log(name);
  const hanldeDelete = () => {
    dispatch(deleteContact(contactNameAndId));
  };
  return (
    <ContactItem>
      <p>
        {name}: <span>{tel}</span>
      </p>
      <RemoveButton type="button" onClick={hanldeDelete}>
        Revome
      </RemoveButton>
    </ContactItem>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  tel: PropTypes.string.isRequired,
};
