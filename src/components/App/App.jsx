import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Contacts from '../Contacts/Contacts';
import Filter from '../Filter/Filter';
import { useSelector } from 'react-redux';

import {
  Container,
  PhonebookTitle,
  ContactTitle,
  ContactTotal,
} from './App.styled';
import { getContacts } from 'redux/selectors';

export function App() {
  const contacts = useSelector(getContacts);

  return (
    <Container>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm />
      <ContactTitle>Contacts</ContactTitle>
      <Filter />

      <Contacts />
      <ContactTotal>Number of contacts: {contacts.length}</ContactTotal>
    </Container>
  );
}
