
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      
      {/* Logo on the left */}
      <div className="text-2xl font-bold text-blue-600">
        MyLogo
      </div>

      {/* Links on the right */}
      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li>
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-blue-600 transition">About us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
