import PropsType from "prop-types";

import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { deleteContact, updateContact } from "../redux/slices/contactSlice";
import Swal from "sweetalert2";

const ContactBox = ({ contact }) => {
  const dispatch = useDispatch();
  const [editedContact, setEditedContact] = useState(contact);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(
            `${import.meta.env.VITE_SERVER_URL}/api/user/contacts/delete/${id}`,
            {
              method: "DELETE",
              credentials: "include",
            }
          );
          const data = await res.json();
          if (data.success) {
            dispatch(deleteContact(id));
            toast.success(data.message);
          } else {
            toast.error(data.message);
          }
        } catch (error) {
          toast.error("Something went wrong.");
          console.log(error);
        }
      }
    });
  };

  const handleUpdate = () => {
    Swal.fire({
      title: "Update Contact",
      html: `
        <input id="name" class="swal2-input" placeholder="Name" value="${editedContact.name}">
        <input id="email" class="swal2-input" placeholder="Email" value="${editedContact.email}">
        <input id="phone" class="swal2-input" placeholder="Phone" value="${editedContact.phone}">
        <input id="address" class="swal2-input" placeholder="Address" value="${editedContact.address}">
      `,
      showCancelButton: true,
      confirmButtonText: "Update",
      cancelButtonText: "Cancel",
      focusConfirm: false,
      preConfirm: () => {
        setEditedContact({
          ...editedContact,
          name: document.getElementById("name").value,
          email: document.getElementById("email").value,
          phone: document.getElementById("phone").value,
          address: document.getElementById("address").value,
        });
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(
            `${import.meta.env.VITE_SERVER_URL}/api/user/contacts/update/${
              editedContact._id
            }`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              credentials: "include",
              body: JSON.stringify(editedContact),
            }
          );
          const data = await res.json();
          if (data.success) {
            dispatch(updateContact(editedContact));
            toast.success(data.message);
          } else {
            toast.error(data.message);
          }
        } catch (error) {
          toast.error("Something went wrong.");
          console.log(error);
        }
      }
    });
  };

  return (
    <div className="p-4  transform hover:scale-105 transition-all ease-in-out duration-300 w-full">
      <div className="flex shadow-lg rounded-xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-8 sm:flex-row flex-col cursor-pointer hover:scale-105 hover:shadow-2xl transition-transform duration-300">
        <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-white text-indigo-500 flex-shrink-0 transform hover:rotate-12 transition-transform duration-500">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-10 h-10"
            viewBox="0 0 24 24"
          >
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
            <circle cx={12} cy={7} r={4} />
          </svg>
        </div>
        <div className="flex-grow ">
          <h2 className="text-white text-xl font-semibold mb-3">
            Name: {contact.name}
          </h2>
          <h2 className="text-white text-lg mb-3">Email: {contact.email}</h2>
          <h2 className="text-white text-lg mb-3">
            Phone number: {contact.phone}
          </h2>
          <p className="text-white mb-5">Address: {contact.address}</p>
          <div className="flex gap-6 justify-start">
            <FaTrash
              color="red"
              size={25}
              className="transform hover:scale-110 transition-transform duration-200"
              onClick={() => handleDelete(contact._id)}
            />
            <FaEdit
              color="green"
              size={30}
              className="transform hover:scale-110 transition-transform duration-200"
              onClick={handleUpdate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

ContactBox.propTypes = {
  contact: PropsType.object,
  onDelete: PropsType.func,
  onUpdate: PropsType.func,
};

export default ContactBox;
