
import React from 'react';
import { TrendingUp, Users, DollarSign, Leaf } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      value: '2,456',
      label: 'Active Users',
      color: 'text-blue-600'
    },
    {
      icon: DollarSign,
      value: '$127k',
      label: 'Money Saved',
      color: 'text-green-600'
    },
    {
      icon: Leaf,
      value: '8.2k lbs',
      label: 'CO₂ Reduced',
      color: 'text-emerald-600'
    },
    {
      icon: TrendingUp,
      value: '94%',
      label: 'Match Rate',
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="px-4 py-6 bg-white">
      <h2 className="text-lg font-bold text-gray-900 mb-4 text-center">
        Making a Difference Together
      </h2>
      
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
              <Icon size={24} className={`mx-auto mb-2 ${stat.color}`} />
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatsSection;
