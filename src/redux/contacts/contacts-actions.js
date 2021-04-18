import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add', data => ({
  payload: {
    id: Date.now().toString(),
    name: data.name.toLowerCase(),
    number: data.number,
  },
}));

const deleteContact = createAction('contacts/delete');

const changeFilter = createAction('contacts/change-filter');

// eslint-disable-next-line
export default { addContact, deleteContact, changeFilter };
