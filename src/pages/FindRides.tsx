
import React, { useState } from 'react';
import MobileLayout from '../components/Layout/MobileLayout';
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import RideCard from '../components/Rides/RideCard';

const FindRides = () => {
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [date, setDate] = useState('');

  const sampleRides = [
    {
      id: '1',
      driverName: 'Sarah M.',
      driverRating: 4.8,
      from: 'Downtown Seattle',
      to: 'Microsoft Campus',
      departureTime: '8:00 AM',
      price: 12,
      availableSeats: 2,
      isRecurring: true
    },
    {
      id: '2',
      driverName: 'Mike R.',
      driverRating: 4.9,
      from: 'Capitol Hill',
      to: 'Amazon HQ',
      departureTime: '8:30 AM',
      price: 8,
      availableSeats: 1,
      isRecurring: true
    }
  ];

  return (
    <MobileLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-blue-600 text-white px-4 py-6">
          <h1 className="text-2xl font-bold mb-4">Find Rides</h1>
          
          {/* Search Form */}
          <div className="space-y-3">
            <div className="relative">
              <MapPin size={20} className="absolute left-3 top-3 text-blue-200" />
              <input
                type="text"
                placeholder="From where?"
                value={fromLocation}
                onChange={(e) => setFromLocation(e.target.value)}
                className="w-full bg-white/10 border border-blue-400 rounded-lg pl-10 pr-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            
            <div className="relative">
              <MapPin size={20} className="absolute left-3 top-3 text-blue-200" />
              <input
                type="text"
                placeholder="To where?"
                value={toLocation}
                onChange={(e) => setToLocation(e.target.value)}
                className="w-full bg-white/10 border border-blue-400 rounded-lg pl-10 pr-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            
            <div className="relative">
              <Calendar size={20} className="absolute left-3 top-3 text-blue-200" />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-white/10 border border-blue-400 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            
            <button className="w-full bg-white text-blue-600 font-semibold py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
              <Search size={20} />
              <span>Search Rides</span>
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="px-4 py-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Available Rides</h2>
          <div className="space-y-4">
            {sampleRides.map((ride) => (
              <RideCard key={ride.id} ride={ride} />
            ))}
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default FindRides;
