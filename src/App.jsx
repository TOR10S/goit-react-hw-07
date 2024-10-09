import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/contactsOps';
import { selectContacts, selectError, selectLoading } from './redux/contactsSlice';
import ContactList from './components/ContactList/ContactList';
import ContactsForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactsForm />
      <SearchBox />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {contacts.length > 0 ? <ContactList /> : <p>No contacts found</p>}
    </div>
  );
};

export default App;
