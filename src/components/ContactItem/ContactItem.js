const ContactItem = ({ contacts }) => {
  return (
    <div>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
        </li>
      ))}
    </div>
  );
};

export default ContactItem;
