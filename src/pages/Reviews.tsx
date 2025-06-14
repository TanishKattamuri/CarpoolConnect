
import React from 'react';
import MobileLayout from '../components/Layout/MobileLayout';
import { Star, User, Calendar } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      id: '1',
      reviewer: 'Sarah M.',
      rating: 5,
      comment: 'Great ride! Very punctual and friendly driver.',
      date: '2024-06-12',
      avatar: 'SM'
    },
    {
      id: '2',
      reviewer: 'Mike R.',
      rating: 4,
      comment: 'Smooth ride, good conversation. Would ride again!',
      date: '2024-06-10',
      avatar: 'MR'
    },
    {
      id: '3',
      reviewer: 'Lisa K.',
      rating: 5,
      comment: 'Perfect timing and very comfortable car. Highly recommended!',
      date: '2024-06-08',
      avatar: 'LK'
    },
    {
      id: '4',
      reviewer: 'John D.',
      rating: 5,
      comment: 'Excellent service, felt safe throughout the journey.',
      date: '2024-06-05',
      avatar: 'JD'
    }
  ];

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <MobileLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-blue-600 text-white px-4 py-6">
          <h1 className="text-2xl font-bold">Reviews</h1>
          <p className="text-blue-100 mt-2">What others say about your rides</p>
        </div>

        {/* Rating Summary */}
        <div className="px-4 py-6 bg-white">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Star size={32} className="text-yellow-400 fill-current" />
              <span className="text-3xl font-bold text-gray-900">{averageRating.toFixed(1)}</span>
            </div>
            <p className="text-gray-600">Based on {reviews.length} reviews</p>
            <div className="flex items-center justify-center space-x-1 mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={16}
                  className={`${
                    star <= averageRating
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Reviews List */}
        <div className="px-4 py-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Recent Reviews</h2>
          <div className="space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {review.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{review.reviewer}</h3>
                      <div className="flex items-center space-x-1">
                        <Calendar size={12} className="text-gray-400" />
                        <span className="text-xs text-gray-500">{review.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={14}
                          className={`${
                            star <= review.rating
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 text-sm">{review.comment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Reviews;
