// import React, { createContext, useState } from 'react';
// import NavBar from '../components/Navbar/Navbar';
// import Home from '../pages/home';
// import Register from '../pages/register';
// import ListKos from '../pages/list';
// import Login from '../pages/login';
// import App from '../App';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//     const login = () => {
//         setIsLoggedIn(true);
//     };

//     const logout = () => {
//         setIsLoggedIn(false);
//     };

//     return (
//         <AuthContext.Provider value={{ isLoggedIn, login, logout }}>

//         </AuthContext.Provider>
//     );
// };
