
import React, { useState } from 'react';
import MobileLayout from '../components/Layout/MobileLayout';
import { Search, MapPin, Calendar, Filter } from 'lucide-react';
import RideCard from '../components/Rides/RideCard';
import RideBookingDialog from '../components/Rides/RideBookingDialog';
import LoadingSpinner from '../components/ui/loading-spinner';
import LocationMap from '../components/Map/LocationMap';
import { useRideSearch } from '../hooks/useRideSearch';
import { Button } from '@/components/ui/button';

interface LocationData {
  address: string;
  lat: number;
  lng: number;
}

const FindRides = () => {
  const [fromLocation, setFromLocation] = useState<LocationData | null>(null);
  const [toLocation, setToLocation] = useState<LocationData | null>(null);
  const [date, setDate] = useState('');
  const [selectedRide, setSelectedRide] = useState<any>(null);
  const [isBookingDialogOpen, setIsBookingDialogOpen] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [mapMode, setMapMode] = useState<'pickup' | 'destination'>('pickup');
  
  const { rides, isLoading, hasSearched, searchRides } = useRideSearch();

  const handleSearch = () => {
    if (fromLocation && toLocation) {
      searchRides({ 
        from: fromLocation.address, 
        to: toLocation.address, 
        date 
      });
    }
  };

  const handleBookRide = (ride: any) => {
    setSelectedRide(ride);
    setIsBookingDialogOpen(true);
  };

  const handleLocationSelect = (location: LocationData) => {
    if (mapMode === 'pickup') {
      setFromLocation(location);
    } else {
      setToLocation(location);
    }
    setShowMap(false);
  };

  const openMapForPickup = () => {
    setMapMode('pickup');
    setShowMap(true);
  };

  const openMapForDestination = () => {
    setMapMode('destination');
    setShowMap(true);
  };

  if (showMap) {
    return (
      <LocationMap
        onLocationSelect={handleLocationSelect}
        mode={mapMode}
        onClose={() => setShowMap(false)}
        initialLocation={mapMode === 'pickup' ? 
          (fromLocation ? { lat: fromLocation.lat, lng: fromLocation.lng } : undefined) :
          (toLocation ? { lat: toLocation.lat, lng: toLocation.lng } : undefined)
        }
      />
    );
  }

  return (
    <MobileLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-blue-600 text-white px-4 py-6">
          <h1 className="text-2xl font-bold mb-4">Find Rides</h1>
          
          {/* Search Form */}
          <div className="space-y-3">
            <div 
              onClick={openMapForPickup}
              className="relative cursor-pointer"
            >
              <MapPin size={20} className="absolute left-3 top-3 text-blue-200" />
              <div className="w-full bg-white/10 border border-blue-400 rounded-lg pl-10 pr-4 py-3 text-white min-h-[48px] flex items-center">
                {fromLocation ? (
                  <span className="text-white">{fromLocation.address}</span>
                ) : (
                  <span className="text-blue-200">Tap to select pickup location</span>
                )}
              </div>
            </div>
            
            <div 
              onClick={openMapForDestination}
              className="relative cursor-pointer"
            >
              <MapPin size={20} className="absolute left-3 top-3 text-blue-200" />
              <div className="w-full bg-white/10 border border-blue-400 rounded-lg pl-10 pr-4 py-3 text-white min-h-[48px] flex items-center">
                {toLocation ? (
                  <span className="text-white">{toLocation.address}</span>
                ) : (
                  <span className="text-blue-200">Tap to select destination</span>
                )}
              </div>
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
            
            <Button 
              onClick={handleSearch}
              disabled={isLoading || !fromLocation || !toLocation}
              className="w-full bg-white text-blue-600 font-semibold py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <LoadingSpinner size="sm" />
                  <span>Searching...</span>
                </>
              ) : (
                <>
                  <Search size={20} />
                  <span>Search Rides</span>
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Results */}
        <div className="px-4 py-6">
          {hasSearched && (
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">
                {rides.length > 0 ? `${rides.length} Rides Found` : 'No Rides Found'}
              </h2>
              <Button variant="outline" size="sm">
                <Filter size={16} className="mr-1" />
                Filter
              </Button>
            </div>
          )}
          
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <div className="text-center">
                <LoadingSpinner size="lg" className="mx-auto mb-4" />
                <p className="text-gray-600">Finding rides for you...</p>
              </div>
            </div>
          ) : rides.length > 0 ? (
            <div className="space-y-4">
              {rides.map((ride) => (
                <RideCard 
                  key={ride.id} 
                  ride={ride} 
                  onBookRide={() => handleBookRide(ride)}
                />
              ))}
            </div>
          ) : hasSearched ? (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-4">No rides found for your search criteria.</p>
              <p className="text-sm text-gray-500">Try adjusting your search or check back later.</p>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">Select your pickup and destination locations above to find available rides.</p>
            </div>
          )}
        </div>

        <RideBookingDialog
          ride={selectedRide}
          isOpen={isBookingDialogOpen}
          onClose={() => setIsBookingDialogOpen(false)}
        />
      </div>
    </MobileLayout>
  );
};

export default FindRides;
