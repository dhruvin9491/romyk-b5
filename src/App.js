import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/clients/Login';
import Register from './pages/clients/Register';
import { ToastContainer } from 'react-toastify';
import { createAdmin, getLoginCredential } from './helpers/authHelper';
import ClientRoutes from './routes/ClientRoutes';
import AdminRoutes from './routes/AdminRoutes';
import PrivateRoutes from './routes/PrivateRoutes';
import { ROLE } from './constants/commonConstants';

function App(props) {
  useEffect(() => {
    createAdmin();
  }, []);

  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
        <Route element={<PrivateRoutes role={[ROLE.USER, ROLE.ADMIN]} />}>
          <Route path={'/*'} element={<ClientRoutes />} />
        </Route>
        <Route element={<PrivateRoutes role={[ROLE.ADMIN]} />}>
          <Route path={'/admin/*'} element={<AdminRoutes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;