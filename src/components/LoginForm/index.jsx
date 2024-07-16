import { useDispatch } from 'react-redux';
import scss from './LoginForm.module.scss';
import { logIn } from '../../redux/operations/auth.operation';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const form = ev.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={scss.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={scss.label}>
        Email
        <input type="email" name="email"></input>
      </label>
      <label className={scss.label}>
        Password
        <input type="password" name="password" />
      </label>
      <button className={scss.button} type="submit">
        Log in
      </button>
    </form>
  );
};
