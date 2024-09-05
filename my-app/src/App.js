import React, { useState } from 'react';
import './App.css';
import './index.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-screen w-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-gray-800 text-white">
        <div className="container mx-auto p-4 flex items-center justify-between">
          <div className="text-xl font-bold">MyWebsite</div>
          <div className="hidden md:flex space-x-4">
            <a href="#home" className="hover:underline">Home</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
          <button className="md:hidden text-2xl" onClick={toggleMenu}>
            {isOpen ? '✖️' : '☰'}
          </button>
        </div>
        {/* Mobile Menu */}
        <div className={`md:hidden bg-gray-700 text-white ${isOpen ? 'block' : 'hidden'}`}>
          <a href="#home" className="block px-4 py-2 hover:bg-gray-600">Home</a>
          <a href="#about" className="block px-4 py-2 hover:bg-gray-600">About</a>
          <a href="#projects" className="block px-4 py-2 hover:bg-gray-600">Projects</a>
          <a href="#contact" className="block px-4 py-2 hover:bg-gray-600">Contact</a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 grid grid-cols-8 grid-rows-6 gap-6 p-6 
                      sm:grid-cols-4 sm:grid-rows-4 
                      md:grid-cols-6 md:grid-rows-5 
                      lg:grid-cols-8 lg:grid-rows-6 text-center">
        <div className="col-span-3 row-span-2 bg-orange-500 rounded-lg">logo and image of me</div>
        <div className="col-span-3 col-start-1 row-start-3 bg-orange-500 rounded-lg">headline text</div>
        <div className="col-span-3 row-span-2 col-start-1 row-start-4 bg-orange-500 rounded-lg">about me</div>
        <div className="col-span-3 col-start-1 row-start-6 bg-orange-500 rounded-lg">4</div>
        <div className="col-start-4 row-start-1 bg-orange-500 rounded-lg">download cv</div>
        <div className="col-start-4 row-start-2 bg-orange-500 rounded-lg">6</div>
        <div className="col-start-4 row-start-3 bg-orange-500 rounded-lg">7</div>
        <div className="col-span-4 row-span-3 col-start-5 row-start-1 bg-orange-500 rounded-lg">projects carousel</div>
        <div className="col-span-2 row-span-2 col-start-4 row-start-4 bg-orange-500 rounded-lg">my stack</div>
        <div className="col-span-2 col-start-4 row-start-6 bg-orange-500 rounded-lg">contact</div>
        <div className="col-span-2 col-start-6 row-start-4 bg-orange-500 rounded-lg">11</div>
        <div className="col-span-2 row-span-2 col-start-6 row-start-5 bg-orange-500 rounded-lg">12</div>
        <div className="col-start-8 row-start-4 bg-orange-500 rounded-lg">Github</div>
        <div className="col-start-8 row-start-5 bg-orange-500 rounded-lg">Linkedin</div>
        <div className="col-start-8 row-start-6 bg-orange-500 rounded-lg">Goodreads</div>
      </div>
    </div>
  );
}

export default App;
