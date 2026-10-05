import React, { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    document.title = 'About | Team Directory';
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 flex flex-col items-center justify-center text-center space-y-4 min-h-[10vh]">
      <h1 className="text-3xl font-extrabold text-stone-900 dark:text-slate-100">
        About Team Directory App
      </h1>
      <p className="text-stone-600 dark:text-slate-300 text-base leading-relaxed max-w-2xl">
        This Team Directory application is built using React, React Router, and Tailwind CSS[cite: 1]. It features real-time search filtering, simulated asynchronous data fetching, local state favorites management, dark mode toggling, and dynamic document title updates[cite: 1].
      </p>
    </div>
  );
}