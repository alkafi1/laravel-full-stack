// SubmitButton.js
import React from 'react';

const SubmitButton = ({ label }) => (
  <button type="submit" className="w-full bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200 mr-2">{label}</button>
);

export default SubmitButton;