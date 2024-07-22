import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { register } from '../../redux/operations/auth.operation';
import scss from './RegisterForm.module.scss';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.auth);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const form = ev.currentTarget;
    const { name, email, password } = form.elements;
    dispatch(
      register({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
    form.reset();
  };

  useEffect(() => {
    if (error === 'Użytkownik o takim e-mailu już istnieje') {
      window.alert(error);
    }
  }, [error]);

  return (
    <div>
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
      {status === 'loading' && <div>Loading...</div>}
      {status === 'succeeded' && <div>Registration successful!</div>}
      {status === 'failed' &&
        error !== 'Użytkownik o takim e-mailu już istnieje' && (
          <div style={{ color: 'red' }}>{error}</div>
        )}
    </div>
  );
};
