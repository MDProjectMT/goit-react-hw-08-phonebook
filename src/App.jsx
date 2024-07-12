import ContactsBook from './pages/ContactsBook';
import MainLayout from './components/Layouts/MainLayout';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="\" element={<MainLayout />}>
        <Route path="/goit-react-hw-08-phonebook/" element={<ContactsBook />} />
      </Route>
    </Routes>
  );
};
