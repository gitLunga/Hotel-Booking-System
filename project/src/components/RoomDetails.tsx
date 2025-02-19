import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, MapPin, Wifi, Coffee, Tv, ChevronLeft, CreditCard, Phone } from 'lucide-react';

const rooms = [
  {
    id: 1,
    name: 'Deluxe Ocean View Suite',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    price: 4999,
    rating: 4.8,
    location: 'Cape Town',
    amenities: ['Wi-Fi', 'Coffee Maker', 'Smart TV'],
    description: 'Experience luxury living with breathtaking ocean views. This spacious suite features modern amenities, a private balcony, and world-class service.',
    details: {
      size: '45 m²',
      bed: 'King Size',
      occupancy: '2 Adults, 1 Child',
      bathroom: 'En-suite with Rain Shower',
      view: 'Ocean View'
    }
  },
  {
    id: 2,
    name: 'Premium Mountain View Room',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    price: 3499,
    rating: 4.6,
    location: 'Johannesburg',
    amenities: ['Wi-Fi', 'Coffee Maker', 'Smart TV'],
    description: 'Enjoy stunning mountain views from this premium room. Perfect for both business and leisure travelers.',
    details: {
      size: '35 m²',
      bed: 'Queen Size',
      occupancy: '2 Adults',
      bathroom: 'En-suite with Shower',
      view: 'Mountain View'
    }
  },
  {
    id: 3,
    name: 'Executive Suite',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    price: 5999,
    rating: 4.9,
    location: 'Durban',
    amenities: ['Wi-Fi', 'Coffee Maker', 'Smart TV'],
    description: 'Our finest suite offering unparalleled luxury and comfort. Features a separate living area and premium amenities.',
    details: {
      size: '55 m²',
      bed: 'Super King Size',
      occupancy: '2 Adults, 2 Children',
      bathroom: 'Luxury En-suite with Bathtub',
      view: 'City View'
    }
  }
];

const amenityIcons = {
  'Wi-Fi': Wifi,
  'Coffee Maker': Coffee,
  'Smart TV': Tv,
};

export function RoomDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>('card');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const room = rooms.find(r => r.id === Number(id));

  if (!room) {
    return <div>Room not found</div>;
  }

  const handleBooking = () => {
    // Here you would integrate with your payment provider
    alert(`Processing ${selectedPaymentMethod} payment for ${room.name}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-blue-600 dark:text-blue-400 mb-6 hover:underline"
      >
        <ChevronLeft className="w-4 h-4 mr-1" />
        Back to Rooms
      </button>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-96">
          <img
            src={room.images[currentImageIndex]}
            alt={room.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {room.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  currentImageIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {room.name}
              </h1>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{room.location}</span>
                <div className="ml-4 flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-1">{room.rating}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                R{room.price}
              </p>
              <p className="text-gray-600 dark:text-gray-400">per night</p>
            </div>
          </div>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            {room.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Room Details
              </h2>
              <dl className="space-y-2">
                {Object.entries(room.details).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <dt className="text-gray-600 dark:text-gray-400 capitalize">{key}:</dt>
                    <dd className="text-gray-900 dark:text-white font-medium">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Amenities
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {room.amenities.map((amenity) => {
                  const Icon = amenityIcons[amenity as keyof typeof amenityIcons];
                  return (
                    <div key={amenity} className="flex items-center text-gray-700 dark:text-gray-300">
                      <Icon className="w-5 h-5 mr-2" />
                      <span>{amenity}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Payment Method
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <button
                onClick={() => setSelectedPaymentMethod('card')}
                className={`p-4 border rounded-lg flex items-center justify-center ${
                  selectedPaymentMethod === 'card'
                    ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20'
                    : 'border-gray-200 dark:border-gray-700'
                }`}
              >
                <CreditCard className="w-6 h-6 mr-2" />
                <span>Credit Card</span>
              </button>
              <button
                onClick={() => setSelectedPaymentMethod('eft')}
                className={`p-4 border rounded-lg flex items-center justify-center ${
                  selectedPaymentMethod === 'eft'
                    ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20'
                    : 'border-gray-200 dark:border-gray-700'
                }`}
              >
                <Phone className="w-6 h-6 mr-2" />
                <span>EFT</span>
              </button>
              <button
                onClick={() => setSelectedPaymentMethod('payfast')}
                className={`p-4 border rounded-lg flex items-center justify-center ${
                  selectedPaymentMethod === 'payfast'
                    ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20'
                    : 'border-gray-200 dark:border-gray-700'
                }`}
              >
                <span>PayFast</span>
              </button>
            </div>

            <button
              onClick={handleBooking}
              className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Book Now - R{room.price}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}