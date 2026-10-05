import React from 'react';
import { Link } from 'react-router-dom';
import Button from './button';

export default function UserCard({ user, isFavorite, onToggleFavorite }) {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-gray-800 flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{user.name}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
        <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-2">{user.company}</p>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
        <Link
          to={`/users/${user.id}`}
          className="text-sm font-semibold text-blue-600 hover:underline dark:text-blue-400"
        >
          View Details
        </Link>
        <Button
          onClick={() => onToggleFavorite(user.id)}
          variant={isFavorite ? 'danger' : 'secondary'}
          className="text-xs py-1.5 px-3"
        >
          {isFavorite ? 'Unfavorite' : 'Favorite'}
        </Button>
      </div>
    </div>
  );
}