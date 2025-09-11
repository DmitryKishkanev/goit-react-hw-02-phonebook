import React, { Component } from 'react';

import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import initialContacts from 'contacts.json';
import { Container } from 'components/App/App.styled';

class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
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
        <h1>Phonebook</h1>
        <ContactForm
          contacts={this.state.contacts}
          // name={this.state.name}
          // number={this.state.number}
          // onHandleChange={this.handleChange}
          // onAddContact={this.addContact}
        />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onChangeFilter={this.changeFilter} />
        <ContactList contacts={filteredContacts} />
      </Container>
    );
  }
}

export default App;
