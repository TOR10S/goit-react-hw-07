import { useDispatch, useSelector } from 'react-redux';
import { addContact, selectContacts } from '../../redux/contactSlice';

const ContactsForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact(name, number));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" required />
      <input type="tel" name="number" placeholder="Phone" required />
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactsForm;
