import { NavLink } from 'react-router-dom';
import scss from './Navigation.module.scss';

export const Navigation = () => {
  return (
    <nav>
      <NavLink className={scss.link} to="/">
        Home
      </NavLink>
      <NavLink className={scss.link} to="/login">
        Log in
      </NavLink>
    </nav>
  );
};
