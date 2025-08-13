// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className="bg-blue-800 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <div className="text-xl font-bold flex ">
          <Link  className="text-white hover:text-slate-200" to="/">My dashboard</Link>
        </div>
        <div>
          <a href="#" className="px-3 hover:underline">Home</a>
          <a href="#" className="px-3 hover:underline">About</a>
          <a href="#" className="px-3 hover:underline">Contact</a>
        </div>
      </div>
    </nav>
  );
}
