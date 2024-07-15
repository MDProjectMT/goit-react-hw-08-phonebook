import ContactsBook from './pages/ContactsBook';
import { MainLayout } from './components/Layouts/MainLayout';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';

// const HomePage = lazy(() => import('./pages/HomePage'));
// const RegisterPage = lazy(() => import('./pages/RegisterPage'));
// const LoginPage = lazy(() => import('./pages/LoginPage'));
// const ContactsBook = lazy(() => import('./pages/ContactsBook'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contactlist" element={<ContactsBook />} />
      </Route>
    </Routes>
  );
};
