import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar({ favoritesCount, darkMode, setDarkMode }) {
  const handleThemeToggle = () => {
    const nextMode = !darkMode;
    setDarkMode(nextMode);
    if (nextMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md font-medium text-sm transition-colors ${
      isActive
        ? 'bg-amber-700 text-white shadow-sm dark:bg-slate-900 dark:text-blue-200 dark:border dark:border-slate-700'
        : 'text-amber-100 hover:bg-amber-800/60 hover:text-white dark:text-gray-300 dark:hover:bg-slate-800'
    }`;

  return (
    <nav className="bg-amber-900 dark:bg-slate-950 shadow-md border-b border-amber-950 dark:border-slate-800 px-6 py-4 flex items-center justify-between transition-colors">
      <div className="flex items-center space-x-6">
        <h1 className="text-xl font-bold text-amber-50 dark:text-slate-100">Team Directory</h1>
        <div className="flex space-x-2">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/users" className={navLinkClass}>Users</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <span className="text-sm font-semibold bg-amber-100 text-amber-900 dark:bg-slate-900 dark:text-blue-300 dark:border dark:border-slate-800 px-3 py-1 rounded-full">
          Favorites: {favoritesCount}
        </span>
        <button
          onClick={handleThemeToggle}
          className="p-2 rounded-lg bg-amber-800 text-amber-50 dark:bg-slate-900 dark:text-slate-200 dark:border dark:border-slate-800 hover:bg-amber-700 dark:hover:bg-slate-800 text-sm font-medium transition-colors"
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
    </nav>
  );
}