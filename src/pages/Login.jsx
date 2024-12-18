/* import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import { useDispatch } from "react-redux"

const Login = () => {
    const initialData = {
        email: "",
        password: "",
    }
    const [formData, setFormData] = useState(initialData)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })

    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("Form Data:", formData);
        console.log("Server URL:", import.meta.env.VITE_SERVER_URL);

        if (formData.password.length < 6) {
            toast.error("Password should be at least 6 characters long.");
            return;
        }

        try {
            setLoading(true);
            const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: 'include',
                body: JSON.stringify(formData)
            });

            console.log("Response Status:", res.status);
            console.log("Response Headers:", res.headers);

            const data = await res.json();
            console.log("Response Data:", data);

            if (data.success) {
                toast.success(data.message);
                setFormData(initialData);
                navigate("/");
            } else {
                toast.error(data.message);
            }

        } catch (error) {
            toast.error("Something went wrong.");
            console.error("Error:", error.message);
        } finally {
            setLoading(false);
        }
    };


    return (
        <section id='login' className='h-screen w-full flex items-center justify-center  px-5'>
            <div className='border lg:w-1/3 md:w-1/2 w-full p-5 rounded shadow bg-white flex flex-col gap-5'>
                <h2 className='text-3xl font-bold text-green-500'>Login to your account</h2>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

                    <input type="email" placeholder='Your email' className='border rounded p-2 text-lg' name='email' value={formData.email} onChange={handleChange} required autoComplete='off' />
                    <input type="password" placeholder='Your password' className='border rounded p-2 text-lg' name='password' value={formData.password} onChange={handleChange} required autoComplete='off' />
                    <button type='submit' className='bg-green-500 hover:bg-green-600 text-white rounded text-xl p-2'>{loading ? 'Loading...' : 'Login'}</button>
                </form>
                <p className='text-lg'>Don't have an account ? <Link to={"/register"} className='text-blue-500 underline'>Register here</Link> </p>
            </div>
        </section>
    )
}

export default Login */

/* import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
  const initialData = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password.length < 6) {
      toast.error("Password should be at least 6 characters long.");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/auth/login`,
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
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="login"
      className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-green-400 to-blue-500 relative overflow-hidden"
    >
     
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url(https://source.unsplash.com/1920x1080/?nature)",
        }}
      ></div>

    
      <div className="relative border lg:w-1/3 md:w-1/2 w-full p-8 rounded-xl shadow-lg bg-white/90 backdrop-blur-lg flex flex-col gap-6 transform hover:scale-105 transition duration-300">
     
        <div className="flex justify-center">
          <img
            src="https://img.icons8.com/?size=100&id=BQlLHKSAC1Yu&format=png&color=000000"
            alt="Logo"
            className="w-16 h-16 object-contain"
          />
        </div>
        <div className="flex justify-center text-center">
          <h1>
            Welcome to <br />
            <span className="text-3xl font-extrabold text-green-600 text-center">
              Contact Manager
            </span>
          </h1>
        </div>

      
        <h2 className="text-3xl font-bold text-green-500 text-center">
          Login to your account
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      
          <div className="flex items-center border rounded-md p-2 bg-gray-50 shadow-sm">
            <FaEnvelope className="text-gray-500 mr-2" />
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 text-lg bg-transparent outline-none"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>

          <div className="flex items-center border rounded-md p-2 bg-gray-50 shadow-sm">
            <FaLock className="text-gray-500 mr-2" />
            <input
              type="password"
              placeholder="Your password"
              className="flex-1 text-lg bg-transparent outline-none"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>

         
          <button
            type="submit"
            className={`${
              loading ? "bg-gray-400" : "bg-green-500 hover:bg-green-600"
            } text-white font-bold rounded-md text-lg py-2 transition duration-200`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

       
        <p className="text-center text-lg">
          Don&#39;t have an account?{" "}
          <Link
            to="/register"
            className="text-blue-500 underline hover:text-blue-600"
          >
            Register here
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
 */

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
  const initialData = {
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

    if (formData.password.length < 6) {
      toast.error("Password should be at least 6 characters long.");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/auth/login`,
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
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="login"
      className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-green-400 to-blue-500 relative overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url(https://source.unsplash.com/1920x1080/?nature)",
        }}
      ></div>

      {/* Login card */}
      <div className="relative border lg:w-1/3 md:w-1/2 w-full p-8 rounded-xl shadow-lg bg-white/90 backdrop-blur-lg flex flex-col gap-6 transform hover:scale-105 transition duration-300">
        {/* Logo */}
        <div className="flex justify-center">
          <img
            src="https://img.icons8.com/?size=100&id=BQlLHKSAC1Yu&format=png&color=000000"
            alt="Logo"
            className="w-16 h-16 object-contain"
          />
        </div>
        <div className="flex justify-center text-center">
          <h1>
            Welcome to <br />
            <span className="text-3xl font-extrabold text-green-600 text-center">
              Contact Manager
            </span>
          </h1>
        </div>

        {/* Login form */}
        <h2 className="text-3xl font-bold text-green-500 text-center">
          Login to your account
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Email input */}
          <div className="flex items-center border rounded-md p-2 bg-gray-50 shadow-sm">
            <FaEnvelope className="text-gray-500 mr-2" />
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 text-lg bg-transparent outline-none"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>

          {/* Password input */}
          <div className="flex items-center border rounded-md p-2 bg-gray-50 shadow-sm">
            <FaLock className="text-gray-500 mr-2" />
            <input
              type="password"
              placeholder="Your password"
              className="flex-1 text-lg bg-transparent outline-none"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>

          {/* Login button */}
          <button
            type="submit"
            className={`${
              loading ? "bg-gray-400" : "bg-green-500 hover:bg-green-600"
            } text-white font-bold rounded-md text-lg py-2 transition duration-200`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Register link */}
        <p className="text-center text-lg">
          Don&#39;t have an account?{" "}
          <Link
            to="/register"
            className="text-blue-500 underline hover:text-blue-600"
          >
            Register here
          </Link>
        </p>

        <p className="text-center text-lg">
          <Link to="/" className="text-blue-500 underline hover:text-blue-600">
            Back to Home
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
