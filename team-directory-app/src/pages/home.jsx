import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-8 text-center space-y-6">
      <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
        Welcome to the Team Directory
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Explore our talented team members, search through departments, save your favorite colleagues, and view detailed profiles.
      </p>
      <div>
        <Link
          to="/users"
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow transition-colors"
        >
          View Team Members
        </Link>
      </div>
    </div>
  );
}