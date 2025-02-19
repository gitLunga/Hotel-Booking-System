import React from 'react';
import { Search } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative h-[600px]">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold text-white mb-6">
          Experience Luxury at Its Finest
        </h1>
        <p className="text-xl text-white mb-8 max-w-2xl">
          Discover our handpicked selection of luxury accommodations. Book your perfect stay with us today.
        </p>
        
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
              <input
                type="text"
                placeholder="Where would you like to stay?"
                className="w-full p-3 border rounded-md"
              />
            </div>
            <div className="flex-1 min-w-[200px]">
              <input
                type="date"
                className="w-full p-3 border rounded-md"
              />
            </div>
            <div className="flex-1 min-w-[200px]">
              <input
                type="date"
                className="w-full p-3 border rounded-md"
              />
            </div>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md flex items-center hover:bg-blue-700 transition-colors">
              <Search className="w-5 h-5 mr-2" />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}