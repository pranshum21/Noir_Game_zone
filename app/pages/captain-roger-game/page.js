// pages/CTD.js
"use client"
import React, { useState, useEffect } from 'react';
import Head from 'next/head';

const CTD = () => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const iframe = document.getElementById('gameFrame');
      if (iframe && iframe.contentWindow && typeof iframe.contentWindow.getCurrentScore === 'function') {
        setScore(iframe.contentWindow.getCurrentScore());
      }
    }, 1000); // Update score every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container" style={{ width: '100%', height: '100vh', backgroundColor: 'lightpink', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
      <Head>
        <title>Connect The Dots Game</title>
        <meta name="description" content="Play Connect The Dots Game" />
      </Head>
      <main style={{ border: '5px solid #000', borderRadius: '10px', overflow: 'hidden', width: '95%', height: '95%', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', position: 'relative' }}>
        <iframe
          id="gameFrame"
          src="/Captain-Rogers-master/index.html" // Adjust the path to your HTML file in the public folder
          width="100%"
          height="100%"
          style={{ border: 'none', backgroundColor: 'black' }} // Set background color to black
        ></iframe>
        <div style={{ position: 'absolute', top: '10px', right: '10px', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '5px 10px', borderRadius: '5px' }}>
          Score: {score}
        </div>
      </main>
    </div>
  );
};

export default CTD;
