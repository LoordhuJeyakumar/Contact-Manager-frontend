import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa"; // Icons for fields

const Register = () => {
  const initialData = {
    name: "",
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialData);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.name.length < 3) {
      toast.error("Name should be at least 3 characters long.");
      return;
    }
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (formData.password.length < 6) {
      toast.error("Password should be at least 6 characters long.");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      if (data.success) {
        toast.success(data.message);
        setFormData(initialData);
        navigate("/login");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="register"
      className="h-screen w-full flex items-center justify-center px-5 bg-gradient-to-r from-blue-500 via-green-400 to-blue-500"
    >
      <div className="lg:w-1/2 w-full p-10 rounded-lg shadow-lg bg-white bg-opacity-80 backdrop-blur-md">
        {/* Logo */}
        <div className="flex justify-center">
          <img
            src="https://img.icons8.com/?size=100&id=BQlLHKSAC1Yu&format=png&color=000000"
            alt="Logo"
            className="w-16 h-16 object-contain"
          />
        </div>
        <div>
          <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-4">
            Welcome to <br />
            <span className="text-4xl font-extrabold text-green-600 text-center">
              Contact Manager
            </span>
          </h1>
          <p className="text-lg text-center text-gray-600">
            Register to get access to your contacts.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex items-center gap-3 border p-2 rounded-xl transition-all duration-300 hover:shadow-lg focus-within:shadow-lg">
            <FaUser className="text-gray-500" />
            <input
              type="text"
              placeholder="Your name"
              className="border-none outline-none flex-1 p-2 text-lg"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>
          <div className="flex items-center gap-3 border p-2 rounded-xl transition-all duration-300 hover:shadow-lg focus-within:shadow-lg">
            <FaEnvelope className="text-gray-500" />
            <input
              type="email"
              placeholder="Your email"
              className="border-none outline-none flex-1 p-2 text-lg"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>
          <div className="flex items-center gap-3 border p-2 rounded-xl transition-all duration-300 hover:shadow-lg focus-within:shadow-lg">
            <FaLock className="text-gray-500" />
            <input
              type="password"
              placeholder="Your password"
              className="border-none outline-none flex-1 p-2 text-lg"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white rounded-xl py-2 text-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Loading..." : "Register"}
          </button>
        </form>
        <p className="text-lg text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 font-semibold underline">
            Login Here
          </Link>
        </p>

        <p className="text-lg text-center mt-4">
          <Link to="/" className="text-blue-500 font-semibold underline">
            Back to Home
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
