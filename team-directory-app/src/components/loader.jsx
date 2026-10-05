import React from 'react';

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-3">
      <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-500 dark:text-gray-400 font-medium">Loading team members...</p>
    </div>
  );
}