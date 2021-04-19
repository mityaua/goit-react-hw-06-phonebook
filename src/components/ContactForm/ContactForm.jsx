import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';

import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';

import styles from './ContactForm.module.scss';
import 'react-toastify/dist/ReactToastify.css';

class ContactForm extends Component {
  // Стейт формы
  state = {
    name: '',
    number: '',
  };

  // Метод, наблюдающий за инпутами и записывающий в стейт их значения
  hanldeChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  // Метод на отправке формы. Формирует из стейта контакт и передает во внешний метод
  hanldeSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    const normalizedName = name.toLowerCase();

    // Проверка на дубликат
    const inContacts = this.props.contacts.find(
      contact => contact.name === normalizedName,
    );

    if (inContacts) {
      toast.info(`${name} is already in contacts`, {
        autoClose: 2500,
      });
      return;
    }

    this.props.onSubmit(normalizedName, number); // Внешний метод в пропса

    this.resetForm();
  };

  // Сброс полей формы (после отправки)
  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.hanldeSubmit}>
        <label className={styles.label}>
          Name
          <input
            type="text"
            name="name"
            placeholder="Contact name"
            aria-label="Input for your name"
            className={styles.input}
            value={this.state.name} // Пишем значение в стейт
            onChange={this.hanldeChange} // Наблюдающий метод
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className={styles.label}>
          Number
          <input
            type="tel"
            name="number"
            placeholder="Phone number"
            aria-label="Input for your phone number"
            className={styles.input}
            value={this.state.number} // Пишем значение в стейт
            onChange={this.hanldeChange} // Наблюдающий метод
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
          />
        </label>

        <div className={styles.button__wrapper}>
          <button type="submit" className={styles.button}>
            Add contact
          </button>
          <ToastContainer />
        </div>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) =>
    dispatch(contactsActions.addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
