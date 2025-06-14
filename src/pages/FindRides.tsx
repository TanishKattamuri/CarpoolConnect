
import React, { useState } from 'react';
import { Search, MapPin, Calendar, Clock, Users, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import GoogleMap from '../components/Map/GoogleMap';
import RideCard from '../components/Rides/RideCard';
import RideBookingDialog from '../components/Rides/RideBookingDialog';
import { useRideSearch } from '../hooks/useRideSearch';

interface LocationData {
  address: string;
  lat: number;
  lng: number;
}

const FindRides = () => {
  const [fromLocation, setFromLocation] = useState<LocationData | null>(null);
  const [toLocation, setToLocation] = useState<LocationData | null>(null);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [passengers, setPassengers] = useState('1');
  const [selectedRide, setSelectedRide] = useState<any>(null);
  const [isBookingDialogOpen, setIsBookingDialogOpen] = useState(false);
  const [showRidesList, setShowRidesList] = useState(false);
  const [activeField, setActiveField] = useState<'from' | 'to' | null>(null);
  
  const { rides, isLoading, searchRides } = useRideSearch();

  const handleLocationSelect = (location: LocationData) => {
    if (activeField === 'from') {
      setFromLocation(location);
    } else if (activeField === 'to') {
      setToLocation(location);
    }
    setActiveField(null);
  };

  const handleSearch = () => {
    if (fromLocation && toLocation) {
      searchRides({ 
        from: fromLocation.address, 
        to: toLocation.address, 
        date 
      });
      setShowRidesList(true);
    }
  };

  const handleBookRide = (ride: any) => {
    setSelectedRide(ride);
    setIsBookingDialogOpen(true);
  };

  return (
    <div className="h-screen flex flex-col bg-white relative">
      {/* Search Header */}
      <div className="bg-white shadow-lg z-10 relative">
        <div className="p-4 space-y-3">
          {/* From Location */}
          <div 
            onClick={() => setActiveField('from')}
            className={`relative cursor-pointer transition-all ${
              activeField === 'from' ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <div className="absolute left-3 top-3 z-10">
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            </div>
            <Input
              placeholder="Pickup location"
              value={fromLocation?.address || ''}
              readOnly
              className="pl-10 pr-4 py-3 bg-gray-50 border-gray-200 cursor-pointer"
            />
          </div>

          {/* To Location */}
          <div 
            onClick={() => setActiveField('to')}
            className={`relative cursor-pointer transition-all ${
              activeField === 'to' ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <div className="absolute left-3 top-3 z-10">
              <div className="w-3 h-3 bg-red-500 rounded-sm"></div>
            </div>
            <Input
              placeholder="Destination"
              value={toLocation?.address || ''}
              readOnly
              className="pl-10 pr-4 py-3 bg-gray-50 border-gray-200 cursor-pointer"
            />
          </div>

          {/* Time and Date Row */}
          <div className="flex space-x-2">
            <div className="flex-1 relative">
              <Calendar size={16} className="absolute left-3 top-3 text-gray-400" />
              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="pl-10 py-3 bg-gray-50 border-gray-200"
              />
            </div>
            <div className="flex-1 relative">
              <Clock size={16} className="absolute left-3 top-3 text-gray-400" />
              <Input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="pl-10 py-3 bg-gray-50 border-gray-200"
              />
            </div>
            <div className="w-20 relative">
              <Users size={16} className="absolute left-3 top-3 text-gray-400" />
              <select
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                className="w-full pl-10 pr-2 py-3 bg-gray-50 border border-gray-200 rounded-md appearance-none"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>

          {/* Search Button */}
          <Button 
            onClick={handleSearch}
            disabled={!fromLocation || !toLocation || isLoading}
            className="w-full bg-blue-600 hover:bg-blue-700 py-3"
          >
            <Search size={16} className="mr-2" />
            {isLoading ? 'Searching...' : 'Search Rides'}
          </Button>
        </div>
      </div>

      {/* Map Container */}
      <div className="flex-1 relative">
        <GoogleMap
          onLocationSelect={activeField ? handleLocationSelect : undefined}
          selectedLocation={
            activeField === 'from' ? 
              (fromLocation ? { lat: fromLocation.lat, lng: fromLocation.lng } : null) :
            activeField === 'to' ?
              (toLocation ? { lat: toLocation.lat, lng: toLocation.lng } : null) :
              null
          }
        />
        
        {/* Active field indicator */}
        {activeField && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg z-10">
            <p className="text-sm font-medium text-gray-700">
              Tap on map to select {activeField === 'from' ? 'pickup' : 'destination'} location
            </p>
          </div>
        )}
      </div>

      {/* Results Panel */}
      {showRidesList && (
        <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl max-h-96 overflow-hidden z-20">
          <div className="p-4 border-b border-gray-200">
            <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4"></div>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">
                {rides.length > 0 ? `${rides.length} rides found` : 'No rides found'}
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowRidesList(false)}
              >
                ✕
              </Button>
            </div>
          </div>
          
          <div className="overflow-y-auto max-h-80 p-4">
            {rides.length > 0 ? (
              <div className="space-y-3">
                {rides.map((ride) => (
                  <RideCard 
                    key={ride.id} 
                    ride={ride} 
                    onBookRide={() => handleBookRide(ride)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-600">No rides available for this route.</p>
                <p className="text-sm text-gray-500 mt-1">Try adjusting your search criteria.</p>
              </div>
            )}
          </div>
        </div>
      )}

      <RideBookingDialog
        ride={selectedRide}
        isOpen={isBookingDialogOpen}
        onClose={() => setIsBookingDialogOpen(false)}
      />
    </div>
  );
};

export default FindRides;
