import React from 'react';
import ServiceCard from './ServiceCard';

const ServiceList = ({ categoryId }) => {
  const services = {
    1: [ // Management
      {
        id: 1,
        title: 'Project Management & Strategy Consulting',
        description: 'Complete project management solutions with strategic planning and execution.',
        price: 150,
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
        freelancer: {
          name: 'Sarah Johnson',
          level: 'Expert',
          avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face'
        }
      },
      {
        id: 2,
        title: 'Business Process Optimization',
        description: 'Streamline your business operations for maximum efficiency and growth.',
        price: 120,
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
        freelancer: {
          name: 'Michael Chen',
          level: 'Professional',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face'
        }
      }
    ],
    2: [ // UI/UX Design
      {
        id: 3,
        title: 'Mobile App UI/UX Design',
        description: 'Modern and intuitive mobile app designs that convert users into customers.',
        price: 200,
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
        freelancer: {
          name: 'Emma Rodriguez',
          level: 'Expert',
          avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face'
        }
      },
      {
        id: 4,
        title: 'Website Redesign & User Experience',
        description: 'Complete website makeover with focus on user experience and conversion.',
        price: 180,
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=400&h=300&fit=crop',
        freelancer: {
          name: 'David Kim',
          level: 'Professional',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face'
        }
      }
    ]
  };
  
  const categoryServices = services[categoryId] || services[1];
  
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Available Services ({categoryServices.length})
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}      </div>
    </div>
  );
};

export default ServiceList;