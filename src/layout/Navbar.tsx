// src/components/Navbar.jsx
import React from 'react';
import ThemeSelector from '../Components/ThemeSelector';
import { useThemeColors } from '../Hooks/useThemeColors';
import { Link } from 'react-router-dom';
export default function Navbar() {

  const colors = useThemeColors();
  
  return (
    <nav className={`p-4 ${colors.navbar} ${colors.text}`}>
      <div className="container mx-auto flex justify-between">
        <div className="text-xl font-bold flex ">
          <Link  className="" to="/">My dashboard</Link>
        </div>
        <div className='flex space-x-8'>
          <div>
          <a href="#" className={`${colors.text} px-3 hover:underline`}>Home</a>
          <a href="#" className={`${colors.text} px-3 hover:underline`}>About</a>
          <a href="#" className={`${colors.text} px-3 hover:underline`}>Contact</a>
        </div>
          <ThemeSelector />
        </div>
      </div>
    </nav>
  );
}
