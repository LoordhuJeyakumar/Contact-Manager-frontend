import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { setUser } from "../redux/slices/authSlice";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { MdAdd } from "react-icons/md";
import ContactBox from "../components/ContactBox";
import { setContacts } from "../redux/slices/contactSlice";

const pageVariants = {
  initial: { opacity: 0, x: -100 },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: 100 },
};

const sectionVariants = {
  initial: { opacity: 0, scale: 0.8 },
  in: { opacity: 1, scale: 1 },
  out: { opacity: 0, scale: 0.8 },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

const sectionTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

const Home = () => {
  const user = useSelector((state) => state.auth.user);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.value);

  const getUserFromServer = useCallback(async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/auth/user`,
        {
          credentials: "include",
        }
      );
      const data = await res.json();
      if (data.success) {
        dispatch(setUser(data.user));
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }, [dispatch]); // Add dispatch as a dependency

  useEffect(() => {
    getUserFromServer();
  }, [getUserFromServer]); // Now safe to include it here

  useEffect(() => {
    const getUserContacts = async () => {
      const res = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/user/contacts`,
        {
          credentials: "include",
        }
      );
      const data = await res.json();
      if (data.success) {
        dispatch(setContacts(data.contacts));
      }
      setLoading(false);
    };
    if (user) {
      getUserContacts();
    }
  }, [user, dispatch]);

  if (loading) {
    return (
      <motion.div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-green-500"></div>
      </motion.div>
    );
  }

  if (!user) {
    return (
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        {/* Hero Section */}
        <motion.section
          className=" h-screen relative w-full flex flex-col items-center justify-center text-center p-6 gap-10 bg-gradient-to-br from-blue-50 via-white to-gray-100 overflow-hidden"
          variants={sectionVariants}
          transition={sectionTransition}
          initial="initial"
          animate="in"
          exit="out"
        >
          {/* Background Effects */}
          <div className="absolute inset-0 z-0">
            <div className="bg-blue-300 rounded-full w-96 h-96 blur-3xl absolute top-10 left-20 animate-pulse"></div>
            <div className="bg-green-300 rounded-full w-72 h-72 blur-2xl absolute bottom-20 right-10 animate-pulse"></div>
          </div>

          {/* Main Heading */}
          <h1 className="relative z-10 text-4xl font-extrabold text-gray-800 tracking-tight animate-fadeInUp">
            Welcome to <span className="text-blue-500">Contact Manager</span>!
          </h1>
          <p className="relative z-10 text-lg lg:text-xl text-gray-700 max-w-3xl leading-relaxed animate-fadeInUp delay-100">
            Manage your contacts effortlessly with our app. Add, update, and
            delete your contacts securely and efficiently. Stay organized and
            keep your contact information accessible anytime, anywhere.
          </p>

          {/* Buttons */}
          <div className="relative z-10 flex flex-col md:flex-row gap-6 animate-fadeInUp delay-200">
            <NavLink
              to="/login"
              className="flex items-center justify-center gap-2 bg-blue-500 text-white px-8 py-3 text-lg rounded-lg shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105 duration-300"
            >
              <i className="fas fa-sign-in-alt text-xl"></i> Log In
            </NavLink>
            <NavLink
              to="/register"
              className="flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-3 text-lg rounded-lg shadow-lg hover:bg-green-600 transition-transform transform hover:scale-105 duration-300"
            >
              <i className="fas fa-user-plus text-xl"></i> Sign Up
            </NavLink>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          className="relative bg-gray-50 py-16"
          initial="initial"
          animate="in"
          exit="out"
          variants={sectionVariants}
          transition={sectionTransition}
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 animate-slideInUp">
            Why Choose <span className="text-green-500">Contact Manager?</span>
          </h2>
          <ul className="flex flex-col md:flex-row justify-center items-center gap-8 flex-wrap">
            <li className="flex items-center space-x-4">
              <img
                src="https://img.icons8.com/?size=100&id=XlwiuUqyoMho&format=png"
                alt="Easy Interface"
                className="w-12 h-12"
              />
              <span>
                Intuitive and user-friendly interface for seamless contact
                management.
              </span>
            </li>
            <li className="flex items-center space-x-4">
              <img
                src="https://img.icons8.com/fluency/48/000000/security-checked.png"
                alt="Secure"
                className="w-12 h-12"
              />
              <span>
                {" "}
                Advanced security measures to protect your personal data.
              </span>
            </li>
            <li className="flex items-center space-x-4">
              <img
                src="https://img.icons8.com/?size=100&id=A4Ex3d4V9VuC&format=png"
                alt="Sync"
                className="w-12 h-12"
              />
              <span>
                Cloud synchronization for accessing contacts on any device.
              </span>
            </li>

            <li className="flex items-start space-x-4">
              <img
                src="https://img.icons8.com/?size=100&id=Wy3XKG1CjyKf&format=png&color=000000"
                alt="Organize Contacts"
                className="w-12 h-12"
              />
              <span className="text-lg leading-relaxed">
                Effortlessly organize contacts with tags and categories.
              </span>
            </li>
            <li className="flex items-start space-x-4">
              <img
                src="https://img.icons8.com/color/48/000000/customer-support.png"
                alt="Customer Support"
                className="w-12 h-12"
              />
              <span className="text-lg leading-relaxed">
                Dedicated support team for prompt issue resolution.
              </span>
            </li>
          </ul>
        </motion.section>

        {/* New Sections */}
        {/* Testimonials */}
        <motion.section
          initial="initial"
          animate="in"
          exit="out"
          variants={sectionVariants}
          transition={sectionTransition}
          className="bg-gray-50 py-16 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            What Our Users Say
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="max-w-sm bg-white shadow-lg rounded-lg p-6">
              <p className="italic text-gray-600">
                &quot;Contact Manager helped me stay organized. The interface is
                so intuitive!&quot;
              </p>
              <h4 className="text-lg font-bold mt-4">- Alex M.</h4>
            </div>
            <div className="max-w-sm bg-white shadow-lg rounded-lg p-6">
              <p className="italic text-gray-600">
                &quot;I love the cloud sync feature. It&#39;s seamless and
                reliable!&quot;
              </p>
              <h4 className="text-lg font-bold mt-4">- Sarah K.</h4>
            </div>
            <div className="max-w-sm bg-white shadow-lg rounded-lg p-6">
              <p className="italic text-gray-600">
                &quot;Excellent customer support. Quick and helpful
                responses.&quot;
              </p>
              <h4 className="text-lg font-bold mt-4">- John D.</h4>
            </div>
          </div>
        </motion.section>

        {/* Pricing Plans */}
        <section className="bg-white py-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Choose Your Plan
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="max-w-sm bg-gray-50 shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-500">Free</h3>
              <p className="text-gray-600 mt-4">For personal use</p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li>✓ Add up to 50 contacts</li>
                <li>✓ Basic features</li>
                <li>✓ Email support</li>
              </ul>
              <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg">
                Get Started
              </button>
            </div>
            <div className="max-w-sm bg-gray-50 shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold text-green-500">Pro</h3>
              <p className="text-gray-600 mt-4">For advanced users</p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li>✓ Unlimited contacts</li>
                <li>✓ Advanced analytics</li>
                <li>✓ Priority support</li>
              </ul>
              <button className="mt-6 bg-green-500 text-white px-4 py-2 rounded-lg">
                Upgrade Now
              </button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-100 py-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-gray-700">
                Is Contact Manager free to use?
              </h4>
              <p className="text-gray-600 mt-2">
                Yes, we offer a free plan with basic features for personal use.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-700">
                How secure is my data?
              </h4>
              <p className="text-gray-600 mt-2">
                Your data is encrypted and stored securely with industry
                standards.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-700">
                Can I upgrade my plan later?
              </h4>
              <p className="text-gray-600 mt-2">
                Absolutely! You can switch to the Pro plan anytime.
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Navbar />
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0, y: -50 }}
        className="h-screen w-full text-center flex flex-col items-center justify-center gap-5 bg-gradient-to-br from-blue-50 via-white to-gray-100"
      >
        <h2 className="text-4xl font-bold animate-fadeInUp">
          Welcome back, {user.name}!
        </h2>
        <p className="text-lg lg:text-xl text-gray-600 animate-fadeInUp delay-100">
          Manage Your Contacts in a very easy way. All your information is
          secure and synced across all devices.
        </p>
        <p className="text-lg lg:text-xl text-gray-600 animate-fadeInUp delay-200">
          Get started by adding your first contact.
        </p>
        <NavLink
          to="/add"
          className="text-lg bg-green-500 text-white px-4 py-2 font-medium rounded-lg shadow-md hover:bg-green-600 transition-all duration-300 flex items-center animate-bounce delay-200"
        >
          <MdAdd className="mr-2" /> Add Contact
        </NavLink>
      </motion.section>

      {/* Your Contacts Section */}
      <motion.section
        className="py-16 bg-gray-50"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0, y: -50 }}
      >
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-8 animate-slideInUp">
          Your Recent Contacts
        </h3>
        <div className="flex flex-wrap justify-center">
          {contacts.map((contact) => (
            <motion.div
              className="w-full md:w-1/2 lg:w-1/3 p-4"
              key={contact._id}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 0, y: -50 }}
            >
              <ContactBox key={contact._id} contact={contact} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Recent Activities Section */}
      <section className="py-16 bg-gray-100">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-8 animate-slideInUp">
          Recent Activities
        </h3>
        <div className=" flex flex-wrap justify-center">
          {contacts.map((contact) => (
            <motion.div
              className="w-full md:w-1/2 lg:w-1/3 p-4"
              key={contact._id}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 0, y: -50 }}
            >
              <ContactBox key={contact._id} contact={contact} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-white">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-8 animate-fadeInUp">
          Tips for Managing Contacts
        </h3>
        <div className="max-w-4xl mx-auto text-gray-600">
          <div className="space-y-6 flex flex-col w-full">
            <div className="flex items-center space-x-4">
              <div className="bg-green-500 text-white p-3 rounded-full">
                <i className="fas fa-sync"></i>
              </div>
              <div>
                <h4 className="text-xl font-semibold">
                  Sync Across All Devices
                </h4>
                <p>
                  Ensure your contacts are synced across your devices for quick
                  access anywhere.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-blue-500 text-white p-3 rounded-full">
                <i className="fas fa-lock"></i>
              </div>
              <div>
                <h4 className="text-xl font-semibold">Secure Your Data</h4>
                <p>
                  Enable two-factor authentication to add an extra layer of
                  security to your account.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-yellow-500 text-white p-3 rounded-full">
                <i className="fas fa-question"></i>
              </div>
              <div>
                <h4 className="text-xl font-semibold">Need Help?</h4>
                <p>
                  Get in touch with our support team for any questions or
                  concerns.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-red-500 text-white p-3 rounded-full">
                <i className="fas fa-trash"></i>
              </div>
              <div>
                <h4 className="text-xl font-semibold">Delete Contacts</h4>
                <p>
                  If you need to delete a contact, you can do so from the
                  dashboard.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-green-500 text-white p-3 rounded-full">
                <i className="fas fa-sync"></i>
              </div>
              <div>
                <h4 className="text-xl font-semibold">
                  Sync Across All Devices
                </h4>
                <p>
                  Ensure your contacts are synced across your devices for quick
                  access anywhere.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-blue-500 text-white p-3 rounded-full">
                <i className="fas fa-lock"></i>
              </div>
              <div>
                <h4 className="text-xl font-semibold">Secure Your Data</h4>
                <p>
                  Enable two-factor authentication to add an extra layer of
                  security to your account.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default Home;
