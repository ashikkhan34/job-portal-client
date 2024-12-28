import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/header/Navbar';
import Footer from '../Pages/Footer/Footer';

const MainlayOut = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainlayOut;