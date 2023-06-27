import { Form, Span, AddButton, Label, Input } from './ContactForm.styled';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectItems } from 'redux/contacts/selector';
import { addContact } from 'redux/contacts/operation';
import { toast } from 'react-toastify';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const formReff = useRef(null);
  const contacts = useSelector(selectItems);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleAddContactSubmit = e => {
    e.preventDefault();
    const isIncludeContactNumber = contacts?.find(
      contact => contact.number === number
    );

    if (isIncludeContactNumber) {
      return toast.warning(`"${number}" is already in another contact name`);
    } else {
      const contact = { name, number };
      dispatch(addContact(contact));
      setName('');
      setNumber('');
    }
  };

  return (
    <Form ref={formReff} onSubmit={handleAddContactSubmit}>
      <Label>
        <Span>Name</Span>
        <Input
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        <Span>Number</Span>
        <Input
          onChange={handleChange}
          type="tel"
          name="number"
          value={number}
          pattern="\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}"
          title="number number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <AddButton type="submit">Add contact</AddButton>
    </Form>
  );
};
