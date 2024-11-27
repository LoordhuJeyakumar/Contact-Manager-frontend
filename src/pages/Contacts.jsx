/* import React, { useEffect, useState } from 'react'
import ContactBox from '../components/ContactBox'
import { NavLink } from 'react-router-dom'
import {useSelector,useDispatch} from "react-redux"
import { setContacts } from '../redux/slices/contactSlice'

const Contacts = () => {
    const contacts = useSelector(state=>state.contacts.value)
    const dispatch = useDispatch()
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        const getUserContacts = async() =>{
            const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/user/contacts`,{
                credentials:'include'
            })
            const data = await res.json()
            if(data.success){
               dispatch(setContacts(data.contacts))
            }
            setLoading(false)
        }

        getUserContacts()
    },[])

    if(loading){
        return <p>Loading...</p>
    }
    
  return (
    <section className='py-12'>
      <div className='container mx-auto flex justify-between items-center border-b pb-2 px-5 mb-10 lg:text-xl text-lg'>
      <h2 className=' text-center font-bold'>Your Contacts</h2>
        <NavLink to={"/"} className="bg-indigo-500 px-2 py-1 rounded text-white">Home</NavLink>
        
      </div>
     {
      contacts.length == 0 ? <p className='text-center text-3xl'>No contact found.</p> :  <div className="container mx-auto flex flex-wrap">
      <div className="flex flex-wrap w-full">

        {
          contacts.map((contact)=>{
              return <ContactBox key={contact._id} contact={contact}/>
          })
        }
      </div>
    </div>
     }
    </section>
  )
}

export default Contacts */
/* 
import  { useEffect, useState } from "react";
import ContactBox from "../components/ContactBox";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setContacts } from "../redux/slices/contactSlice";
import { motion } from "framer-motion";

const Contacts = () => {
  const contacts = useSelector((state) => state.contacts.value);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

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

    getUserContacts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-16 h-16 border-t-4 border-indigo-500 border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <section className="py-12">
      <div className="container mx-auto flex justify-between items-center border-b pb-2 px-5 mb-10 lg:text-xl text-lg">
        <h2 className="text-center font-bold text-indigo-600">Your Contacts</h2>
        <NavLink
          to={"/"}
          className="bg-indigo-500 px-4 py-2 rounded text-white hover:bg-indigo-600 transition duration-300"
        >
          Home
        </NavLink>
      </div>

      {contacts.length === 0 ? (
        <p className="text-center text-3xl text-gray-500">No contact found.</p>
      ) : (
        <div className="container mx-auto flex flex-wrap justify-center gap-6">
          {contacts.map((contact) => (
            <motion.div
              key={contact._id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4"
            >
              <ContactBox contact={contact} />
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Contacts;
 */

import { useEffect, useState } from "react";
import ContactBox from "../components/ContactBox";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setContacts } from "../redux/slices/contactSlice";
import { motion } from "framer-motion";
import { AiOutlinePlusCircle } from "react-icons/ai";

const Contacts = () => {
  const contacts = useSelector((state) => state.contacts.value);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

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

    getUserContacts();
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-16 h-16 border-t-4 border-indigo-500 border-solid rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <section className="py-12">
      <div className="container mx-auto flex justify-between items-center border-b pb-2 px-5 mb-10 lg:text-xl text-lg">
        <NavLink
          to={"/"}
          className="bg-indigo-500 px-4 py-2 rounded text-white hover:bg-indigo-600 transition duration-300"
        >
          Home
        </NavLink>
        <NavLink
          to="/add"
          className="bg-indigo-500 text-white px-4 py-2 rounded flex items-center hover:bg-indigo-600 transition duration-300"
        >
          Add Contact <AiOutlinePlusCircle className="ml-2" />
        </NavLink>
      </div>

      {contacts.length === 0 ? (
        <div className="container mx-auto flex justify-center gap-6">
          <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 bg-white rounded-lg shadow-lg p-6 transition-all transform hover:scale-105">
            <h2 className="text-2xl font-bold mb-4 text-indigo-600">
              No contacts found
            </h2>
            <p className="text-gray-600 mb-4">
              You don’t have any contacts yet. Add a new contact to get started.
            </p>
            <NavLink
              to="/add"
              className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition duration-300 flex items-center justify-center"
            >
              Add Contact <AiOutlinePlusCircle className="ml-2" />
            </NavLink>
          </div>
        </div>
      ) : (
        <div>
          <div className="container mx-auto pb-2 px-5 mb-10">
            <h2 className="text-center font-bold text-indigo-600 text-3xl">
              Your Contacts
            </h2>
          </div>
          <div className="container mx-auto flex flex-wrap justify-center gap-6">
            {contacts.map((contact) => (
              <motion.div
                key={contact._id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md"
              >
                <ContactBox contact={contact} />
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Contacts;
