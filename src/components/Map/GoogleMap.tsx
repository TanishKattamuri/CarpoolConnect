
import React, { useEffect, useRef, useState } from 'react';
import { MapPin } from 'lucide-react';

declare global {
  interface Window {
    google: any;
  }
}

interface GoogleMapProps {
  onLocationSelect?: (location: { address: string; lat: number; lng: number }) => void;
  selectedLocation?: { lat: number; lng: number } | null;
  center?: { lat: number; lng: number };
  zoom?: number;
}

const GoogleMap = ({ onLocationSelect, selectedLocation, center = { lat: 40.7128, lng: -74.0060 }, zoom = 13 }: GoogleMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);
  const [marker, setMarker] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load Google Maps API
  useEffect(() => {
    const loadGoogleMaps = () => {
      if (window.google) {
        setIsLoaded(true);
        return;
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = () => setIsLoaded(true);
      document.head.appendChild(script);
    };

    loadGoogleMaps();
  }, []);

  // Initialize map
  useEffect(() => {
    if (!isLoaded || !mapRef.current || map) return;

    const newMap = new window.google.maps.Map(mapRef.current, {
      center,
      zoom,
      styles: [
        {
          featureType: 'poi',
          elementType: 'labels',
          stylers: [{ visibility: 'off' }]
        }
      ],
      disableDefaultUI: false,
      zoomControl: true,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false,
    });

    setMap(newMap);

    // Add click listener
    newMap.addListener('click', (event: any) => {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      
      // Reverse geocoding to get address
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode(
        { location: { lat, lng } },
        (results: any[], status: string) => {
          if (status === 'OK' && results[0]) {
            onLocationSelect?.({
              address: results[0].formatted_address,
              lat,
              lng
            });
          }
        }
      );
    });
  }, [isLoaded, center, zoom, map, onLocationSelect]);

  // Update marker when selected location changes
  useEffect(() => {
    if (!map || !selectedLocation) return;

    // Remove existing marker
    if (marker) {
      marker.setMap(null);
    }

    // Add new marker
    const newMarker = new window.google.maps.Marker({
      position: selectedLocation,
      map: map,
      icon: {
        path: window.google.maps.SymbolPath.CIRCLE,
        scale: 8,
        fillColor: '#3B82F6',
        fillOpacity: 1,
        strokeColor: '#FFFFFF',
        strokeWeight: 2,
      },
    });

    setMarker(newMarker);
    map.panTo(selectedLocation);
  }, [map, selectedLocation, marker]);

  if (!isLoaded) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
          <p className="text-gray-600">Loading map...</p>
          <p className="text-xs text-gray-500 mt-2">
            Please add your Google Maps API key to use the map
          </p>
        </div>
      </div>
    );
  }

  return <div ref={mapRef} className="w-full h-full" />;
};

export default GoogleMap;
