import { NavLink } from 'react-router-dom';
import scss from './Navigation.module.scss';
import { useAuth } from '../../hooks';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <NavLink className={scss.link} to="/goit-react-hw-08-phonebook/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={scss.link}
          to="/goit-react-hw-08-phonebook/contacts"
        >
          Contacts List
        </NavLink>
      )}
    </nav>
  );
};
// <NavLink className={scss.link} to="/goit-react-hw-08-phonebook/login">
//   Log in
// </NavLink>
// <NavLink className={scss.link} to="/goit-react-hw-08-phonebook/register">
//   Register
// </NavLink>
