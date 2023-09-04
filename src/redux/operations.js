import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './actions';
import * as API from './../contactsAPI';

export const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const contacts = await API.fetchContacts();
    console.log('contacts', contacts);
    dispatch(fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
};
