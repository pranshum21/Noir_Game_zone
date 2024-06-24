import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <Head>
        <title>NOIR GAME ZONE</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Your Ultimate Destination for Open-Source Gaming" />
      </Head>
      <Header />

      <section
        className="relative text-center bg-cover bg-center bg-no-repeat py-20"
        style={{ backgroundImage: 'url(/noir-coin.jpeg)' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold text-white">Welcome to NOIR GAME ZONE</h1>
          <p className="text-xl mt-4 text-gray-300">Your Ultimate Destination for Open-Source Gaming</p>
          <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-700 transition" aria-label="Explore Now">Explore Now</button>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-center">
        <h2 className="text-4xl mb-10 text-white">Featured Games</h2>

        <div className="flex gap-5 justify-center flex-wrap">
          <div className="bg-gray-800 p-5 rounded-lg text-center transition-transform transform hover:scale-105 max-w-xs">
            <div className="flex justify-center">
              <Image src="/img1.jpg" alt="Game 1" width={200} height={200} className="rounded" />
            </div>
            <h3 className="text-2xl mt-4 text-white">Battle for Wesnoth</h3>
            <p className="mt-2 text-sm text-gray-300">
              A fantasy turn-based strategy game inspired by classic titles like Heroes of Might and Magic. You can command a variety of units on a hex grid battlefield, conquer territories, develop your kingdom, and research new technologies.
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition">Play Now</button>
          </div>

          <div className="bg-gray-800 p-5 rounded-lg text-center transition-transform transform hover:scale-105 max-w-xs">
            <div className="flex justify-center">
              <Image src="/img2.jpg" alt="Game 2" width={200} height={200} className="rounded" />
            </div>
            <h3 className="text-2xl mt-4 text-white">Vega Strike</h3>
            <p className="mt-2 text-sm text-gray-300">
              A real-time strategy game set in a future where humanity is at war with an alien race. You can build bases, gather resources, construct various military units, and engage in fast-paced battles.
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition">Play Now</button>
          </div>

          <div className="bg-gray-800 p-5 rounded-lg text-center transition-transform transform hover:scale-105 max-w-xs">
            <div className="flex justify-center">
              <Image src="/img3.jpg" alt="Game 3" width={200} height={200} className="rounded" />
            </div>
            <h3 className="text-2xl mt-4 text-white">SuperTuxKart</h3>
            <p className="mt-2 text-sm text-gray-300">
              A 3D kart racing game similar to Mario Kart. Race against other characters on various tracks, use power-ups, and collect coins to unlock new characters and karts.
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition">Play Now</button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-center">
        <h2 className="text-4xl mb-10 text-white">Join the Community</h2>
        <p className="mb-10 text-gray-300">Connect with fellow gamers, participate in events, and stay updated.</p>
        <div className="flex justify-center">
          {/* Social media integration */}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
