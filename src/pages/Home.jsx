import React, { useEffect } from "react";
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
import { Helmet } from "react-helmet";

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
  useEffect(() => {
    // Add a delay to ensure DOM is ready
    const timer = setTimeout(() => {
      // Remove existing scripts if any
      const existing1 = document.querySelector('script[src="https://cdn.botpress.cloud/webchat/v3.2/inject.js"]');
      const existing2 = document.querySelector('script[src="https://files.bpcontent.cloud/2025/07/24/12/20250724123931-GIJRM5TS.js"]');
      if (existing1) existing1.remove();
      if (existing2) existing2.remove();
  
      console.log('Loading Botpress scripts...');
  
      // Inject first script
      const script1 = document.createElement('script');
      script1.src = 'https://cdn.botpress.cloud/webchat/v3.2/inject.js';
      script1.defer = true;
      script1.onload = () => {
        console.log('Botpress inject script loaded');
        
        // Load second script after first one loads
        setTimeout(() => {
          const script2 = document.createElement('script');
          script2.src = 'https://files.bpcontent.cloud/2025/07/24/12/20250724123931-GIJRM5TS.js';
          script2.defer = true;
          script2.onload = () => {
            console.log('Botpress config script loaded');
            console.log('Chatbot should now be available');
          };
          script2.onerror = () => {
            console.error('Failed to load Botpress config script');
          };
          document.body.appendChild(script2);
        }, 1000);
      };
      script1.onerror = () => {
        console.error('Failed to load Botpress inject script');
      };
      document.body.appendChild(script1);
    }, 1000);
  
    return () => {
      clearTimeout(timer);
      // Clean up scripts
      const script1 = document.querySelector('script[src="https://cdn.botpress.cloud/webchat/v3.2/inject.js"]');
      const script2 = document.querySelector('script[src="https://files.bpcontent.cloud/2025/07/24/12/20250724123931-GIJRM5TS.js"]');
      if (script1) script1.remove();
      if (script2) script2.remove();
    };
  }, []);
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