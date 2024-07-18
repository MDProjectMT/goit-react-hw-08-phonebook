import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';
import { useEffect } from 'react';
import { setFilter } from '../redux/slices/filter.slice';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchContacts,
  deleteContact,
  addContact,
} from '../redux/operations/contacts.operation';
import {
  selectContacts,
  selectError,
  selectLoading,
} from '../redux/selectors/contacts.selector';
import workMan from '../images/man-work.jpg';

const styles = {
  container: {
    minHeight: 'calc(100vh - 600px)',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    gap: '30px',
    width: '100%',
    backgroundColor: 'rgb(94, 79, 70, 0.1)',
    boxShadow: 'rgba(94, 79, 70, 0.2) 0px 4px 15px 4px',
    // backgroundImage: `url(${workplaceImage})`,
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center',
    // backgroundSize: 'cover',
    height: '100vh',
    paddingTop: '15px',
  },

  container1: {
    backgroundImage: `url(${workMan})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '50%',
    height: '100%',
  },

  container2: {
    width: '50%',
  },
  titlesmall: {
    fontWeight: 500,
    fontSize: 24,
    color: '#3f342b',
    textAlign: 'center',
    fontFamily: `'Gill Sans', 'Gill Sans MT', 'Calibri', 'Trebuchet MS',
    sans-serif`,
  },
};

export default function ContactsBook() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const contacts = useSelector(selectContacts);
  const filter = useSelector((state) => state.filter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    const storedContact = localStorage.getItem('contacts');
    if (storedContact) {
      dispatch(fetchContacts(JSON.parse(storedContact)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  function handleChange(ev) {
    dispatch(setFilter(ev.currentTarget.value));
  }

  function handleSubmit(name, number) {
    const filtered = contacts.filter(
      (item) =>
        item.name.toLowerCase() === name.toLowerCase() && item.number === number
    );

    if (filtered.length > 0) {
      window.alert(JSON.stringify(`${name} is already in contacts`));
      return;
    }
    dispatch(addContact({ name, number }));
  }

  function handleDelete(id) {
    dispatch(deleteContact(id));
  }

  return (
    <div style={styles.container}>
      <div style={styles.container1}>
        <h2 style={styles.titlesmall}>Phonebook</h2>
        <ContactForm onSubmit={handleSubmit} />
      </div>
      <div style={styles.container2}>
        <h2 style={styles.titlesmall}>Contacts</h2>
        <Filter filter={filter} onChange={handleChange} />
        <ContactList
          filter={filter}
          contacts={contacts}
          onDelete={handleDelete}
        />
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
}
