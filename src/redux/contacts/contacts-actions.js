import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add', (name, number) => ({
  payload: {
    id: Date.now().toString(),
    name,
    number,
  },
}));

const deleteContact = createAction('contacts/delete');

const changeFilter = createAction('contacts/change-filter');

// eslint-disable-next-line
export default { addContact, deleteContact, changeFilter };
