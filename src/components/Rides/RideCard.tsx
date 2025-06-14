
import React from 'react';
import { MapPin, Clock, DollarSign, User, Star } from 'lucide-react';

interface RideCardProps {
  ride: {
    id: string;
    driverName: string;
    driverRating: number;
    from: string;
    to: string;
    departureTime: string;
    price: number;
    availableSeats: number;
    isRecurring?: boolean;
  };
}

const RideCard = ({ ride }: RideCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-4 hover:shadow-md transition-shadow">
      {/* Driver Info */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
            <User size={20} className="text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{ride.driverName}</h3>
            <div className="flex items-center space-x-1">
              <Star size={14} className="text-yellow-400 fill-current" />
              <span className="text-sm text-gray-600">{ride.driverRating.toFixed(1)}</span>
            </div>
          </div>
        </div>
        {ride.isRecurring && (
          <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
            Regular
          </span>
        )}
      </div>

      {/* Route Info */}
      <div className="space-y-2 mb-4">
        <div className="flex items-start space-x-2">
          <MapPin size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">{ride.from}</p>
            <div className="h-4 w-px bg-gray-300 ml-2 my-1"></div>
            <p className="text-sm font-medium text-gray-900">{ride.to}</p>
          </div>
        </div>
      </div>

      {/* Time and Price */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1 text-gray-600">
            <Clock size={16} />
            <span className="text-sm">{ride.departureTime}</span>
          </div>
          <div className="text-sm text-gray-600">
            {ride.availableSeats} seat{ride.availableSeats !== 1 ? 's' : ''}
          </div>
        </div>
        <div className="flex items-center space-x-1 text-green-600 font-semibold">
          <DollarSign size={16} />
          <span>${ride.price}</span>
        </div>
      </div>

      {/* Book Button */}
      <button className="w-full mt-4 bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition-colors">
        Request Ride
      </button>
    </div>
  );
};

export default RideCard;
