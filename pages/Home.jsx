import React from 'react';
import SearchBar from '../components/SearchBar';
import CategoryGrid from '../components/CategoryGrid';

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="text-center py-8">
        <p className="text-gray-500 text-sm mb-8">In association with Bitnob</p>
        <SearchBar />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Explore Categories
        </h2>
        <CategoryGrid />
      </div>
    </div>
  );
};

export default Home;