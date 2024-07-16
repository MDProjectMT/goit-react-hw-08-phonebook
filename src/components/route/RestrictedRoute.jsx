import { useAuth } from '../../hooks';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export const RestrictedRoute = ({ component: Component, redictedTo = '/' }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redictedTo} /> : Component;
};

RestrictedRoute.propTypes = {
  component: PropTypes.node,
  redirectTo: PropTypes.string,
};
