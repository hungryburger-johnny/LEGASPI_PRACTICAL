import React from 'react';
import { Link } from 'react-router-dom';
import Button from './button';

export default function UserCard({ user, isFavorite, onToggleFavorite }) {
  return (
    <div className="border-2 border-stone-300 dark:border-slate-700 rounded-xl p-5 shadow-sm hover:shadow-md transition-all bg-white dark:bg-slate-900 flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-bold text-stone-900 dark:text-slate-100">{user.name}</h3>
        <p className="text-sm text-stone-600 dark:text-slate-400">{user.email}</p>
        <p className="text-sm font-semibold text-amber-800 dark:text-blue-400 mt-2">{user.company}</p>
      </div>

      <div className="mt-4 pt-4 border-t border-stone-200 dark:border-slate-800 flex items-center justify-between">
        <Link
          to={`/users/${user.id}`}
          className="text-sm font-bold text-amber-800 hover:text-amber-950 dark:text-blue-400 dark:hover:text-blue-300 hover:underline"
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