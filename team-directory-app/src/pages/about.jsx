import React from 'react';

export default function About() {
  return (
    <div className="max-w-3xl mx-auto p-8 space-y-4">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">About Team Directory App</h1>
      <p className="text-gray-600 dark:text-gray-300">
        This Team Directory application is built using React, React Router, and Tailwind CSS. It features real-time search filtering, simulated asynchronous data fetching, local state favorites management, dark mode toggling, and dynamic document title updates.
      </p>
    </div>
  );
}