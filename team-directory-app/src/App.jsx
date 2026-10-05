import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Users from './pages/users';
import UserDetails from './pages/userDetails';
import About from './pages/about';
import NotFound from './pages/notFound';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (userId) => {
    setFavorites((prev) =>
      prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId]
    );
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-200">
        <Router>
          <Navbar
            favoritesCount={favorites.length}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/users"
                element={
                  <Users
                    favorites={favorites}
                    onToggleFavorite={toggleFavorite}
                  />
                }
              />
              <Route path="/users/:id" element={<UserDetails />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </Router>
      </div>
    </div>
  );
}