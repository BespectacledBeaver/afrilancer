import React from "react";
import mgmt from "../images/mgmt.png";
import uiux from "../images/uiux.png";
import ai from "../images/ai.png";
import mktsales from "../images/mktsales.png";
import techdev from "../images/techdev.png";
import archit from "../images/archit.png";
import remlear from "../images/remlear.png";
import writetranslate from "../images/writetranslate.png";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories"; // adjust path as needed
import { a } from "framer-motion/client";

const categories = [
  { name: "Management", image : mgmt},
  { name: "UI/UX Design", image : uiux },
  { name: "Marketing & Sales", image : mktsales},
  { name: "Tech & Dev", image : techdev},
  { name: "AI", image :ai },
  { name: "Architecture", image : archit },
  { name: "Remote learning", image :remlear },
  { name: "Writing & translation" , image :writetranslate},
];

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-gray-50 min-h-screen">
      <div className="flex justify-center pt-8 mb-8">
        <div className="w-full max-w-3xl">
          <div className="flex items-center bg-gray-100 px-4 py-3 text-gray-400 shadow-2xl rounded-[10px] border-2 border-gray-300 focus-within:border-[#0D80F2] focus-within:text-[#0D80F2]">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" /></svg>
            <input type="text" placeholder="Search for fields" className="bg-gray-100 outline-none w-full text-gray-700" />
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-center mb-8">Explore Categories</h2>
      <Categories categories={categories} />
    </div>
    </>
  );
};

export default Home; 