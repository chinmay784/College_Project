
import React, { useContext } from "react";
import { UserAppContext } from "../context/UserAppContext";
import { useNavigate } from "react-router-dom";
import { FaCog, FaSignOutAlt } from "react-icons/fa";

const Profile = () => {

  const { user, logout } = useContext(UserAppContext);
  const navigate = useNavigate()

  const handleLogout = () => {
    logout();
    navigate("/")
  };

  return (
    // <div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-900 to-gray-700">
    //   {/* Card Container */}
    //   <div className="bg-white p-8 rounded-3xl shadow-2xl w-96 text-center transform transition duration-500 hover:scale-105 shadow-gray-900">

    //     {/* Profile Image */}
    //     <div className="w-24 h-24 mx-auto rounded-full border-4 border-blue-500 shadow-lg overflow-hidden">
    //       <img
    //         className="w-full h-full object-cover"
    //         src={user.profilePic}
    //         alt="Profile"
    //       />
    //     </div>

    //     {/* User Information */}
    //     <h2 className="mt-6 text-2xl font-semibold text-gray-800">
    //       {user.name || "User Name"}
    //     </h2>
    //     <p className="text-gray-500 mt-1 text-sm">{user.email || "user@example.com"}</p>

    //     {/* Logout Button */}
    //     <button
    //       onClick={handleLogout}
    //       className="mt-6 px-6 py-3 bg-gradient-to-r from-red-500 to-red-700 text-white font-medium rounded-full shadow-lg hover:from-red-600 hover:to-red-800 transform hover:scale-110 transition duration-300"
    //     >
    //       Log Out
    //     </button>
    //   </div>
    // </div>



    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg p-4 mt-20">
      {/* User Info */}
      <div className="flex items-center gap-3">
        <img
          src={user.profilePic}
          alt="Profile"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h2 className="text-lg font-semibold">{user.name}</h2>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-4 flex gap-2">
        <button onClick={() => navigate("/profile-setting")} className="flex items-center justify-center gap-2 w-full bg-gray-100 text-gray-700 px-3 py-2 rounded-md hover:bg-gray-200 transition">
          <FaCog />
          Manage account
        </button>
        <button onClick={handleLogout} className="flex items-center justify-center gap-2 w-full bg-gray-100 text-gray-700 px-3 py-2 rounded-md hover:bg-gray-200 transition">
          <FaSignOutAlt />
          Sign out
        </button>
      </div>

      {/* Add Account */}
      {/* <div className="mt-4 text-center">
        <button   className="w-full py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition">
          + Add account
        </button>
      </div> */}

      {/* Footer */}
      <div className="mt-3 text-center text-gray-400 text-sm mb-5">
        Secured by <span className="font-semibold text-gray-500">Nexa Ai</span>
      </div>
    </div>

  );
};

export default Profile;