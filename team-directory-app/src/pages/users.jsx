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
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Team Members</h1>
        <input
          type="text"
          placeholder="Search members by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-72 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
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