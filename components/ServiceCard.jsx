import React from 'react';
import { motion } from 'framer-motion';
import { Star, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg"
    >
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-48 object-cover"
        />
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
            {service.title}
          </h3>
          <div className="flex items-center ml-2">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600 ml-1">{service.rating}</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {service.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
              <img
                src={service.freelancer.avatar}
                alt={service.freelancer.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">{service.freelancer.name}</p>
              <p className="text-xs text-gray-500">{service.freelancer.level}</p>
            </div>
          </div>

          <div className="text-right">
            <p className="text-lg font-bold text-gray-900">${service.price}</p>
            <p className="text-xs text-gray-500">Starting at</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;