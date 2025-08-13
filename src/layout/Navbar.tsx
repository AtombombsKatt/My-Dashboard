// src/components/Navbar.jsx
import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">My Dashboard</div>
        <div>
          <a href="#" className="px-3 hover:underline">Home</a>
          <a href="#" className="px-3 hover:underline">About</a>
          <a href="#" className="px-3 hover:underline">Contact</a>
        </div>
      </div>
    </nav>
  );
}
