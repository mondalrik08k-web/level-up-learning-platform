import { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { auth } from "../firebase"; // Correct relative path
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User signed up successfully");
      // Reset state and navigate to another page or show success message
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="relative w-96 md:w-[36rem] p-12 bg-[#0d0f17] rounded-lg shadow-lg border-2 border-[#00f0ff]">
        {/* Email Field */}
        <div className="flex items-center mb-6">
          <div className="p-3 bg-[#00f0ff] rounded-l">
            <i className="fas fa-user text-white"></i>
          </div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 w-full rounded-r bg-transparent text-white border border-[#00f0ff] focus:outline-none"
          />
        </div>

        {/* Password Field */}
        <div className="flex items-center mb-6">
          <div className="p-3 bg-[#00f0ff] rounded-l">
            <i className="fas fa-lock text-white"></i>
          </div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 w-full rounded-r bg-transparent text-white border border-[#00f0ff] focus:outline-none"
          />
        </div>

        {/* Confirm Password Field */}
        <div className="flex items-center mb-6">
          <div className="p-3 bg-[#00f0ff] rounded-l">
            <i className="fas fa-lock text-white"></i>
          </div>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="p-3 w-full rounded-r bg-transparent text-white border border-[#00f0ff] focus:outline-none"
          />
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 text-center">{error}</p>}

        {/* Remember Me and Buttons */}
        <div className="flex items-center justify-between mb-6">
          <label className="text-white flex items-center">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <div>
            <button
              onClick={handleSignup}
              className="px-6 py-3 text-white border border-[#00f0ff] rounded hover:bg-[#00f0ff] hover:text-black"
            >
              Sign up
            </button>
          </div>
        </div>

        {/* Already have an account */}
        <div className="text-center text-white">
          <a href="#" className="hover:underline">
            Already have an account? Log in
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
