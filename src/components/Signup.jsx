import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import illustration from "../images/signup.svg"; // Update path as needed

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { signUpNewUser } = UserAuth();
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await signUpNewUser(email, password);
      if (result.success) {
        navigate("/home");
      } else {
        setError(result.error.message);
      }
    } catch (err) {
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left: Form */}
      <div className="w-1/2 bg-[#F0F2F5] flex items-center justify-center">
        <form onSubmit={handleSignUp} className="w-3/4 max-w-md">
          <h2 className="font-bold text-3xl text-center mb-6">Create your account</h2>

          <input
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 mb-4 rounded border border-gray-300"
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mb-4 rounded border border-gray-300"
            type="email"
            name="email"
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-4 rounded border border-gray-300"
            type="password"
            name="password"
            placeholder="Password"
          />
          <select
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-3 mb-4 rounded border border-gray-300"
            name="role"
          >
            <option value="">Role</option>
            <option value="student">Client</option>
            <option value="teacher">Provider</option>
          </select>
          <select
  onChange={(e) => setCountry(e.target.value)}
  className="w-full p-3 mb-4 rounded border border-gray-300 overflow-y-auto"
  name="country"
  size="1" // Keeps it as a dropdown (not listbox)
>
  <option value="">Country</option>
  {[
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
    "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
    "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia",
    "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros",
    "Congo (Brazzaville)", "Congo (Kinshasa)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark",
    "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea",
    "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana",
    "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland",
    "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan",
    "Kenya", "Kiribati", "Korea North", "Korea South", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho",
    "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives",
    "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco",
    "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands",
    "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau",
    "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania",
    "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent", "Samoa", "San Marino",
    "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore",
    "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka",
    "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo",
    "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine",
    "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City",
    "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
  ].map((country) => (
    <option key={country} value={country}>
      {country}
    </option>
  ))}
</select>


          <button
            type="submit"
            disabled={loading}
            className="w-full p-3 bg-blue-600 rounded-lg border-2 border-[#0D80F2] text-white font-bold hover:bg-white hover:text-[#0D80F2]"
          >
            Sign Up
          </button>

          <p className="text-gray-600 text-center mt-4">
            Already have an account?{" "}
            <Link to="/signin" className="text-blue-600 hover:underline">
              Sign in
            </Link>
          </p>
          {error && <p className="text-red-600 text-center mt-4">{error}</p>}
        </form>
      </div>

      {/* Right: Illustration */}
      <div className="w-1/2 bg-white flex items-center justify-center">
        <img src={illustration} alt="Signup illustration" className="max-w-full max-h-full object-contain" />
      </div>
    </div>
  );
};

export default Signup;
