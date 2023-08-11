import { Navigate } from 'react-router-dom';
import { getUserRole } from './auth';

const userRole = getUserRole();

const isAuthenticated = (allowedRoles) => {
    return userRole && allowedRoles.includes(userRole);
};

const PrivateRoute = ({ element: Element, allowedRoles }) => {
    return isAuthenticated(allowedRoles) ? <Element /> : <Navigate to="/*" />;
};

export default PrivateRoute;
