
import React, { useState } from 'react';
import MobileLayout from '../components/Layout/MobileLayout';
import { User, Star, Car, MessageCircle, Settings, LogOut, Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { toast } = useToast();

  const userStats = [
    { label: 'Rides Completed', value: '24' },
    { label: 'Rating', value: '4.9' },
    { label: 'Money Saved', value: '$340' },
    { label: 'CO₂ Reduced', value: '45 lbs' }
  ];

  const handleSignOut = () => {
    toast({
      title: "Signed Out",
      description: "You have been successfully signed out.",
    });
  };

  const handleEditProfile = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      toast({
        title: "Profile Updated",
        description: "Your profile changes have been saved.",
      });
    }
  };

  const menuItems = [
    { 
      icon: Car, 
      label: 'My Rides', 
      action: () => toast({ title: "Feature Coming Soon", description: "Ride history will be available soon!" })
    },
    { 
      icon: MessageCircle, 
      label: 'Reviews', 
      action: () => toast({ title: "Feature Coming Soon", description: "Review system will be available soon!" })
    },
    { 
      icon: Settings, 
      label: 'Settings', 
      action: () => toast({ title: "Feature Coming Soon", description: "Settings page will be available soon!" })
    }
  ];

  return (
    <MobileLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-blue-600 text-white px-4 py-8">
          <div className="text-center">
            <div className="relative">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <User size={32} className="text-white" />
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleEditProfile}
                className="absolute -bottom-2 -right-2 bg-white/20 hover:bg-white/30 text-white rounded-full p-2"
              >
                <Edit size={16} />
              </Button>
            </div>
            <h1 className="text-2xl font-bold">John Doe</h1>
            <p className="text-blue-100 mt-1">Member since March 2024</p>
            <div className="flex items-center justify-center space-x-1 mt-2">
              <Star size={16} className="text-yellow-400 fill-current" />
              <span className="font-semibold">4.9</span>
              <span className="text-blue-100 text-sm">(24 reviews)</span>
            </div>
            {isEditing && (
              <div className="mt-3 text-sm text-blue-100">
                Tap fields to edit your profile
              </div>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="px-4 py-6 bg-white">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Your Impact</h2>
          <div className="grid grid-cols-2 gap-4">
            {userStats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="px-4 py-4">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-lg p-4 text-white">
            <h3 className="font-semibold mb-2">Ready to ride?</h3>
            <div className="flex space-x-2">
              <Button variant="secondary" size="sm" className="flex-1">
                Find a Ride
              </Button>
              <Button variant="secondary" size="sm" className="flex-1">
                Offer a Ride
              </Button>
            </div>
          </div>
        </div>

        {/* Menu */}
        <div className="px-4 py-2">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={index}
                  onClick={item.action}
                  className="w-full flex items-center space-x-3 px-4 py-4 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                >
                  <Icon size={20} className="text-gray-600" />
                  <span className="font-medium text-gray-900">{item.label}</span>
                </button>
              );
            })}
            
            {/* Sign Out with Confirmation */}
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <button className="w-full flex items-center space-x-3 px-4 py-4 hover:bg-red-50 transition-colors text-red-600">
                  <LogOut size={20} />
                  <span className="font-medium">Sign Out</span>
                </button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you sure you want to sign out?</AlertDialogTitle>
                  <AlertDialogDescription>
                    You'll need to sign in again to access your account and ride history.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleSignOut}>Sign Out</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>

        {/* Version Info */}
        <div className="px-4 pb-6">
          <p className="text-center text-sm text-gray-500">
            CarpoolConnect v1.0.0
          </p>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Profile;
