
import { useState, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';

interface SearchParams {
  from: string;
  to: string;
  date: string;
}

interface Ride {
  id: string;
  driverName: string;
  driverRating: number;
  from: string;
  to: string;
  departureTime: string;
  price: number;
  availableSeats: number;
  isRecurring?: boolean;
}

export const useRideSearch = () => {
  const [rides, setRides] = useState<Ride[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const { toast } = useToast();

  const searchRides = useCallback(async (params: SearchParams) => {
    if (!params.from || !params.to) {
      toast({
        title: "Missing Information",
        description: "Please enter both pickup and destination locations.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock search results based on input
    const mockRides: Ride[] = [
      {
        id: '1',
        driverName: 'Sarah M.',
        driverRating: 4.8,
        from: params.from,
        to: params.to,
        departureTime: '8:00 AM',
        price: 12,
        availableSeats: 2,
        isRecurring: true
      },
      {
        id: '2',
        driverName: 'Mike R.',
        driverRating: 4.9,
        from: params.from,
        to: params.to,
        departureTime: '8:30 AM',
        price: 8,
        availableSeats: 1,
        isRecurring: true
      },
      {
        id: '3',
        driverName: 'Lisa K.',
        driverRating: 4.7,
        from: params.from,
        to: params.to,
        departureTime: '9:15 AM',
        price: 15,
        availableSeats: 3,
        isRecurring: false
      }
    ];

    setRides(mockRides);
    setHasSearched(true);
    setIsLoading(false);
    
    toast({
      title: "Search Complete",
      description: `Found ${mockRides.length} available rides.`,
    });
  }, [toast]);

  return {
    rides,
    isLoading,
    hasSearched,
    searchRides
  };
};
