import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';
import ListKos from './pages/list';
import NotFoundPage from './pages/notFound';
import Detail from './pages/detail';
import Profile from './pages/profile/profile';
import Pembayaran from './pages/pembayaran';
import Dashboard from './pages/owner/dashboard';
import OwnerDetailPage from './pages/owner/ownerDetail';
import DaftarKos from './pages/owner/daftarKos';
import { AuthProvider } from './utils/auth/authContext';

// const ProtectedProfile = () => {
//   return (
//     <PrivateRoute
//       allowedRoles={['user']}
//       fallbackPath='/*'
//       element={<Profile />}
//     />
//   );
// };

// const ProtectedDashboard = () => {
//   return (
//     <PrivateRoute
//       allowedRoles={['owner']}
//       fallbackPath='/*'
//       element={<Dashboard />}
//     />
//   );
// };

// const userRole = getUserRole();

// const isAuthenticated = (allowedRoles) => {
//   return userRole && allowedRoles.includes(userRole);
// };

// const PrivateRoute = ({ element: Element, allowedRoles }) => {
//   return isAuthenticated(allowedRoles) ? <Element /> : <Navigate to="/" />;
// };

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/listkos' element={<ListKos />} />
          <Route path='/detail' element={<Detail />} />

          {/* <Route
          path='/profile/*'
          element={
            <PrivateRoute
              element={<Profile />}
              allowedRoles={['user']}
              fallbackPath='/*'
            />
          }
        />

        <Route
          path='/dashboard/*'
          element={
            <PrivateRoute
              element={<Dashboard />}
              allowedRoles={['owner']}
              fallbackPath='/*'
            />
          }
        /> */}

          {/* <Route element={<PrivateRoute />}> */}
          <Route path='/profile/*' element={<Profile />} />
          <Route path='/dashboard/*' element={<Dashboard />} />
          <Route path='/daftar_kos' element={<DaftarKos />} />
          {/* </Route> */}

          {/* <Route path='/profile/*' element={<ProtectedProfile />} />
        <Route path='/dashboard/*' element={<ProtectedDashboard />} /> */}
          {/* <Route path='/profile/*' element={<Profile />} />
        <Route path='/dashboard/*' element={<Dashboard />} /> */}
          <Route path='/pembayaran' element={<Pembayaran />} />
          <Route path='/test' element={<OwnerDetailPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;