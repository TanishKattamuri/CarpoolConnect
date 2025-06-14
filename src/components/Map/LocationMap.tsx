
import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Navigation, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LocationMapProps {
  onLocationSelect: (location: { address: string; lat: number; lng: number }) => void;
  mode: 'pickup' | 'destination';
  onClose: () => void;
  initialLocation?: { lat: number; lng: number };
}

const LocationMap = ({ onLocationSelect, mode, onClose, initialLocation }: LocationMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [selectedLocation, setSelectedLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [address, setAddress] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  // Simulate map initialization and interaction
  useEffect(() => {
    if (mapRef.current) {
      // Simulate loading a map (in real implementation, this would initialize Google Maps or Mapbox)
      console.log('Map initialized for', mode);
    }
  }, [mode]);

  const handleMapClick = async (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    // Convert click coordinates to lat/lng (simplified simulation)
    const lat = 40.7128 + (y - 200) * 0.001; // Simulate NYC area
    const lng = -74.0060 + (x - 200) * 0.001;
    
    setSelectedLocation({ lat, lng });
    setIsLoading(true);
    
    // Simulate reverse geocoding
    setTimeout(() => {
      const mockAddresses = [
        '123 Main Street, New York, NY',
        '456 Broadway, New York, NY',
        '789 Fifth Avenue, New York, NY',
        '321 Park Avenue, New York, NY',
        '654 Wall Street, New York, NY'
      ];
      const randomAddress = mockAddresses[Math.floor(Math.random() * mockAddresses.length)];
      setAddress(randomAddress);
      setIsLoading(false);
    }, 1000);
  };

  const handleConfirmLocation = () => {
    if (selectedLocation && address) {
      onLocationSelect({
        address,
        lat: selectedLocation.lat,
        lng: selectedLocation.lng
      });
      onClose();
    }
  };

  const handleCurrentLocation = () => {
    setIsLoading(true);
    // Simulate getting current location
    setTimeout(() => {
      const currentLoc = { lat: 40.7128, lng: -74.0060 };
      setSelectedLocation(currentLoc);
      setAddress('Current Location - Times Square, New York, NY');
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-white z-50">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">
          Select {mode === 'pickup' ? 'Pickup' : 'Destination'} Location
        </h2>
        <Button variant="ghost" size="sm" onClick={onClose} className="text-white hover:bg-blue-700">
          <X size={20} />
        </Button>
      </div>

      {/* Map Container */}
      <div className="relative flex-1">
        <div 
          ref={mapRef}
          onClick={handleMapClick}
          className="w-full h-96 bg-gradient-to-br from-green-100 to-blue-100 relative cursor-crosshair"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(34, 197, 94, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
              linear-gradient(45deg, rgba(156, 163, 175, 0.1) 25%, transparent 25%),
              linear-gradient(-45deg, rgba(156, 163, 175, 0.1) 25%, transparent 25%)
            `,
            backgroundSize: '40px 40px, 40px 40px, 20px 20px, 20px 20px'
          }}
        >
          {/* Map Pin Overlay */}
          {selectedLocation && (
            <div 
              className="absolute transform -translate-x-1/2 -translate-y-full"
              style={{
                left: `${(selectedLocation.lng + 74.0060) * 1000 + 200}px`,
                top: `${200 - (selectedLocation.lat - 40.7128) * 1000}px`
              }}
            >
              <MapPin size={32} className="text-red-500 drop-shadow-lg" fill="currentColor" />
            </div>
          )}
          
          {/* Center Crosshair */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-6 h-6 border-2 border-gray-400 rounded-full bg-white/80 flex items-center justify-center">
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            </div>
          </div>
          
          {/* Tap to select instruction */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg">
            <p className="text-sm text-gray-600">Tap anywhere to select location</p>
          </div>
        </div>

        {/* Current Location Button */}
        <Button
          onClick={handleCurrentLocation}
          className="absolute bottom-4 right-4 bg-white text-blue-600 border border-blue-600 hover:bg-blue-50"
          disabled={isLoading}
        >
          <Navigation size={16} className="mr-2" />
          Current Location
        </Button>
      </div>

      {/* Selected Location Info */}
      {(selectedLocation || isLoading) && (
        <div className="p-4 bg-white border-t border-gray-200">
          {isLoading ? (
            <div className="flex items-center space-x-3">
              <div className="animate-spin rounded-full h-6 w-6 border-2 border-blue-600 border-t-transparent"></div>
              <span className="text-gray-600">Getting address...</span>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-gray-500 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{address}</p>
                  <p className="text-sm text-gray-500">
                    {selectedLocation?.lat.toFixed(4)}, {selectedLocation?.lng.toFixed(4)}
                  </p>
                </div>
              </div>
              <Button 
                onClick={handleConfirmLocation}
                className="w-full bg-blue-600 text-white hover:bg-blue-700"
              >
                Confirm {mode === 'pickup' ? 'Pickup' : 'Destination'}
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LocationMap;
