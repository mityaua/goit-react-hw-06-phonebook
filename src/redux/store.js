import { createStore, combineReducers } from 'redux'; // Берём функцию создания хранилища из redux
import { composeWithDevTools } from 'redux-devtools-extension'; // Композиция редюсеров
import contactsReducer from './contacts/contacts-reducer';

// Корневой редюсер
const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const store = createStore(rootReducer, composeWithDevTools()); // Создает хранилище (может содержать три параметра)

export default store;
