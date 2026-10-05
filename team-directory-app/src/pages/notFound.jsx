import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="max-w-md mx-auto my-16 text-center space-y-4">
      <h1 className="text-6xl font-extrabold text-blue-600">404</h1>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Page Not Found</h2>
      <p className="text-gray-600 dark:text-gray-400">The page you are looking for does not exist.</p>
      <Link to="/" className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Return Home
      </Link>
    </div>
  );
}