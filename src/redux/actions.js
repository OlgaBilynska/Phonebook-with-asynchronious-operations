import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction('contacts/fetchAllRequest');
export const fetchContactsSuccess = createAction('contacts/fetchAllSuccess');
export const fetchContactsError = createAction('contacts/fetchAllError');

export const addContact = createAction('contacts/addContact');

export const deleteContact = createAction('contacts/deleteContact');
