import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PhonebookEditor from 'components/PhonebookEditor';
import { Container } from 'components/App/App.styled';
import initialContacts from 'contacts.json';

class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  addContact = e => {
    e.preventDefault();

    const nameRegex = /^[a-zA-Zа-яА-ЯёЁ]{2,}(?:[ '-][a-zA-Zа-яА-ЯёЁ]+)*$/u;
    const phoneRegex = /^\+?[0-9\s\-()]{7,}$/;

    const name = this.state.name.trim();
    const number = this.state.number.trim();

    // Валидация имени
    if (!nameRegex.test(name)) {
      alert(
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
      );
      this.setState({
        name: '',
      });
      return;
    }

    if (!phoneRegex.test(number)) {
      alert(
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
      );
      this.setState({
        number: '',
      });
      return;
    }

    const contact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
      name: '',
      number: '',
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredCntacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const filteredContacts = this.getFilteredCntacts();

    return (
      <Container>
        <PhonebookEditor
          name={this.state.name}
          number={this.state.number}
          filter={this.state.filter}
          onChangeFilter={this.changeFilter}
          onHandleChange={this.handleChange}
          contacts={filteredContacts}
          onAddContact={this.addContact}
        />
      </Container>
    );
  }
}

export default App;
