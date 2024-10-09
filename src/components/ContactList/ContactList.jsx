import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import Contact from '../Contact/Contact';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
