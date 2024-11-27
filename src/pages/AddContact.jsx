import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const AddContact = () => {
  const initialData = {
    name: "",
    email: "",
    phone: "",
    address: "",
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
    if (formData.phone.length !== 10) {
      toast.error("Invalid phone number.");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/user/add-contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      if (data.success) {
        toast.success(data.message);
        setFormData(initialData);
        navigate("/contacts");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong.");
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      className="h-screen w-full flex items-center justify-center px-5 bg-gradient-to-r from-indigo-100 via-indigo-200 to-indigo-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="border lg:w-1/2 w-full p-8 rounded-lg shadow-lg bg-white flex flex-col gap-6"
        initial={{ y: "-50px" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-green-500 text-center">
          Add New Contact
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Contact Name"
            className="border-2 border-gray-300 rounded-lg p-4 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            autoComplete="off"
          />
          <input
            type="email"
            placeholder="Contact Email"
            className="border-2 border-gray-300 rounded-lg p-4 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="off"
          />
          <input
            type="text"
            placeholder="Contact Phone Number"
            className="border-2 border-gray-300 rounded-lg p-4 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            autoComplete="off"
          />
          <input
            type="text"
            placeholder="Contact Address"
            className="border-2 border-gray-300 rounded-lg p-4 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            autoComplete="off"
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white rounded-xl py-3 text-xl transition duration-300 ease-in-out transform hover:scale-105"
          >
            {loading ? "Loading..." : "Add Contact"}
          </button>
        </form>

        <NavLink
          to="/"
          className="text-lg text-center mt-4 rounded-xl py-3 bg-white  text-blue-500 transform hover:scale-105 transition duration-300 ease-in-out"
        >
          Back to Home
        </NavLink>
      </motion.div>
    </motion.section>
  );
};

export default AddContact;
