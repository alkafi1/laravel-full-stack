// SocialLoginButtons.js
import React from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLoginButtons = () => (
  <div className="flex justify-between mb-4">
    <button type="button" className="flex items-center justify-center w-1/3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold px-4 py-2 rounded-full hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-800 transition duration-200 mr-2">
      <FaFacebook />
    </button>
    <button type="button" className="flex items-center justify-center w-1/3 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-semibold px-4 py-2 rounded-full hover:bg-gradient-to-r hover:from-gray-900 hover:to-black transition duration-200 mr-2">
      <FaGithub />
    </button>
    <button type="button" className="flex items-center justify-center w-1/3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold px-4 py-2 rounded-full hover:bg-gradient-to-r hover:from-red-700 hover:to-red-800 transition duration-200 mr-2">
      <FaGoogle />
    </button>
  </div>
);

export default SocialLoginButtons;