import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="flex justify-between items-center py-3 px-6 bg-gray-900">
      <div className="flex items-center space-x-3">
        <div className="relative w-10 h-10">
          <Image src="/noir-coin.jpeg" alt="NOIR Coin" layout="fill" objectFit="contain" />
        </div>
        <div className="text-xl font-bold text-blue-500">NOIR GAME ZONE</div>
      </div>
      <nav className="flex-grow ml-6">
        <ul className="flex gap-6 list-none">
          <li><a href="/" className="text-lg text-white hover:text-blue-500 transition">Home</a></li>
          <li><a href="/about" className="text-lg text-white hover:text-blue-500 transition">About Us</a></li>
          <li><a href="/games" className="text-lg text-white hover:text-blue-500 transition">Games</a></li>
          <li><a href="/noir-coin" className="text-lg text-white hover:text-blue-500 transition">Noir Coin® & NFTs</a></li>
          <li><a href="/community" className="text-lg text-white hover:text-blue-500 transition">Community</a></li>
          <li><a href="/blog" className="text-lg text-white hover:text-blue-500 transition">Blog</a></li>
          <li><a href="/support" className="text-lg text-white hover:text-blue-500 transition">Support</a></li>
          <li><a href="/account" className="text-lg text-white hover:text-blue-500 transition">Account</a></li>
          <li><a href="/shop" className="text-lg text-white hover:text-blue-500 transition">Shop</a></li>
        </ul>
      </nav>
      <div className="ml-6">
        <input type="text" placeholder="Search games..." className="p-2 rounded bg-gray-800 text-white border border-gray-600" />
      </div>
    </header>
  );
}

export default Header;
