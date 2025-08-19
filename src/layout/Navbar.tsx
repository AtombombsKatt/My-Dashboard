// src/components/Navbar.jsx
import React from 'react';
import ThemeButton from '../Components/ThemeButton';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className="bg-gray-200 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <div className="text-xl font-bold flex ">
          <Link  className="text-black hover:black" to="/">My dashboard</Link>
        </div>
        <div>
          <a href="#" className="text-black px-3 hover:underline">Home</a>
          <a href="#" className="text-black px-3 hover:underline">About</a>
          <a href="#" className="text-black px-3 hover:underline">Contact</a>
          <ThemeButton />
        </div>
      </div>
    </nav>
  );
}
