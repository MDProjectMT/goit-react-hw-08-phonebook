import { useState } from 'react';
import styles from './ContactForm.module.scss';
import PropTypes from 'prop-types';

export default function ContactForm({ onSubmit }) {
  const [form, setForm] = useState({
    name: '',
    number: '',
  });

  function handleChange(ev) {
    const { name, value } = ev.currentTarget;
    setForm((prevForm) => {
      return {
        ...prevForm,
        [name]: value,
      };
    });
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    const { name, number } = form;
    onSubmit(name, number);
    setForm({ name: '', number: '' });
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="nameId">Name</label>
      <input
        id="nameId"
        type="text"
        name="name"
        pattern="^([a-zA-Zа-яА-Я]+[ ]?[a-zA-Zа-яА-Я]+)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="name"
        value={form.name}
        onChange={handleChange}
      />
      <label htmlFor="numberId">Number</label>
      <input
        id="numberId"
        type="tel"
        name="number"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="number"
        value={form.number}
        onChange={handleChange}
      />
      <button type="submit" className={styles.button}>
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
