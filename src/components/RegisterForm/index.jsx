import { useDispatch } from 'react-redux';
import { register } from '../../redux/operations/auth.operation';
import scss from './RegisterForm.module.scss';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const form = ev.currentTarget;
    const { name, email, password } = form.elements;
    dispatch(
      register({
        name: name.value,
        emial: email.value,
        password: password.value,
      })
    );
    form.reset();
  };
  return (
    <form className={scss.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={scss.label}>
        Username
        <input type="text" name="name" />
      </label>
      <label className={scss.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={scss.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button className={scss.button} type="submit">
        Register
      </button>
    </form>
  );
};
