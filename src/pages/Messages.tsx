
import React from 'react';
import MobileLayout from '../components/Layout/MobileLayout';
import { MessageCircle, User, Clock } from 'lucide-react';

const Messages = () => {
  const conversations = [
    {
      id: '1',
      name: 'Sarah M.',
      lastMessage: 'Thanks for the ride yesterday!',
      time: '2 min ago',
      unread: true,
      avatar: 'SM'
    },
    {
      id: '2',
      name: 'Mike R.',
      lastMessage: 'Are you still offering the 8:30 AM ride?',
      time: '1 hour ago',
      unread: false,
      avatar: 'MR'
    },
    {
      id: '3',
      name: 'Lisa K.',
      lastMessage: 'Perfect, see you at the pickup point!',
      time: '3 hours ago',
      unread: false,
      avatar: 'LK'
    }
  ];

  return (
    <MobileLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-blue-600 text-white px-4 py-6">
          <h1 className="text-2xl font-bold">Messages</h1>
          <p className="text-blue-100 mt-2">Chat with your ride partners</p>
        </div>

        {/* Conversations */}
        <div className="px-4 py-6">
          {conversations.length === 0 ? (
            <div className="text-center py-12">
              <MessageCircle size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No messages yet</h3>
              <p className="text-gray-500">Start a conversation when you book or offer a ride</p>
            </div>
          ) : (
            <div className="space-y-2">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  className="bg-white rounded-lg p-4 border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {conversation.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-gray-900">{conversation.name}</h3>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-1 text-gray-500">
                            <Clock size={12} />
                            <span className="text-xs">{conversation.time}</span>
                          </div>
                          {conversation.unread && (
                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          )}
                        </div>
                      </div>
                      <p className={`text-sm mt-1 truncate ${
                        conversation.unread ? 'text-gray-900 font-medium' : 'text-gray-600'
                      }`}>
                        {conversation.lastMessage}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </MobileLayout>
  );
};

export default Messages;
