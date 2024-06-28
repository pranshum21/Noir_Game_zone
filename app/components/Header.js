import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

const Header = () => {
  return (
    <>
    <Head>
        <title >NOIR GAME ZONE</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <header className="flex justify-between items-center p-6 bg-gray-900">
      <div className="relative w-10 h-10">
    <Image src="/noir-coin-n.png" alt="NOIR Coin" layout="fill" objectFit="cover" />
         </div>
        <div className="text-2xl font-bold text-blue-500">NOIR GAME ZONE</div>
        <nav>
          <ul className="flex gap-5 list-none">
            <li className="relative group">
              <a href="/" className=" text-white hover:text-blue-500 transition">Home</a>
            </li>
           
            
  <li className="relative group z-10">
  <a href="/pages/game" className="text-white hover:text-blue-500 transition">Games</a>
  <ul className="absolute left-0 mt-1 bg-gray-800 hidden group-hover:block z-10">
    <li><a href="#" className="block px-4 py-1  text-white hover:bg-black-700">Featured Games</a></li>
    <li><a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Game Categories</a></li>
  </ul>
</li>

            <li className="relative group z-10">
              <a href="/pages/noir-coin" className=" text-white hover:text-blue-500 transition">Noir Coin® & NFTs</a>
            </li>
            <li className="relative group z-10">
              <a href="#" className=" text-white hover:text-blue-500 transition ">Community</a>
              <ul className="absolute left-0 mt-1 bg-gray-800 hidden group-hover:block z-10">
                <li><a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Forums</a></li>
                <li><a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Events</a></li>
                <li><a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Leaderboards</a></li>
                <li><a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Tournaments</a></li>
              </ul>
            </li>
            <li className="relative group">
              <a href="#" className=" text-white hover:text-blue-500 transition">Blog</a>
            </li>
            <li className="relative group z-10">
              <a href="#" className=" text-white hover:text-blue-500 transition">Support</a>
              <ul className="absolute left-0 mt-1 bg-gray-800 hidden group-hover:block z-10">
                <li><a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">FAQs</a></li>
                <li><a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Contact Us</a></li>
                <li><a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Technical Support</a></li>
              </ul>
            </li>
            <li className="relative group z-10">
              <a href="#" className=" text-white hover:text-blue-500 transition">Account</a>
              <ul className="absolute left-0 mt-1 bg-gray-800 hidden group-hover:block z-10">
                <li><a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Profile</a></li>
                <li><a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Achievements</a></li>
                <li><a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Settings</a></li>
              </ul>
            </li>
            <li className="relative group z-10">
              <a href="#" className=" text-white hover:text-blue-500 transition">Shop</a>
              <ul className="absolute left-0 mt-1 bg-gray-800 hidden group-hover:block z-10">
                <li><a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Merchandise</a></li>
                <li><a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">In-Game Items</a></li>
              </ul>
            </li>
            <li className="relative group">
              <a href="/pages/about" className=" text-white hover:text-blue-500 transition">About Us</a>
            </li>
          </ul>
        </nav>
        <div>
          <input type="text" placeholder="Search games..." className="p-2 rounded bg-gray-800 text-white border border-gray-600" />
        </div>
      </header>
      </>
  );
}

export default Header;
