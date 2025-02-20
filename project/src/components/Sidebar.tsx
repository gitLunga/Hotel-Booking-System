import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Calendar, 
  Settings, 
  HelpCircle, 
  Phone,
  Mail,
  MapPin,
  MessageSquare
} from 'lucide-react';

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white dark:bg-gray-800 shadow-lg transition-colors">
      <div className="p-4">
        <nav className="space-y-2">
          <Link to="/" className="flex items-center p-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <Home className="w-5 h-5 mr-3" />
            Home
          </Link>
          <Link to="/bookings" className="flex items-center p-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <Calendar className="w-5 h-5 mr-3" />
            Bookings
          </Link>
          <Link to="/settings" className="flex items-center p-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <Settings className="w-5 h-5 mr-3" />
            Settings
          </Link>
          <Link to="/help" className="flex items-center p-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <HelpCircle className="w-5 h-5 mr-3" />
            Help
          </Link>
        </nav>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-4">Contact Us</h3>
          <div className="space-y-4">
            <a href="tel:+27123456789" className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
              <Phone className="w-4 h-4 mr-2" />
              +27 81 347 9054
            </a>
            <a href="mailto:info@luxstay.co.za" className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
              <Mail className="w-4 h-4 mr-2" />
              info@luxstay.co.za
            </a>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
              <MapPin className="w-4 h-4 mr-2" />
              View on Map
            </a>
            <a href="https://wa.me/27813479054" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
              <MessageSquare className="w-4 h-4 mr-2" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}