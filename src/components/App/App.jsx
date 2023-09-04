import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Contacts from '../Contacts/Contacts';
import Filter from '../Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import {
  Container,
  PhonebookTitle,
  ContactTitle,
  ContactTotal,
} from './App.styled';
import { getContacts } from 'redux/selectors';
// import * as contactOperations from './../../redux/operations';
import { fetchContacts } from 'redux/operations';

export function App() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
