import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar({ favoritesCount, darkMode, setDarkMode }) {
  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md font-medium text-sm transition-colors ${
      isActive
        ? 'bg-blue-600 text-white dark:bg-blue-500'
        : 'text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
    }`;

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-6">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">Team Directory</h1>
        <div className="flex space-x-2">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/users" className={navLinkClass}>Users</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <span className="text-sm font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full">
          Favorites: {favoritesCount}
        </span>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 text-sm font-medium"
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
    </nav>
  );
}