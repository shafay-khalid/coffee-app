import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../UI/Header';
import Footer from '../UI/Footer';
import ScrollToTop from './ScrollToTop';

const AppLayout = () => {
  return (
    <>
    <ScrollToTop/>
    <Header />
    <Outlet />
    <Footer />
    </>
  );
};

export default AppLayout;