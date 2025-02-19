import React, { useState } from 'react';
import { Bell, Lock, User, Moon, Sun, Globe } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export function Settings() {
  const { theme, toggleTheme } = useTheme();
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    promotions: true,
  });

  return (
    <div className="container mx-auto px-4 py-8 animate-fadeIn">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Settings
      </h1>

      <div className="grid gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <User className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Profile Settings
              </h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Display Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                  defaultValue="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                  defaultValue="john@example.com"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <Bell className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Notifications
              </h2>
            </div>
            <div className="space-y-4">
              {Object.entries(notifications).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-300 capitalize">
                    {key} Notifications
                  </span>
                  <button
                    onClick={() => setNotifications(prev => ({ ...prev, [key]: !prev[key] }))}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      value ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        value ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Preferences
              </h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">
                  Dark Mode
                </span>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  {theme === 'dark' ? (
                    <Sun className="w-5 h-5 text-yellow-500" />
                  ) : (
                    <Moon className="w-5 h-5 text-gray-700" />
                  )}
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">
                  Language
                </span>
                <select className="p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600">
                  <option>English</option>
                  <option>Afrikaans</option>
                  <option>Zulu</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <Lock className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Security
              </h2>
            </div>
            <div className="space-y-4">
              <button className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Change Password
              </button>
              <button className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Enable Two-Factor Authentication
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}