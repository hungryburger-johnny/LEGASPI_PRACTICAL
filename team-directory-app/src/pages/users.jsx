import React, { useState, useEffect } from 'react';
import { usersData } from '../data/users';
import UserCard from '../components/userCard';
import Loader from '../components/loader';
import ErrorMessage from '../components/errorMessage';

export default function Users({ favorites, onToggleFavorite }) {
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // 1-second simulated delay on mount[cite: 1]
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Filter users by search query[cite: 1]
  const filteredUsers = usersData.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Update document title dynamically[cite: 1]
  useEffect(() => {
    document.title = `Users (${filteredUsers.length})`;
  }, [filteredUsers.length]);

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Centered Header & Enhanced Search Bar Section */}
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <h1 className="text-3xl font-extrabold text-stone-900 dark:text-slate-100">
          Team Members
        </h1>
        
        {/* Prominent Search Input Wrapper */}
        <div className="relative w-full max-w-lg">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-amber-800 dark:text-blue-400">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search team members by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 border-2 border-stone-300 dark:border-slate-700 rounded-2xl bg-white dark:bg-slate-900 text-stone-900 dark:text-slate-100 placeholder-stone-400 dark:placeholder-slate-500 shadow-md focus:outline-none focus:ring-2 focus:ring-amber-800 dark:focus:ring-blue-500 focus:border-amber-800 dark:focus:border-blue-500 transition-all font-medium"
          />
        </div>
      </div>

      {isLoading ? (
        <Loader />
      ) : filteredUsers.length === 0 ? (
        <ErrorMessage message="No team members match your search criteria." />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              isFavorite={favorites.includes(user.id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
}