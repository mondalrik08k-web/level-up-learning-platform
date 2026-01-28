import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 shadow-md"> {/* Changed the background color to blue-600 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo or Brand */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-semibold text-white"> {/* Changed the text color to white */}
              LEVEL UP
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-yellow-300"> {/* Changed the text color to white and hover color to yellow-300 */}
              Home
            </Link>
            <Link to="/games" className="text-white hover:text-yellow-300">
              Games
            </Link>
            <Link to="/rewards" className="text-white hover:text-yellow-300">
              Rewards
            </Link>
            <Link to="/analysis" className="text-white hover:text-yellow-300">
              Analysis
            </Link>
            <Link to="/leaderboard" className="text-white hover:text-yellow-300">
              Leaderboard
            </Link>
            <Link to="/signup" className="text-white hover:text-yellow-300">
              Signup
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-yellow-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300"
            >
              {isOpen ? <span className="block">✕</span> : <span className="block">☰</span>}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-blue-600"> {/* Added background color to match the navbar */}
          <Link to="/" className="block text-white hover:text-yellow-300 px-3 py-2 rounded-md">
            Home
          </Link>
          <Link to="/games" className="block text-white hover:text-yellow-300 px-3 py-2 rounded-md">
            Games
          </Link>
          <Link to="/rewards" className="block text-white hover:text-yellow-300 px-3 py-2 rounded-md">
            Rewards
          </Link>
          <Link to="/analysis" className="block text-white hover:text-yellow-300 px-3 py-2 rounded-md">
            Analysis
          </Link>
          <Link to="/leaderboard" className="block text-white hover:text-yellow-300 px-3 py-2 rounded-md">
            Leaderboard
          </Link>
          <Link to="/signup" className="block text-white hover:text-yellow-300 px-3 py-2 rounded-md">
            Signup
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
