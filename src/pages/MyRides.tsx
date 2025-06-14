
import React from 'react';
import MobileLayout from '../components/Layout/MobileLayout';
import { Car, Clock, MapPin, User, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MyRides = () => {
  const pastRides = [
    {
      id: '1',
      date: '2024-06-12',
      time: '8:30 AM',
      from: 'Downtown Plaza',
      to: 'Tech Campus',
      driver: 'Sarah M.',
      rating: 5,
      cost: '$12',
      status: 'completed'
    },
    {
      id: '2',
      date: '2024-06-10',
      time: '6:15 PM',
      from: 'Tech Campus',
      to: 'Westside Mall',
      driver: 'Mike R.',
      rating: 4,
      cost: '$8',
      status: 'completed'
    },
    {
      id: '3',
      date: '2024-06-08',
      time: '9:00 AM',
      from: 'University District',
      to: 'Airport',
      driver: 'Lisa K.',
      rating: 5,
      cost: '$25',
      status: 'completed'
    }
  ];

  const upcomingRides = [
    {
      id: '4',
      date: '2024-06-15',
      time: '7:45 AM',
      from: 'Home',
      to: 'Downtown Plaza',
      driver: 'John D.',
      cost: '$10',
      status: 'upcoming'
    }
  ];

  return (
    <MobileLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-blue-600 text-white px-4 py-6">
          <h1 className="text-2xl font-bold">My Rides</h1>
          <p className="text-blue-100 mt-2">Your ride history and upcoming trips</p>
        </div>

        {/* Upcoming Rides */}
        <div className="px-4 py-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Upcoming Rides</h2>
          {upcomingRides.length === 0 ? (
            <div className="text-center py-8">
              <Car size={48} className="mx-auto text-gray-400 mb-4" />
              <p className="text-gray-500">No upcoming rides</p>
            </div>
          ) : (
            <div className="space-y-3">
              {upcomingRides.map((ride) => (
                <div key={ride.id} className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Clock size={16} className="text-blue-600" />
                      <span className="font-semibold text-gray-900">{ride.date} at {ride.time}</span>
                    </div>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                      Upcoming
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <MapPin size={14} className="text-gray-400" />
                      <span className="text-sm text-gray-600">{ride.from} → {ride.to}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <User size={14} className="text-gray-400" />
                        <span className="text-sm text-gray-600">Driver: {ride.driver}</span>
                      </div>
                      <span className="font-semibold text-blue-600">{ride.cost}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Past Rides */}
        <div className="px-4 pb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Past Rides</h2>
          <div className="space-y-3">
            {pastRides.map((ride) => (
              <div key={ride.id} className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <Clock size={16} className="text-gray-400" />
                    <span className="text-sm text-gray-600">{ride.date} at {ride.time}</span>
                  </div>
                  <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
                    Completed
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <MapPin size={14} className="text-gray-400" />
                    <span className="text-sm text-gray-600">{ride.from} → {ride.to}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <User size={14} className="text-gray-400" />
                        <span className="text-sm text-gray-600">Driver: {ride.driver}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star size={14} className="text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">{ride.rating}</span>
                      </div>
                    </div>
                    <span className="font-semibold text-green-600">{ride.cost}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default MyRides;
