import { Component } from 'react';
import { nanoid } from 'nanoid';

class ContactForm extends Component {
  state = {
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

    this.props.contacts(({ contacts }) => ({
      contacts: [contact, ...contacts],
      name: '',
      number: '',
    }));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addContact}>
          <label>
            <span>Name</span>
            <input
              value={this.state.name}
              onChange={this.handleChange}
              type="text"
              name="name"
              required
            />
          </label>

          <label>
            <span>Number</span>
            <input
              value={this.state.number}
              onChange={this.handleChange}
              type="tel"
              name="number"
              required
            />
          </label>

          <button type="submit" className="phonebook__button">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
