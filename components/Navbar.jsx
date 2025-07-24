import React from 'react';
import { Link } from 'react-router-dom';
import { Crown } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Crown className="w-6 h-6 text-gray-800" />
            <Link to="/" className="text-xl font-bold text-gray-800">
              AFRILANCER
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900 font-medium">
              Home
            </Link>
            <Link to="/transactions" className="text-gray-700 hover:text-gray-900 font-medium">
              Transactions
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-gray-900 font-medium">
              Services
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900 font-medium">
              About
            </Link>
          </div>
          
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-300 rounded-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;