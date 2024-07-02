// pages/CTD.js

import React from 'react';
import Head from 'next/head';

const CTD = () => {
  return (
    <div className="container">
      <Head>
        <title>Connect The Dots Game</title>
        <meta name="description" content="Play Connect The Dots Game" />
      </Head>
      <main>
        <iframe
          src="/Captain-Rogers-master/index.html"  // Path to your HTML file in the public folder
          width="100%"
          height="600px"
          style={{ border: 'none' }}
        ></iframe>
      </main>
    </div>
  );
};

export default CTD;
