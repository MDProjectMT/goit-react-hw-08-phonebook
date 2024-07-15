import scss from './AuthNav.module.scss';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div>
      <NavLink className={scss.link} to="/register">
        Register
      </NavLink>
      <NavLink className={scss.link} to="/login">
        Log in
      </NavLink>
    </div>
  );
};
