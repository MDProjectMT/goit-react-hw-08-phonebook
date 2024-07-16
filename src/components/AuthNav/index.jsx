import scss from './AuthNav.module.scss';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div>
      <NavLink className={scss.link} to="/goit-react-hw-08-phonebook/register">
        Register
      </NavLink>
      <NavLink className={scss.link} to="/goit-react-hw-08-phonebook/login">
        Log in
      </NavLink>
    </div>
  );
};
