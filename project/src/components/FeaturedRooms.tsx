import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Wifi, Coffee, Tv } from 'lucide-react';

const rooms = [
  {
    id: 1,
    name: 'Deluxe Ocean View Suite',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 4999,
    rating: 4.8,
    location: 'Cape Town',
    amenities: ['Wi-Fi', 'Coffee Maker', 'Smart TV'],
  },
  {
    id: 2,
    name: 'Premium Mountain View Room',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 3499,
    rating: 4.6,
    location: 'Johannesburg',
    amenities: ['Wi-Fi', 'Coffee Maker', 'Smart TV'],
  },
  {
    id: 3,
    name: 'Executive Suite',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: 5999,
    rating: 4.9,
    location: 'Durban',
    amenities: ['Wi-Fi', 'Coffee Maker', 'Smart TV'],
  }
];

const amenityIcons = {
  'Wi-Fi': Wifi,
  'Coffee Maker': Coffee,
  'Smart TV': Tv,
};

export function FeaturedRooms() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Featured Rooms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
              <div className="relative h-48">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-full px-3 py-1 flex items-center shadow-md">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm font-medium">{room.rating}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{room.name}</h3>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{room.location}</span>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  {room.amenities.map((amenity) => {
                    const Icon = amenityIcons[amenity as keyof typeof amenityIcons];
                    return (
                      <div key={amenity} className="flex items-center text-gray-600 dark:text-gray-400">
                        <Icon className="w-4 h-4 mr-1" />
                        <span className="text-sm">{amenity}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">R{room.price}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">per night</p>
                  </div>
                  <Link
                    to={`/rooms/${room.id}`}
                    className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}