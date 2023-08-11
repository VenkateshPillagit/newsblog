import React from 'react';
import {
  Box, Toolbar,
} from '@mui/material';
import {
  Navigate, Outlet, Route, Routes,
} from 'react-router-dom';
import Cookies from 'js-cookie';
// import NavBar from './Components/NavBar/NavBar';
import NavBar1 from './Components/NavBar';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Footer from './Components/Footer/Footer';
import './App.css';
import Testing from './Testing';

function App() {
  const token = Cookies.get('Access_Token');
  return (
    <Box display="flex" flexDirection="column">
      {/* <NavBar /> */}
      <NavBar1 />
      <Routes>
        <Route
          path="/"
          element={(
            <Box
              marginTop="4rem"
              marginLeft="5rem"
            >
              {
                  token && token !== undefined ? <Outlet /> : <Outlet><Navigate to="signin" /></Outlet>
                }
            </Box>
          )}
        >
          <Route index path="signin" element={<Login />} />
          <Route path="/" element={<Navigate to="signin" />} />
          <Route path="*" element={<Navigate to="signin" />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="news" element={<Home />} />
          <Route path="sports" element={<Home />} />
          <Route path="international" element={<Home />} />
          <Route path="testing" element={<Testing />} />
        </Route>
      </Routes>
      <Toolbar />
      <Footer />
    </Box>
  );
}

export default App;
