import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/clients/Home';
import About from './pages/clients/About';
import Cream from './pages/clients/Cream';
import Header from './components/client/Header';
import Footer from './components/client/Footer';
import Service from './pages/clients/Service';
import Blog from './pages/clients/Blog';
import Contact from './pages/clients/Contact';
import Login from './pages/clients/Login';
import Register from './pages/clients/Register';
import { ToastContainer } from 'react-toastify';

function App(props) {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/icecream"} element={<Cream />} />
        <Route path={"/services"} element={<Service />} />
        <Route path={"/blog"} element={<Blog />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;