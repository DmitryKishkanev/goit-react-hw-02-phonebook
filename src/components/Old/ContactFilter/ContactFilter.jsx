import React from 'react';

const ContactFilter = ({ value, onChangeFilter }) => {
  return (
    <label>
      <span>Find contacts by name </span>
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onChangeFilter}
      />
    </label>
  );
};

export default ContactFilter;
