
import React, { useState } from 'react';
import MobileLayout from '../components/Layout/MobileLayout';
import { 
  Bell, 
  Shield, 
  CreditCard, 
  HelpCircle, 
  FileText, 
  Globe,
  Moon,
  Volume2,
  ChevronRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [sounds, setSounds] = useState(true);
  const { toast } = useToast();

  const handleToggle = (setting: string, value: boolean, setter: (value: boolean) => void) => {
    setter(value);
    toast({
      title: "Settings Updated",
      description: `${setting} ${value ? 'enabled' : 'disabled'}`,
    });
  };

  const settingsSections = [
    {
      title: 'Account',
      items: [
        {
          icon: Shield,
          label: 'Privacy & Security',
          action: () => toast({ title: "Privacy Settings", description: "Privacy settings will be available soon!" })
        },
        {
          icon: CreditCard,
          label: 'Payment Methods',
          action: () => toast({ title: "Payment Methods", description: "Payment settings will be available soon!" })
        }
      ]
    },
    {
      title: 'Preferences',
      items: [
        {
          icon: Bell,
          label: 'Notifications',
          toggle: true,
          value: notifications,
          onChange: (value: boolean) => handleToggle('Notifications', value, setNotifications)
        },
        {
          icon: Volume2,
          label: 'Sounds',
          toggle: true,
          value: sounds,
          onChange: (value: boolean) => handleToggle('Sounds', value, setSounds)
        },
        {
          icon: Moon,
          label: 'Dark Mode',
          toggle: true,
          value: darkMode,
          onChange: (value: boolean) => handleToggle('Dark Mode', value, setDarkMode)
        },
        {
          icon: Globe,
          label: 'Language',
          action: () => toast({ title: "Language Settings", description: "Language selection will be available soon!" })
        }
      ]
    },
    {
      title: 'Support',
      items: [
        {
          icon: HelpCircle,
          label: 'Help Center',
          action: () => toast({ title: "Help Center", description: "Help center will be available soon!" })
        },
        {
          icon: FileText,
          label: 'Terms & Privacy',
          action: () => toast({ title: "Terms & Privacy", description: "Legal documents will be available soon!" })
        }
      ]
    }
  ];

  return (
    <MobileLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-blue-600 text-white px-4 py-6">
          <h1 className="text-2xl font-bold">Settings</h1>
          <p className="text-blue-100 mt-2">Manage your preferences</p>
        </div>

        {/* Settings Sections */}
        <div className="px-4 py-6 space-y-6">
          {settingsSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="px-4 py-3 bg-gray-50 border-b border-gray-100">
                <h2 className="font-semibold text-gray-900">{section.title}</h2>
              </div>
              <div className="divide-y divide-gray-100">
                {section.items.map((item, itemIndex) => {
                  const Icon = item.icon;
                  return (
                    <div key={itemIndex} className="px-4 py-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Icon size={20} className="text-gray-600" />
                          <span className="font-medium text-gray-900">{item.label}</span>
                        </div>
                        {item.toggle ? (
                          <button
                            onClick={() => item.onChange && item.onChange(!item.value)}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                              item.value ? 'bg-blue-600' : 'bg-gray-200'
                            }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                item.value ? 'translate-x-6' : 'translate-x-1'
                              }`}
                            />
                          </button>
                        ) : (
                          <button
                            onClick={item.action}
                            className="text-gray-400 hover:text-gray-600"
                          >
                            <ChevronRight size={20} />
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* App Info */}
        <div className="px-4 pb-6">
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">CarpoolConnect</p>
            <p className="text-xs text-gray-400">Version 1.0.0</p>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Settings;
