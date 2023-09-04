import axios from 'axios';

axios.defaults.baseURL = 'https://64f5c6c32b07270f705daf99.mockapi.io/api/v1/';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}
