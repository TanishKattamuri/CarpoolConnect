
import React from 'react';
import MobileLayout from '../components/Layout/MobileLayout';
import HeroSection from '../components/Home/HeroSection';
import RecentRides from '../components/Home/RecentRides';
import StatsSection from '../components/Home/StatsSection';

const Index = () => {
  return (
    <MobileLayout activeTab="home">
      <div className="min-h-screen bg-gray-50">
        <HeroSection />
        <RecentRides />
        <StatsSection />
      </div>
    </MobileLayout>
  );
};

export default Index;
