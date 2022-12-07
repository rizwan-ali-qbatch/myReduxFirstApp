import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './components/User';
import Main from './components/Main';
import Admin from './components/Admin';
import Ecom from './components/Ecom';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar title="My APP" Posts="Posts" Admin="Admin" Ecom="Ecom" />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/ecom" element={<Ecom />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
