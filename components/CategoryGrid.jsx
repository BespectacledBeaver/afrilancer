import React from 'react';
import CategoryCard from './CategoryCard';

const CategoryGrid = () => {
  const categories = [
    {
      id: 1,
      title: 'Management',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'UI/UX Design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'Marketing & Sales',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      title: 'Tech & Dev',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop'
    },
    {
      id: 5,
      title: 'AI',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop'
    },
    {
      id: 6,
      title: 'Architecture',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop'
    },
    {
      id: 7,
      title: 'Remote Learning',
      image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=400&h=300&fit=crop'
    },
    {
      id: 8,
      title: 'Writing & Translation',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryGrid;