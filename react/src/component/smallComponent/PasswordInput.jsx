// PasswordInput.js
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const PasswordInput = ({ label, name, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-gray-700 font-semibold mb-2 text-left">{label}</label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 pr-10"
          placeholder={`Enter your ${label.toLowerCase()}`}
        />
        <button type="button" onClick={togglePasswordVisibility} className="absolute inset-y-0 right-0 flex items-center px-3 bg-transparent">
          {showPassword ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
