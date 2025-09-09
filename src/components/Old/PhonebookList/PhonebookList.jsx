import React from 'react';
import ContactFilter from 'components/Phonebook/ContactFilter';

const PhonebookList = ({
  contacts,
  filter,
  changeFilter,
  onDeleteContact,
  children,
}) => {
  return (
    <div>
      <h1>Phonebook</h1>
      {children}
      <h1>Contacts</h1>
      <ContactFilter value={filter} onChangeFilter={changeFilter} />
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <p>
              {name}: {number}
            </p>
            <button onClick={() => onDeleteContact(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhonebookList;
