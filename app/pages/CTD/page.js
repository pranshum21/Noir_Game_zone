import React from 'react';

const GameWindow = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="w-full md:w-3/4 lg:w-1/2 bg-white rounded shadow-md">
        <iframe
          src="https://cdn.htmlgames.com/ConnectTheDots/"
          width="100%"
          height="100%"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowfullscreen
          style={{ zoom: '4' }} // Zoom level adjustment (adjust as needed)
        ></iframe>
      </div>
    </div>
  );
};

export default GameWindow;
