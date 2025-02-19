import React from 'react';
import { Calendar, Clock, MapPin, User } from 'lucide-react';

const bookings = [
  {
    id: 1,
    roomName: 'Deluxe Ocean View Suite',
    checkIn: '2024-03-20',
    checkOut: '2024-03-25',
    guests: 2,
    status: 'confirmed',
    location: 'Cape Town',
    price: 4999,
  },
  {
    id: 2,
    roomName: 'Premium Mountain View Room',
    checkIn: '2024-04-15',
    checkOut: '2024-04-18',
    guests: 1,
    status: 'pending',
    location: 'Johannesburg',
    price: 3499,
  },
];

export function Bookings() {
  return (
    <div className="container mx-auto px-4 py-8 animate-fadeIn">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        My Bookings
      </h1>
      
      <div className="grid gap-6">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
          >
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {booking.roomName}
                  </h2>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{booking.location}</span>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  booking.status === 'confirmed'
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                }`}>
                  {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <Calendar className="w-5 h-5 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Check-in</p>
                    <p>{new Date(booking.checkIn).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <Clock className="w-5 h-5 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Check-out</p>
                    <p>{new Date(booking.checkOut).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <User className="w-5 h-5 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Guests</p>
                    <p>{booking.guests} {booking.guests === 1 ? 'Guest' : 'Guests'}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-between items-center">
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  R{booking.price}
                </p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}