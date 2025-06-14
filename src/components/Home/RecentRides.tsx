
import React from 'react';
import RideCard from '../Rides/RideCard';

const RecentRides = () => {
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
    },
    {
      id: '3',
      driverName: 'Lisa K.',
      driverRating: 4.7,
      from: 'Bellevue',
      to: 'University of Washington',
      departureTime: '9:00 AM',
      price: 15,
      availableSeats: 3,
      isRecurring: false
    }
  ];

  return (
    <div className="px-4 py-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900">Available Rides</h2>
        <button className="text-blue-600 font-medium text-sm">View All</button>
      </div>
      
      <div className="space-y-4">
        {sampleRides.map((ride) => (
          <RideCard key={ride.id} ride={ride} />
        ))}
      </div>
    </div>
  );
};

export default RecentRides;
