import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/clients/Home';
import About from '../pages/clients/About';
import Cream from '../pages/clients/Cream';
import Service from '../pages/clients/Service';
import Blog from '../pages/clients/Blog';
import Contact from '../pages/clients/Contact';
import Header from '../components/client/Header';
import Footer from '../components/client/Footer';

function ClientRoutes(props) {
    return (
        <>
            <Header />
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/about"} element={<About />} />
                <Route path={"/icecream"} element={<Cream />} />
                <Route path={"/services"} element={<Service />} />
                <Route path={"/blog"} element={<Blog />} />
                <Route path={"/contact"} element={<Contact />} />
            </Routes>
            <Footer />
        </>
    );
}

export default ClientRoutes;