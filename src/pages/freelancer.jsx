import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, MapPin, Clock, CheckCircle, MessageCircle, Heart, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import axios from 'axios';

const Freelancer = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);
  const { freelancerId } = useParams();
  
  const freelancerData = {
    1: {
      name: 'Sarah Johnson',
      title: 'Senior Project Manager & Strategy Consultant',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      rating: 4.9,
      reviewCount: 127,
      location: 'Lagos, Nigeria',
      responseTime: '1 hour',
      completedProjects: 89,
      description: 'Experienced project manager with 8+ years in strategic consulting. I help businesses streamline operations, implement efficient processes, and achieve sustainable growth through data-driven strategies.',
      skills: ['Project Management', 'Strategic Planning', 'Process Optimization', 'Team Leadership', 'Agile Methodology'],
      languages: ['English (Native)', 'French (Conversational)'],
      hourlyRate: 45,
      availability: 'Available now',
      portfolio: [
        {
          id: 1,
          title: 'E-commerce Platform Optimization',
          image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop',
          description: 'Increased conversion rate by 35% through strategic process improvements'
        },
        {
          id: 2,
          title: 'Startup Growth Strategy',
          image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop',
          description: 'Developed comprehensive growth plan resulting in 200% revenue increase'
        }
      ],
      reviews: [
        {
          id: 1,
          client: 'Michael Thompson',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
          rating: 5,
          date: '2 weeks ago',
          comment: 'Sarah delivered exceptional results. Her strategic insights transformed our business operations completely.'
        },
        {
          id: 2,
          client: 'Lisa Chen',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
          rating: 5,
          date: '1 month ago',
          comment: 'Professional, timely, and results-driven. Highly recommend for any project management needs.'
        }
      ]
    },
    2: {
      name: 'John Sarcusie',
      title: 'Senior Project Manager & Strategy Consultant',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      rating: 4.9,
      reviewCount: 127,
      location: 'Lagos, Nigeria',
      responseTime: '1 hour',
      completedProjects: 89,
      description: 'Experienced project manager with 8+ years in strategic consulting. I help businesses streamline operations, implement efficient processes, and achieve sustainable growth through data-driven strategies.',
      skills: ['Project Management', 'Strategic Planning', 'Process Optimization', 'Team Leadership', 'Agile Methodology'],
      languages: ['English (Native)', 'French (Conversational)'],
      hourlyRate: 45,
      availability: 'Available now',
      portfolio: [
        {
          id: 1,
          title: 'E-commerce Platform Optimization',
          image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop',
          description: 'Increased conversion rate by 35% through strategic process improvements'
        },
        {
          id: 2,
          title: 'Startup Growth Strategy',
          image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop',
          description: 'Developed comprehensive growth plan resulting in 200% revenue increase'
        }
      ],
      reviews: [
        {
          id: 1,
          client: 'Michael Thompson',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
          rating: 5,
          date: '2 weeks ago',
          comment: 'Sarah delivered exceptional results. Her strategic insights transformed our business operations completely.'
        },
        {
          id: 2,
          client: 'Lisa Chen',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
          rating: 5,
          date: '1 month ago',
          comment: 'Professional, timely, and results-driven. Highly recommend for any project management needs.'
        }
      ]
    }
  };
  
  const freelancer = freelancerData[freelancerId];

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const uniqueRef = `order-${Date.now()}-${freelancerId}-afrilancer`;
      const response = await axios.post(
        'https://sandboxapi.bitnob.co/api/v1/checkout',
        {
          satoshis: 10, // or 10000 if you want to match the Vue example
          reference: uniqueRef,
          description: `Payment for ${freelancer.name}'s service`,
          customerEmail: "wach7abit@gmail.com",
          notificationEmail: "korax.dz@gmail.com",
          callbackUrl: "https://www.bitnob.dev/api-reference/wallets",
          successUrl: "https://www.bitnob.dev/api-reference/wallets"
        },
        {
          headers: {
            Authorization: 'Bearer sk.9d83cfaf8f47.fee6c73d45b469e2f5ef636b7',
            'Content-Type': 'application/json',
            Accept: 'application/json'
          }
        }
      );
      // ✅ Redirect to Bitnob hosted checkout
      window.location.href = response.data.data.previewLink;

    } catch (error) {
      console.error('❌ Checkout error:', error.response?.data || error.message);
      alert('Payment initiation failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!freelancer) {
    console.log(freelancerId);
    return (
      <>
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Freelancer Not Found</h2>
          <p className="text-gray-700">The freelancer you are looking for does not exist.</p>
        </div>
      </>
    );
  }
  
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Profile Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile Header */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-8"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <img
                  src={freelancer.avatar}
                  alt={freelancer.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{freelancer.name}</h1>
                  <p className="text-xl text-gray-600 mb-4">{freelancer.title}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      <span className="font-medium text-gray-900">{freelancer.rating}</span>
                      <span className="ml-1">({freelancer.reviewCount} reviews)</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {freelancer.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      Responds in {freelancer.responseTime}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* About Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{freelancer.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {freelancer.skills.map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm hover:bg-blue-200 hover:text-blue-900">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Languages</h3>
                  <div className="space-y-1">
                    {freelancer.languages.map((language, index) => (
                      <p key={index} className="text-gray-600 text-sm">{language}</p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Portfolio Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Portfolio</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {freelancer.portfolio.map((item) => (
                  <div key={item.id} className="group cursor-pointer">
                    <div className="aspect-w-16 aspect-h-10 mb-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-40 object-cover rounded-lg group-hover:opacity-90 transition-opacity"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Reviews Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Reviews</h2>
              <div className="space-y-6">
                {freelancer.reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-100 pb-6 last:border-b-0">
                    <div className="flex items-start space-x-4">
                      <img
                        src={review.avatar}
                        alt={review.client}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-900">{review.client}</h4>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                        <div className="flex items-center mb-3">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-gray-600">{review.comment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pricing Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-8"
            >
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  ${freelancer.hourlyRate}/hr
                </div>
                <p className="text-gray-600">{freelancer.availability}</p>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Projects completed</span>
                  <span className="font-medium">{freelancer.completedProjects}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Response time</span>
                  <span className="font-medium">{freelancer.responseTime}</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <button 
                  onClick={() => setShowPaymentModal(true)}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Continue
                </button>
                <div className="flex space-x-3">
                  <button className="flex-1 border border-gray-300 text-white py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Message
                  </button>
                  <button className="border border-gray-300 text-white p-2 rounded-lg hover:bg-gray-50 transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>

    {/* Payment Modal */}
    <AnimatePresence>
      {showPaymentModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-gray-100 bg-opacity-10 backdrop-blur-[2px] flex items-center justify-center p-4 z-50"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            className="bg-white rounded-xl p-6 max-w-md w-full"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Payment Details</h3>
              <button
                onClick={() => setShowPaymentModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handlePayment} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Card Number
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="1234 5678 9012 3456"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    CVC
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="123"
                    required
                  />
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="flex justify-between mb-2">
                  <span>Service Rate</span>
                  <span>${freelancer.hourlyRate}/hr</span>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-blue-400"
                  disabled={loading}
                >
                  {loading ? 'Processing...' : 'Pay Now'}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
};

export default Freelancer;
