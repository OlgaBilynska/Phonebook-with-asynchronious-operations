import React from 'react';
import { ContactItem, ContactContainer } from './Contact.styled';
import { Button } from 'components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactSlice';

const getVisibleContacts = (contacts, filter) => {
  if (filter) {
    const filterNorm = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNorm)
    );
    return filteredContacts;
  }
  return contacts;
};

const Contact = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const visibleContacts = getVisibleContacts(contacts, filter);

  return visibleContacts.map(({ id, name, number }) => {
    return (
      <ContactContainer key={id}>
        <ContactItem>
          {name} : {number}
        </ContactItem>
        {/* <Button type="button" onClick={() => dispatch(deleteContact(id))}> */}
        Delete
        {/* </Button> */}
      </ContactContainer>
    );
  });
};

export default Contact;
