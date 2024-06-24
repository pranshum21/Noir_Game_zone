// pages/about.js
import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>NOIR GAME ZONE - About Us</title>
        <meta name="description" content="Learn about our mission and vision at The Noir Soul Syndicate and how we are bringing diversity, inclusion, and empowerment to the gaming industry through Noir Game Zone." />
      </Head>
      <Header />
      <AboutSection />
      <Footer />
    </>
  );
}

export default AboutPage;
