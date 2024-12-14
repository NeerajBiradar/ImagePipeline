import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 shadow-sm">
      <div className="max-w-8xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl sm:text-xl lg:text-2xl text-white font-mono mx-2">
              PixPro
            </Link>
          </div>
    
          <div className="flex space-x-2">
            <Link
              to="/edit"
              className="px-6 py-2 border border-white text-sm sm:text-base md:text-md font-medium rounded-full text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Upload
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
