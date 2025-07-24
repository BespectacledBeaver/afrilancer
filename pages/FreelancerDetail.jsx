import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, MapPin, Clock, CheckCircle, MessageCircle, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const FreelancerDetail = () => {
  const { freelancerId } = useParams();
  
  const freelancerData = {
    1: {
      name: 'Sarah Johnson',
      title: 'Senior Project Manager & Strategy Consultant',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face',
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
          avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d7c?w=40&h=40&fit=crop&crop=face',
          rating: 5,
          date: '1 month ago',
          comment: 'Professional, timely, and results-driven. Highly recommend for any project management needs.'
        }
      ]
    }
  };
  
  const freelancer = freelancerData[freelancerId] || freelancerData[1];
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center mb-8">
          <Link to="/" className="flex items-center text-gray-600 hover:text-gray-900 mr-4">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Services
          </Link>
        </div>
        
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
                      <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
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
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Contact Now
                </button>
                <div className="flex space-x-3">
                  <button className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Message
                  </button>
                  <button className="border border-gray-300 text-gray-700 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelancerDetail;