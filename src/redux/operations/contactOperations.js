import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  removeContactsRequest,
  removeContactsSuccess,
  removeContactsError
} from '../action/contacts';

import { baseURL } from '../operations/authOperations';

const addContact = (contactObj) => async (dispatch) => {
  try {
    dispatch(addContactRequest());
    const result = await axios.post(`${baseURL}/contacts`, contactObj);
    dispatch(addContactSuccess(result.data));
  } catch (error) {
    dispatch(addContactError(error));
  }
}

const getContacts = () => async (dispatch) => {
  try {
    dispatch(getContactsRequest());
    const result = await axios.get(`${baseURL}/contacts`);
    dispatch(getContactsSuccess(result.data));
  } catch (error) {
    dispatch(getContactsError(error));
  }
}

const removeContact = id => async (dispatch) => {
  try {
    dispatch(removeContactsRequest());
    await axios.delete(`${baseURL}/contacts/${id}`);
    dispatch(removeContactsSuccess(id));
  } catch (error) {
    dispatch(removeContactsError(error));
  }
}

export default {
  addContact,
  getContacts,
  removeContact
}
