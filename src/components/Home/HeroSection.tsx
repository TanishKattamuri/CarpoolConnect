
import React from 'react';
import { Car, Users, DollarSign, Leaf, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Car,
      title: 'Easy Matching',
      description: 'Find rides on your route'
    },
    {
      icon: DollarSign,
      title: 'Save Money',
      description: '60% cheaper than rideshare'
    },
    {
      icon: Users,
      title: 'Build Community',
      description: 'Meet fellow commuters'
    },
    {
      icon: Leaf,
      title: 'Go Green',
      description: 'Reduce carbon footprint'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
      {/* Header */}
      <div className="px-4 pt-8 pb-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">CarpoolConnect</h1>
          <p className="text-blue-100 text-lg">Smart ridesharing for commuters</p>
        </div>

        {/* Quick Action Buttons */}
        <div className="space-y-3 mb-8">
          <button 
            onClick={() => navigate('/find-rides')}
            className="w-full bg-white text-blue-700 font-semibold py-4 px-6 rounded-xl shadow-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
          >
            <Car size={20} />
            <span>Find a Ride</span>
          </button>
          <button 
            onClick={() => navigate('/offer-ride')}
            className="w-full bg-blue-500 text-white font-semibold py-4 px-6 rounded-xl border-2 border-blue-400 hover:bg-blue-400 transition-colors flex items-center justify-center space-x-2"
          >
            <Plus size={20} />
            <span>Offer a Ride</span>
          </button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="px-4 pb-8">
        <div className="grid grid-cols-2 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center"
              >
                <Icon size={24} className="mx-auto mb-2 text-blue-200" />
                <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
                <p className="text-xs text-blue-100">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
