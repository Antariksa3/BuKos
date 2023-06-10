import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';
import ListKos from './pages/list';
import NotFoundPage from './pages/notFound';
import { AuthProvider } from './auth/AuthContext';

const App = () => {
  return (
    <Router>
      {/* <AuthProvider> */}
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/listkos' element={<ListKos/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
      {/* </AuthProvider> */}
    </Router>
  );
}

export default App;