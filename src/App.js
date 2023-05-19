import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';
import ListKos from './pages/list';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/listkos' element={<ListKos/>}/>
      </Routes>
    </Router>
  );
}

export default App;