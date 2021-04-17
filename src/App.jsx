import Container from './components/Container';
import Logo from './components/Logo';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

// Нужно перенести:
// - проверка на дубликат
// - подтверждение удаления
// - локальное хранилище

const App = () => {
  return (
    <Container>
      <Logo />

      <ContactForm />

      <Filter />

      <ContactList />
    </Container>
  );
};

export default App;

// class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   // Cчитывает при маунте локальное и записывает в стейт
//   componentDidMount() {
//     const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   // Сравнивает после каждого обновления стейты, и если не равны, тогда пишет в локальное
//   componentDidUpdate(prevProps, prevState) {
//     const nextContacts = this.state.contacts;
//     const prevContacts = prevState.contacts;

//     if (nextContacts !== prevContacts) {
//       localStorage.setItem('contacts', JSON.stringify(nextContacts));
//     }
//   }

//   // Добавляет контакт
//   addContact = data => {
//     // Создает новый контакт с ID из даты
//     const newContact = {
//       id: Date.now().toString(),
//       name: data.name.toLowerCase(),
//       number: data.number,
//     };

//     // Проверка на дубликат
//     const duplicateName = this.state.contacts.find(
//       contact => contact.name === newContact.name,
//     );

//     if (duplicateName) {
//       alert(`${newContact.name} is already on contacts`);
//       return;
//     }

//     this.setState(({ contacts }) => ({
//       contacts: [newContact, ...contacts],
//     }));
//   };

//   // Следит за полем фильтрации и пишет в стейт
//   handleFilter = event => {
//     this.setState({ filter: event.currentTarget.value });
//   };

//   // Фильтрует и возвращает результат фильтра
//   filterContacts = () => {
//     const { contacts, filter } = this.state;

//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter),
//     );
//   };

//   // Удаляет контакт
//   deleteContact = id => {
//     const answer = window.confirm('Want to delete?');

//     if (answer) {
//       this.setState(prevState => ({
//         contacts: prevState.contacts.filter(contact => contact.id !== id),
//       }));
//     }
//   };

//   render() {
//     const { filter, contacts } = this.state;
//     const filteredResults = this.filterContacts();

//     return (
//       <Container>
//         <Logo />

//         <ContactForm onSubmit={this.addContact} />

//         {contacts.length > 0 && (
//           <Filter value={filter} onChange={this.handleFilter} />
//         )}

//         <ContactList
//           contacts={filteredResults}
//           onDeleteContact={this.deleteContact}
//         />
//       </Container>
//     );
//   }
// }

// export default App;
