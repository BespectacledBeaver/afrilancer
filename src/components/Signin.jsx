import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { signInUser } = UserAuth();
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    const { session, error } = await signInUser(email, password); // Use your signIn function

    if (error) {
      setError(error); // Set the error message if sign-in fails

      // Set a timeout to clear the error message after a specific duration (e.g., 3 seconds)
      setTimeout(() => {
        setError("");
      }, 3000); // 3000 milliseconds = 3 seconds
    } else {
      // Redirect or perform any necessary actions after successful sign-in
      navigate("/home");
    }

    if (session) {
      closeModal();
      setError(""); // Reset the error when there's a session
    }
  };

  return (
    <div>
      <img src="src\images\image 8.png" alt="signin_image" className="mx-auto h-75"/>
      <form onSubmit={handleSignIn} className="max-w-md m-auto pt-10">
        <h2 className="font-bold text-4xl text-center">Welcome Back</h2>
        
        <div className="flex flex-col py-4">
          {/* <label htmlFor="Email">Email</label> */}
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="h-13 p-4 mt-2 rounded-xl border-2 border-[#DBE0E5]"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
        </div>
        <div className="flex flex-col py-4">
          {/* <label htmlFor="Password">Password</label> */}
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="h-13 p-4 mt-1 rounded-xl border-2 border-[#DBE0E5]"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </div>

       <button className="w-full mt-4 text-white bg-[#0D80F2] border-2 border-[#0D80F2] font-bold rounded-lg p-3 hover:bg-white hover:text-[#0D80F2] transition-colors duration-300">
  Sign In
</button>

        <p className="text-gray-400 text-center pt-4">
          Don't have an account yet? <Link to="/signup" className="text-[#0D80F2] hover:text-gray-900"> Sign up </Link>
        </p>
        {error && <p className="text-red-400 text-center pt-4">{error}</p>}
        
      </form>
    </div>
  );
};

export default Signin;
