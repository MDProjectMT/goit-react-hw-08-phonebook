import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks';
import scss from './UserMenu.module.scss';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={scss.wrapper}>
      <p className={scss.username}>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
