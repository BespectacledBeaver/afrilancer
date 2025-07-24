import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ServiceList from '../components/ServiceList';

const CategoryDetail = () => {
  const { categoryId } = useParams();
  
  const categories = {
    1: { title: 'Management', description: 'Professional management services' },
    2: { title: 'UI/UX Design', description: 'Creative design solutions' },
    3: { title: 'Marketing & Sales', description: 'Boost your business growth' },
    4: { title: 'Tech & Dev', description: 'Technical development services' },
    5: { title: 'AI', description: 'Artificial intelligence solutions' },
    6: { title: 'Architecture', description: 'Architectural design services' },
    7: { title: 'Remote Learning', description: 'Online education services' },
    8: { title: 'Writing & Translation', description: 'Content and language services' }
  };
  
  const category = categories[categoryId] || categories[1];
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center mb-8">
          <Link to="/" className="flex items-center text-gray-600 hover:text-gray-900 mr-4">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Categories
          </Link>
        </div>
        
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{category.title}</h1>
          <p className="text-xl text-gray-600">{category.description}</p>
        </div>
        
        <ServiceList categoryId={categoryId} />
      </div>
    </div>
  );
};

export default CategoryDetail;