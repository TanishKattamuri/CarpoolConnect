import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, MessageCircle, User, Plus } from 'lucide-react';

interface MobileLayoutProps {
  children: React.ReactNode;
  activeTab?: string;
}

const MobileLayout = ({ children, activeTab }: MobileLayoutProps) => {
  const location = useLocation();
  
  // Scroll to top whenever the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  const navItems = [
    { id: 'home', icon: Home, label: 'Home', path: '/' },
    { id: 'search', icon: Search, label: 'Find Rides', path: '/find-rides' },
    { id: 'create', icon: Plus, label: 'Offer Ride', path: '/offer-ride' },
    { id: 'messages', icon: MessageCircle, label: 'Messages', path: '/messages' },
    { id: 'profile', icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Main Content */}
      <main className="flex-1 pb-20">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-50">
        <div className="flex justify-around items-center max-w-md mx-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab ? activeTab === item.id : location.pathname === item.path;
            return (
              <Link
                key={item.id}
                to={item.path}
                className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
                  isActive 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Icon size={20} />
                <span className="text-xs mt-1 font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default MobileLayout;
