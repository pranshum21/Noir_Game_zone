import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

const page = () => {
  return (
    <>
    <Head>
      <title>NOIR GAME ZONE</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <header className="flex justify-between items-center p-5 bg-gray-900">
      <div className="text-2xl font-bold text-blue-500">NOIR GAME ZONE</div>
      <nav>
        <ul className="flex gap-10 list-none">
          <li><a href="#" className="text-xl text-white hover:text-blue-500 transition">Home</a></li>
          <li><a href="#" className="text-xl text-white hover:text-blue-500 transition">Games</a></li>
          <li><a href="#" className=" text-xl text-white hover:text-blue-500 transition">About Us</a></li>
          <li><a href="#" className="text-xl text-white hover:text-blue-500 transition">Contact</a></li>
        </ul>
      </nav>
      <div>
        <input type="text" placeholder="Search games..." className="p-2 rounded bg-gray-800 text-white border border-gray-600" />
      </div>
    </header>

    <section className="relative text-center bg-cover bg-center bg-no-repeat py-20" style={{ backgroundImage: 'url(/hero-bg.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      

      <div className="relative z-10">
        <div className="flex overflow-hidden">
          <Image src="/img.jpg" alt="Game 1" layout="fill"  objectFit="cover"/>
          
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-5xl font-bold">Welcome to NOIR GAME ZONE</h1>
          <p className="text-xl mt-4">Your Ultimate Destination for Open-Source Gaming</p>
          <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition">Explore Now</button>
        </div>
      </div>
    </section>

    <section className="py-20 bg-gray-900 text-center">
      <h2 className="text-4xl mb-10">Featured Games</h2>
      
      <div className="flex gap-5 justify-center flex-wrap">
  <div className="bg-gray-800 p-5 rounded-lg text-center transition-transform transform hover:scale-105 max-w-xs">
    <div className="flex justify-center">
      <Image src="/img1.jpg" alt="Game 1" width={200} height={200} className="rounded" />
    </div>
    <h3 className="text-2xl mt-4">Battle for Wesnoth</h3>
    <p className="mt-2 text-sm">A fantasy turn-based strategy game inspired by classic titles like Heroes of Might and Magic. You can command a variety of units on a hex grid battlefield, conquer territories, develop your kingdom, and research new technologies.</p>
    <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition">Play Now</button>
  </div>
  
  <div className="bg-gray-800 p-5 rounded-lg text-center transition-transform transform hover:scale-105 max-w-xs">
    <div className="flex justify-center">
      <Image src="/img2.jpg" alt="Game 2" width={200} height={200} className="rounded" />
    </div>
    <h3 className="text-2xl mt-4">Vega Strike</h3>
    <p className="mt-2 text-sm">A real-time strategy game set in a future where humanity is at war with an alien race. You can build bases, gather resources, construct various military units, and engage in fast-paced battles.</p>
    <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition">Play Now</button>
  </div>
  
  <div className="bg-gray-800 p-5 rounded-lg text-center transition-transform transform hover:scale-105 max-w-xs">
    <div className="flex justify-center">
      <Image src="/img3.jpg" alt="Game 3" width={200} height={200} className="rounded" />
    </div>
    <h3 className="text-2xl mt-4">SuperTuxKart</h3>
    <p className="mt-2 text-sm">A 3D kart racing game similar to Mario Kart. Race against other characters on various tracks, use power-ups, and collect coins to unlock new characters and karts.</p>
    <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition">Play Now</button>
  </div>
</div>

    </section>

    <section className="py-20 bg-gray-900 text-center">
      <h2 className="text-4xl mb-10">Join the Community</h2>
      <p className="mb-10">Connect with fellow gamers, participate in events, and stay updated.</p>
      <div className="flex justify-center">
        {/* Social media integration */}
      </div>
    </section>

    <footer className="py-10 bg-gray-800 text-center">
      <div className="mb-6">
        <a href="#" className="text-blue-500 hover:text-blue-700 mx-4 transition">Sitemap</a>
        <a href="#" className="text-blue-500 hover:text-blue-700 mx-4 transition">Privacy Policy</a>
        <a href="#" className="text-blue-500 hover:text-blue-700 mx-4 transition">Terms of Service</a>
      </div>
      <div className="mb-6">
        <form className="flex justify-center">
          <input type="email" placeholder="Sign up for our newsletter" className="p-2 rounded-l bg-gray-700 text-white border border-gray-600" />
          <button className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-700 transition">Subscribe</button>
        </form>
      </div>
      <div className="flex justify-center">
        {/* Social media icons */}
      </div>
    </footer>
  </>
  )
}

export default page