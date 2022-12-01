import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './components/User';
import Main from './components/Main';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/user/:userId" element={<User />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
