
import React, { useState } from 'react';
import MobileLayout from '../components/Layout/MobileLayout';
import { MapPin, Calendar, Clock, Users, DollarSign, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import LoadingSpinner from '../components/ui/loading-spinner';

const OfferRide = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    time: '',
    seats: '1',
    price: '',
    recurring: false,
    carModel: '',
    description: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.from.trim()) newErrors.from = 'Pickup location is required';
    if (!formData.to.trim()) newErrors.to = 'Destination is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    if (!formData.price || Number(formData.price) <= 0) newErrors.price = 'Valid price is required';
    if (!formData.carModel.trim()) newErrors.carModel = 'Car model is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Please fix the errors",
        description: "Check the highlighted fields and try again.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Ride Offered Successfully!",
      description: "Your ride has been posted. You'll receive notifications when passengers request to join.",
    });
    
    // Reset form
    setFormData({
      from: '',
      to: '',
      date: '',
      time: '',
      seats: '1',
      price: '',
      recurring: false,
      carModel: '',
      description: ''
    });
    setErrors({});
    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <MobileLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-green-600 text-white px-4 py-6">
          <h1 className="text-2xl font-bold">Offer a Ride</h1>
          <p className="text-green-100 mt-1">Share your journey and earn money</p>
        </div>

        {/* Form */}
        <div className="px-4 py-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Route Information */}
            <div className="bg-white rounded-lg p-4 space-y-4">
              <h2 className="font-semibold text-gray-900 flex items-center">
                <MapPin className="mr-2" size={20} />
                Route Details
              </h2>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="from">From</Label>
                  <Input
                    id="from"
                    placeholder="Pickup location"
                    value={formData.from}
                    onChange={(e) => handleInputChange('from', e.target.value)}
                    className={errors.from ? 'border-red-500' : ''}
                  />
                  {errors.from && <p className="text-red-500 text-sm mt-1">{errors.from}</p>}
                </div>
                
                <div>
                  <Label htmlFor="to">To</Label>
                  <Input
                    id="to"
                    placeholder="Destination"
                    value={formData.to}
                    onChange={(e) => handleInputChange('to', e.target.value)}
                    className={errors.to ? 'border-red-500' : ''}
                  />
                  {errors.to && <p className="text-red-500 text-sm mt-1">{errors.to}</p>}
                </div>
              </div>
            </div>

            {/* Time & Date */}
            <div className="bg-white rounded-lg p-4 space-y-4">
              <h2 className="font-semibold text-gray-900 flex items-center">
                <Calendar className="mr-2" size={20} />
                When
              </h2>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                    className={errors.date ? 'border-red-500' : ''}
                  />
                  {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
                </div>
                
                <div>
                  <Label htmlFor="time">Time</Label>
                  <Input
                    id="time"
                    type="time"
                    value={formData.time}
                    onChange={(e) => handleInputChange('time', e.target.value)}
                    className={errors.time ? 'border-red-500' : ''}
                  />
                  {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="recurring"
                  checked={formData.recurring}
                  onChange={(e) => handleInputChange('recurring', e.target.checked)}
                  className="rounded"
                />
                <Label htmlFor="recurring" className="text-sm">This is a recurring ride</Label>
              </div>
            </div>

            {/* Ride Details */}
            <div className="bg-white rounded-lg p-4 space-y-4">
              <h2 className="font-semibold text-gray-900 flex items-center">
                <Car className="mr-2" size={20} />
                Ride Details
              </h2>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="seats">Available Seats</Label>
                  <select
                    id="seats"
                    value={formData.seats}
                    onChange={(e) => handleInputChange('seats', e.target.value)}
                    className="w-full p-2 border rounded-lg"
                  >
                    {[1, 2, 3, 4, 5, 6].map(num => (
                      <option key={num} value={num}>{num} seat{num > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="price">Price per seat ($)</Label>
                  <Input
                    id="price"
                    type="number"
                    placeholder="0"
                    min="0"
                    step="0.50"
                    value={formData.price}
                    onChange={(e) => handleInputChange('price', e.target.value)}
                    className={errors.price ? 'border-red-500' : ''}
                  />
                  {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
                </div>
              </div>
              
              <div>
                <Label htmlFor="carModel">Car Model</Label>
                <Input
                  id="carModel"
                  placeholder="e.g., Toyota Camry, Honda Civic"
                  value={formData.carModel}
                  onChange={(e) => handleInputChange('carModel', e.target.value)}
                  className={errors.carModel ? 'border-red-500' : ''}
                />
                {errors.carModel && <p className="text-red-500 text-sm mt-1">{errors.carModel}</p>}
              </div>
              
              <div>
                <Label htmlFor="description">Additional Notes (Optional)</Label>
                <textarea
                  id="description"
                  rows={3}
                  placeholder="Any special instructions or preferences..."
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  className="w-full p-2 border rounded-lg resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg"
            >
              {isSubmitting ? (
                <>
                  <LoadingSpinner size="sm" className="mr-2" />
                  Publishing Ride...
                </>
              ) : (
                'Publish Ride'
              )}
            </Button>
          </form>
        </div>
      </div>
    </MobileLayout>
  );
};

export default OfferRide;
