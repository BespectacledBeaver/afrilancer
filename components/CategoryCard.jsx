import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CategoryCard = ({ category }) => {
  return (
    <Link to={`/category/${category.id}`}>
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="relative overflow-hidden rounded-xl cursor-pointer group"
    >
      <div className="aspect-w-4 aspect-h-3">
        <img
          src={category.image}
          alt={category.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <h3 className="text-white text-xl font-bold text-center px-4">
          {category.title}
        </h3>
      </div>
    </motion.div>
    </Link>
  );
};

export default CategoryCard;