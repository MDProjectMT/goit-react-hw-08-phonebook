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
          to="/goit-react-hw-08-phonebook/contactlist"
        >
          Contact List
        </NavLink>
      )}
    </nav>
  );
};
