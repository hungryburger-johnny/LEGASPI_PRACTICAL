# Team Directory App

A responsive React web application built with Vite, React Router, and Tailwind CSS v4. The application allows users to browse team profiles, search colleagues in real-time, manage a list of favorites, and switch between light and dark visual themes.

---

## Features

- **Dynamic Navigation & Routing:** SPA routing with React Router (`/`, `/users`, `/users/:id`, `/about`, and `*` fallback for 404)[cite: 1].
- **Real-Time Search:** Instant client-side filtering by team member name on the Users page[cite: 1].
- **Interactive Favorites System:** Toggle team members as favorites with live badge count updating in the navigation bar[cite: 1].
- **Custom Aesthetic Themes:** Warm earthy palette (terracotta/amber accents) for Light Mode, seamlessly transitioning to a deep navy blue palette for Dark Mode.
- **Simulated Async Data Fetching:** Built-in loader state simulating asynchronous user fetching on page load[cite: 1].
- **Dynamic Document Titles:** `useEffect` integration updating document titles based on active route and search filter counts[cite: 1].

---

## Tech Stack

- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS v4
- **Routing:** React Router v6
- **Version Control:** Git & GitHub

---

## Project Structure

```text
team-directory-app/
├── src/
│   ├── components/
│   │   ├── errorMessage.jsx
│   │   ├── loader.jsx
│   │   ├── navbar.jsx
│   │   └── userCard.jsx
│   ├── data/
│   │   └── users.js
│   ├── pages/
│   │   ├── about.jsx
│   │   ├── home.jsx
│   │   ├── notFound.jsx
│   │   ├── userDetails.jsx
│   │   └── users.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
└── README.md