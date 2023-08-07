import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';
import ListKos from './pages/list';
import NotFoundPage from './pages/notFound';
import Detail from './pages/detail';
import Profile from './pages/profile';
import Pembayaran from './pages/pembayaran';
import SyaratKetentuan from './pages/syaratKetentuan';
import HubungiCs from './pages/hubungiCs';

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
        <Route path='/syarat&ketentuan/*' element={<SyaratKetentuan/>}/>
        <Route path='/hubungics' element={<HubungiCs/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;