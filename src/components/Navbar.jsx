import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/slices/authSlice";
import { FaHome, FaAddressBook, FaSignOutAlt } from "react-icons/fa"; // Font Awesome icons

const Navbar = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/api/auth/logout`,
      {
        credentials: "include",
      }
    );
    const data = await res.json();
    if (data.success) {
      toast.success(data.message);
      dispatch(logoutUser());
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50 transition-all duration-300 ease-in-out">
      <div className="container mx-auto flex justify-between items-center p-5">
        {/* Brand Logo or Name */}
        <div className="text-2xl font-semibold text-gray-800 hover:text-blue-600 transition-all duration-300">
          <NavLink to="/">
            <span className="flex items-center">
              Contact <i className="text-blue-600">Manager</i>
            </span>
          </NavLink>
        </div>

        {/* Navigation Links */}
        <nav className="flex gap-6">
          <NavLink
            to="/"
            className="flex items-center text-lg text-gray-700 hover:text-blue-500 transition-all duration-300 transform hover:scale-105"
          >
            <FaHome className="mr-2" /> Home
          </NavLink>
          <NavLink
            to="/contacts"
            className="flex items-center text-lg text-gray-700 hover:text-blue-500 transition-all duration-300 transform hover:scale-105"
          >
            <FaAddressBook className="mr-2" /> Your Contacts
          </NavLink>
        </nav>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="flex items-center px-4 py-2 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
        >
          <FaSignOutAlt className="mr-2" /> Logout
        </button>
      </div>
    </header>
  );
};

export default Navbar;
