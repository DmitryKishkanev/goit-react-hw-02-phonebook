import React from 'react';

const PhonebookEditor = ({
  name,
  number,
  filter,
  contacts,
  onHandleChange,
  onAddContact,
  onChangeFilter,
}) => {
  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={onAddContact}>
        <label>
          <span>Name</span>
          <input
            value={name}
            onChange={onHandleChange}
            type="text"
            name="name"
            required
          />
        </label>

        <label>
          <span>Number</span>
          <input
            value={number}
            onChange={onHandleChange}
            type="tel"
            name="number"
            required
          />
        </label>

        <button type="submit" className="phonebook__button">
          Добавить
        </button>
      </form>

      <h2>Contacts</h2>

      <label>
        <span>Find contacts by name </span>
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={onChangeFilter}
        />
      </label>

      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <p>
              {name}: {number}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhonebookEditor;
