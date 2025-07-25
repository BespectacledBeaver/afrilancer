import React from "react";
import Category from "./Category";
import { useNavigate } from "react-router-dom";

const Categories = ({ categories }) => {
  const navigate = useNavigate();

  const goToService = (category) => (e) => {
    if (e && typeof e.preventDefault === 'function') {
      e.preventDefault();
    }
    try {
      navigate("/services/" + category.toLowerCase());
    } catch (err) {
      // setError is not defined, so just log for now
      console.error("An unexpected error occurred.", err);
    }
  };

  return(
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-12">
    {categories.map((cat, idx) => (
      <Category key={idx} name={cat.name} image={cat.image} onclick={goToService(cat.name)}/>
    ))}
  </div>);
};

export default Categories; 