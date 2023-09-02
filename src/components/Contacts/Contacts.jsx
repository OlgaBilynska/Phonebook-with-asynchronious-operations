import React from 'react';
import Contact from './Contact/Contact';
import { ContactList } from './Contacts.styled';

const Contacts = () => {
  return (
    <ContactList>
      <Contact />
    </ContactList>
  );
};

export default Contacts;
