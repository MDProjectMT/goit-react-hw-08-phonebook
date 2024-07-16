import { Helmet } from 'react-helmet';
import { LoginForm } from '../components/LoginForm';
const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: 'rgb(94, 79, 70, 0.1)',
    boxShadow: 'rgba(94, 79, 70, 0.2) 0px 4px 15px 4px',
  },
};
export default function Login() {
  return (
    <div style={styles.container}>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </div>
  );
}
