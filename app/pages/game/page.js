// pages/index.js

import Head from 'next/head';
import Header from '../../components/Header';

// Define data for featured games including images
const featuredGames = [
  { name: '0 AD', description: 'A real-time strategy game set in the ancient world.', image: '/img1.jpg' },
  { name: 'Battle for Wesnoth', description: 'A turn-based tactical strategy game with a high fantasy theme.', image: '/img2.jpg' },
  { name: 'Super Tux Kart', description: 'A 3D open-source arcade racing game.', image: '/img3.jpg' },
  { name: 'Super Tux', description: 'A side-scrolling platform game featuring Tux, the Linux mascot.', image: '/img4.jpg' },
  { name: 'Xonotic', description: 'A fast-paced first-person shooter.', image: '/img5.jpg' },
  // Add more featured games with images as needed
];

// Define game categories with colors
const gameCategories = [
  { name: 'Action', color: 'bg-yellow-300' },
  { name: 'Strategy', color: 'bg-blue-300' },
  { name: 'Simulation', color: 'bg-green-300' },
  { name: 'Adventure', color: 'bg-purple-300' },
  { name: 'Puzzle', color: 'bg-indigo-300' },
  { name: 'Racing', color: 'bg-pink-300' },
  { name: 'Sports', color: 'bg-orange-300' },
  // Add more categories as needed
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Next Game Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />

      {/* Hero and Featured Games Section */}
      <section className="relative py-20 px-8 bg-gradient-to-r from-green-100 via-blue-100 to-purple-100">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Explore Open-Source Games</h1>
          <p className="text-xl text-gray-700">A collection of the best open-source games for you to enjoy.</p>
          <button className="mt-6 px-8 py-4 bg-purple-600 text-white text-lg rounded-full hover:bg-purple-700 focus:outline-none">Start Playing</button>
        </div>

        {/* Featured Games Section */}
        <div className="w-full mt-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Featured Games</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {featuredGames.map((game, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xs transform hover:scale-105 transition-transform">
                <img src={game.image} alt={game.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{game.name}</h3>
                  <p className="text-gray-700">{game.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm font-medium text-purple-600">Learn More</span>
                    <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none">Play Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto py-8">
        {/* Game Categories Section */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Game Categories</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {gameCategories.map((category, index) => (
              <div key={index} className={`bg-white shadow-lg rounded-lg p-8 text-center transform hover:scale-105 transition-transform ${category.color}`}>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{category.name}</h3>
                <p className="text-gray-700">Discover games in the {category.name.toLowerCase()} genre.</p>
                <div className="mt-4">
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none">Explore {category.name}</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-8 py-4 bg-gray-100 text-center text-gray-700">
        {/* Footer content */}
        <p>&copy; 2024 Next Game Page. All rights reserved.</p>
      </footer>
    </div>
  );
}
