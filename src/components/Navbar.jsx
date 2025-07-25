import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/Logo.svg";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { session, signOut } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async (e) => {
    e.preventDefault();

    try {
      await signOut();
      navigate("/");
    } catch (err) {
      setError("An unexpected error occurred."); // Catch unexpected errors
    }
  };

  console.log(session);

  return (
  <header className="w-full bg-white shadow-sm flex items-center h-20 px-8">
    {/* Logo */}
    <div className="flex items-center gap-2 flex-shrink-0">
      <img src={logo} alt="Logo" className="h-7 w-7" />
      <span className="font-bold text-lg tracking-wide">AFRILANCER</span>
      <span className=" text-gray-400 ml-10 mt-2 mb-2 text-[12px]">
        In association with Bitnob
        </span>
    </div>
    {/* Spacer */}
    <div className="flex-1" />
    {/* Nav Links */}
    <nav className="flex gap-10 text-[#121417] font-medium mr-8">
      <Link to="/home" className=" hover:text-[#0D80F2]">Home</Link>
      <Link to="/transactions" className=" hover:text-[#0D80F2]">Transactions</Link>
      <Link to="/services" className=" hover:text-[#0D80F2]">Services</Link>
      <Link to="/about" className=" hover:text-[#0D80F2]">About</Link>
    </nav>
    {/* Avatar */}
    <img onClick={handleSignOut} src="/vite.svg" alt="User" className="h-11 w-11 rounded-full object-cover border-2 border-gray-200 hover:cursor-pointer" />
  </header>);
};

export default Navbar; 