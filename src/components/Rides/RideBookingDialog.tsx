
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { User, Star, MapPin, Clock, Users } from 'lucide-react';

interface RideBookingDialogProps {
  ride: {
    id: string;
    driverName: string;
    driverRating: number;
    from: string;
    to: string;
    departureTime: string;
    price: number;
    availableSeats: number;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const RideBookingDialog = ({ ride, isOpen, onClose }: RideBookingDialogProps) => {
  const [isBooking, setIsBooking] = useState(false);
  const [seatsRequested, setSeatsRequested] = useState(1);
  const { toast } = useToast();

  const handleBooking = async () => {
    if (!ride) return;
    
    setIsBooking(true);
    
    // Simulate booking API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Ride Booked Successfully!",
      description: `You've booked ${seatsRequested} seat(s) with ${ride.driverName}. Check your messages for details.`,
    });
    
    setIsBooking(false);
    onClose();
  };

  if (!ride) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Book This Ride</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Driver Info */}
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <User size={24} className="text-white" />
            </div>
            <div>
              <h3 className="font-semibold">{ride.driverName}</h3>
              <div className="flex items-center space-x-1">
                <Star size={14} className="text-yellow-400 fill-current" />
                <span className="text-sm text-gray-600">{ride.driverRating}</span>
              </div>
            </div>
          </div>

          {/* Trip Details */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <MapPin size={16} className="text-green-500" />
              <span className="text-sm">{ride.from} → {ride.to}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={16} className="text-blue-500" />
              <span className="text-sm">{ride.departureTime}</span>
            </div>
          </div>

          {/* Seat Selection */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Number of seats</label>
            <select 
              value={seatsRequested}
              onChange={(e) => setSeatsRequested(Number(e.target.value))}
              className="w-full p-2 border rounded-lg"
            >
              {Array.from({ length: ride.availableSeats }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1} seat{i + 1 > 1 ? 's' : ''}
                </option>
              ))}
            </select>
          </div>

          {/* Price */}
          <div className="bg-blue-50 p-3 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="font-medium">Total Cost</span>
              <span className="text-xl font-bold text-blue-600">
                ${ride.price * seatsRequested}
              </span>
            </div>
          </div>
        </div>

        <DialogFooter className="space-x-2">
          <Button variant="outline" onClick={onClose} disabled={isBooking}>
            Cancel
          </Button>
          <Button onClick={handleBooking} disabled={isBooking}>
            {isBooking ? 'Booking...' : 'Book Ride'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RideBookingDialog;
