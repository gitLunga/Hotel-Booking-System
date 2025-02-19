import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, User, Menu } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button className="lg:hidden p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
              <Menu className="h-6 w-6" />
            </button>
            <Link to="/" className="flex items-center ml-2 lg:ml-0">
              <Building2 className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">LuxStay</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/rooms" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Rooms</Link>
            <Link to="/about" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">About</Link>
            <Link to="/contact" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Contact</Link>
            <ThemeToggle />
            <Link to="/login" className="flex items-center text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">
              <User className="h-5 w-5 mr-1" />
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}