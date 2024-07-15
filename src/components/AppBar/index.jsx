// import { useAuth } from '../../hooks';
// import { AuthNav } from '../AuthNav';
// import { UserMenu } from '../UserMenu';
import { Navigation } from '../Navigation';
import scss from './AppBar.module.scss';

export const AppBar = () => {
  // const { isLoggedIn } = useAuth();

  return (
    <header className={scss.header}>
      <Navigation />
    </header>
  );
};
// {
//   isLoggedIn ? <UserMenu /> : <AuthNav />;
// }
