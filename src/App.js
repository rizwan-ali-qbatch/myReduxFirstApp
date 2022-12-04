import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./components/User";
import Main from "./components/Main";
import Admin from "./components/Admin";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
