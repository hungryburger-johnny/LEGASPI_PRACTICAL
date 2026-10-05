import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { usersData } from '../data/users';

export default function UserDetails() {
  const { id } = useParams();
  const user = usersData.find((u) => u.id === parseInt(id, 10));

  useEffect(() => {
    if (user) {
      document.title = user.name;
    } else {
      document.title = 'User Not Found';
    }
  }, [user]);

  if (!user) {
    return (
      <div className="max-w-md mx-auto my-12 p-6 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 rounded-lg text-center space-y-4">
        <h2 className="text-xl font-bold text-red-600 dark:text-red-400">User Not Found</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">The user you are looking for does not exist.</p>
        <Link to="/users" className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Back to Users
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto my-10 p-8 bg-white dark:bg-gray-800 rounded-xl shadow border border-gray-200 dark:border-gray-700 space-y-6">
      <div className="border-b border-gray-100 dark:border-gray-700 pb-4">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">{user.name}</h1>
        <p className="text-blue-600 dark:text-blue-400 font-semibold">{user.role}</p>
      </div>

      <div className="space-y-3 text-gray-700 dark:text-gray-300">
        <p><span className="font-semibold text-gray-900 dark:text-white">Email:</span> {user.email}</p>
        <p><span className="font-semibold text-gray-900 dark:text-white">Company:</span> {user.company}</p>
        <p><span className="font-semibold text-gray-900 dark:text-white">User ID:</span> #{user.id}</p>
      </div>

      <div className="pt-4">
        <Link
          to="/users"
          className="inline-block px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-lg font-medium transition-colors"
        >
          ← Back to Users
        </Link>
      </div>
    </div>
  );
}