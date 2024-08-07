import React from 'react';
import { FaSearch, FaEnvelope, FaBell } from 'react-icons/fa';

function Header() {
  return (
    <div className="bg-gray-800 p-4 flex items-center justify-between">
      <div className="flex items-center bg-gray-700 p-2 rounded">
        <FaSearch className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-700 text-white focus:outline-none"
        />
      </div>
      <div className="flex items-center space-x-4">
        <FaEnvelope size={24} />
        <FaBell size={24} />
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </div>
  );
}

export default Header;
