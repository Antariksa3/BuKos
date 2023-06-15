import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';
import ListKos from './pages/list';
import NotFoundPage from './pages/notFound';
import Detail from './pages/detail';
import Profile from './pages/profile/profile';
import Pembayaran from './pages/pembayaran';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/listkos' element={<ListKos/>}/>
        <Route path='/detail' element={<Detail/>}/>
        <Route path='/profile/*' element={<Profile/>}/>
        <Route path='/pembayaran' element={<Pembayaran/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;