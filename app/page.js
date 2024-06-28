// pages/index.js
import React from 'react';
import Head from 'next/head';
import Home from './pages/home/page';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import NoirRewards from './pages/noir-coin/page';
import AboutUs from './pages/about/page';

const HomePage = () => {
  return (
    <>
      <Home />
    </>
  );
}

export default HomePage;
