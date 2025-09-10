import ContactItem from 'components/ContactItem';

const ContactList = ({ contacts }) => {
  return (
    <ul>
      <ContactItem contacts={contacts} />
    </ul>
  );
};

export default ContactList;
