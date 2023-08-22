import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';
import NavBar from './layouts/Navbar/Navbar';
import SearchBar from './components/SearchBar/SearchBar';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/test2' element={<SearchBar/>}/>
      </Routes>
    </Router>
  );
}

export default App;