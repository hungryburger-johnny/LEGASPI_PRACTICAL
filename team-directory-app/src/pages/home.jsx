import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-8 text-center space-y-6">
      <h1 className="text-4xl font-extrabold text-stone-900 dark:text-slate-100">
        Welcome to the Team Directory
      </h1>
      <p className="text-lg text-stone-600 dark:text-slate-300 max-w-2xl mx-auto">
        Explore our talented team members, search through departments, save your favorite colleagues, and view detailed profiles.
      </p>
      <div>
        <Link
          to="/users"
          className="inline-block px-6 py-3 bg-amber-800 hover:bg-amber-900 text-white font-semibold rounded-lg shadow-md transition-all dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          View Team Members
        </Link>
      </div>
    </div>
  );
}