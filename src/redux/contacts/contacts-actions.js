import types from './contacts-types';

const addContact = data => ({
  type: types.ADD,
  payload: {
    id: Date.now().toString(),
    name: data.name.toLowerCase(),
    number: data.number,
  },
});

const deleteContact = contactId => ({
  type: types.DELETE,
  payload: contactId,
});

const changeFilter = value => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

// eslint-disable-next-line
export default { addContact, deleteContact, changeFilter };
