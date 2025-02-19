import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Hero } from './components/Hero';
import { FeaturedRooms } from './components/FeaturedRooms';
import { RoomDetails } from './components/RoomDetails';
import { Bookings } from './components/Bookings';
import { Settings } from './components/Settings';

function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedRooms />
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <Navbar />
        <Sidebar />
        <div className="lg:ml-64">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/rooms/:id" element={<RoomDetails />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;