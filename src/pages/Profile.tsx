
import React from 'react';
import MobileLayout from '../components/Layout/MobileLayout';
import { User, Star, Car, MessageCircle, Settings, LogOut } from 'lucide-react';

const Profile = () => {
  const userStats = [
    { label: 'Rides Completed', value: '24' },
    { label: 'Rating', value: '4.9' },
    { label: 'Money Saved', value: '$340' },
    { label: 'CO₂ Reduced', value: '45 lbs' }
  ];

  const menuItems = [
    { icon: Car, label: 'My Rides', action: () => {} },
    { icon: MessageCircle, label: 'Reviews', action: () => {} },
    { icon: Settings, label: 'Settings', action: () => {} },
    { icon: LogOut, label: 'Sign Out', action: () => {} }
  ];

  return (
    <MobileLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-blue-600 text-white px-4 py-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <User size={32} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold">John Doe</h1>
            <p className="text-blue-100 mt-1">Member since March 2024</p>
            <div className="flex items-center justify-center space-x-1 mt-2">
              <Star size={16} className="text-yellow-400 fill-current" />
              <span className="font-semibold">4.9</span>
              <span className="text-blue-100 text-sm">(24 reviews)</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="px-4 py-6 bg-white">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Your Impact</h2>
          <div className="grid grid-cols-2 gap-4">
            {userStats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Menu */}
        <div className="px-4 py-6">
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
