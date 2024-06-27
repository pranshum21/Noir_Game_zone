// pages/index.js

import Head from 'next/head';
import Header from '../components/Header';

// Define data for featured games including images
const featuredGames = [
  { name: '0 AD', description: 'A real-time strategy game set in the ancient world.', image: '/img1.jpg' },
  { name: 'Battle for Wesnoth', description: 'A turn-based tactical strategy game with a high fantasy theme.', image: '/img2.jpg' },
  { name: 'Super Tux Kart', description: 'A 3D open-source arcade racing game.', image: '/img3.jpg' },
  { name: 'Super Tux', description: 'A side-scrolling platform game featuring Tux, the Linux mascot.', image: '/img4.jpg' },
  { name: 'Xonotic', description: 'A fast-paced first-person shooter.', image: '/img5.jpg' },
  { name: 'FreeCiv', description: 'An open-source empire-building strategy game.', image: '/img6.jpg' },
  { name: 'OpenTTD', description: 'An open-source simulation game based upon Transport Tycoon Deluxe.', image: '/img7.jpg' },
  { name: 'Hedgewars', description: 'A turn-based strategy game featuring pink hedgehogs.', image: '/img8.jpg' },
  // Add more featured games with images as needed
];

// Define game categories with colors
const gameCategories = [
  { name: 'Action', color: 'bg-yellow-200' },
  { name: 'Strategy', color: 'bg-blue-200' },
  { name: 'Simulation', color: 'bg-green-200' },
  { name: 'Adventure', color: 'bg-purple-200' },
  { name: 'Puzzle', color: 'bg-indigo-200' },
  { name: 'Racing', color: 'bg-pink-200' },
  { name: 'Sports', color: 'bg-orange-200' },
  // Add more categories as needed
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Next Game Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />

      {/* Hero and Featured Games Section */}
      <section className="relative bg-cover bg-center bg-no-repeat py-20 px-8" style={{ backgroundImage: "url('/bg.jpg')" }}>
        <div className="bg-gradient-to-r from-gray-100 to-white bg-opacity-90 py-20 px-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-semibold text-gray-800 mb-4">Discover Exciting Games</h1>
            <p className="text-lg text-gray-600">Explore a world of gaming adventures, from strategy to racing.</p>
            <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">Get Started</button>
          </div>

          {/* Featured Games Section */}
          <div className="w-full">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Featured Games</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredGames.map((game, index) => (
                <div key={index} className={`bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 ${index % 2 === 0 ? 'bg-blue-100' : 'bg-blue-200'}`}>
                  <img src={game.image} alt={game.name} className="w-full h-48 object-cover rounded-t-lg" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{game.name}</h3>
                    <p className="text-gray-600">{game.description}</p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-sm font-medium text-blue-600">Learn More</span>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none">Play Now</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto py-8">
        {/* Game Categories Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Game Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {gameCategories.map((category, index) => (
              <div key={index} className={`bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 ${category.color}`}>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{category.name}</h3>
                <p className="text-gray-600">Discover games in the {category.name.toLowerCase()} genre.</p>
                <div className="mt-4">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none">Explore {category.name}</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-8 py-4 bg-white text-center text-gray-600">
        {/* Footer content */}
        <p>&copy; 2024 Next Game Page. All rights reserved.</p>
      </footer>
    </div>
  );
}
