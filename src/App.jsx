import { MainLayout } from './components/Layouts/MainLayout';
import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { RestrictedRoute } from './components/route/RestrictedRoute';
import { PrivateRoute } from './components/route/PrivateRoute';
import { useAuth } from './hooks';
import { useDispatch } from 'react-redux';
import { refreshUser } from './redux/operations/auth.operation';

const HomePage = lazy(() => import('./pages/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ContactsBook = lazy(() => import('./pages/ContactsBook'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...please wait</b>
  ) : (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/goit-react-hw-08-phonebook/" element={<HomePage />} />
        <Route
          path="/goit-react-hw-08-phonebook/register"
          element={
            <RestrictedRoute
              redictedTo="/goit-react-hw-08-phonebook/contactlist"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/goit-react-hw-08-phonebook/login"
          element={
            <RestrictedRoute
              redictedTo="/goit-react-hw-08-phonebook/contactlist"
              component={<LoginPage />}
            />
          }
        />
        <Route
          path="/goit-react-hw-08-phonebook/contactlist"
          element={
            <PrivateRoute
              redirectTo="/goit-react-hw-08-phonebook/login"
              component={<ContactsBook />}
            />
          }
        />
      </Route>
    </Routes>
  );
};
