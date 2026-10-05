import React from 'react';

export default function ErrorMessage({ message }) {
  return (
    <div className="p-4 bg-red-100 border-l-4 border-red-500 text-red-700 dark:bg-red-950 dark:text-red-200 dark:border-red-400 rounded shadow-sm my-4">
      <p className="font-semibold">{message || "No matching results found."}</p>
    </div>
  );
}