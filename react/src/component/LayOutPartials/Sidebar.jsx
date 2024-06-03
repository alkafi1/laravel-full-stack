import React, { useState } from 'react'
import { logo } from '../../constants/Constant';
import { NavLink } from 'react-router-dom';

function Sidebar() {
    const [isExpanded, setIsExpanded] = useState(true);

    const toggleSidebar = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`flex flex-col bg-gray-800 ${isExpanded ? 'md:w-64' : 'w-16'} transition-all duration-300 ease-in-out h-screen`}>
            {/* Logo and Toggle Button */}
            <div className="flex items-center justify-between py-4 px-4">
                <div className="flex items-center">
                    {isExpanded ? (
                        <img src={logo} alt="Logo" className="h-8" />
                    ) : (
                        <button
                            onClick={toggleSidebar}
                            className="text-gray-400 focus:outline-none focus:text-gray-500 ml-2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                    )}
                </div>
                <div className="flex items-center">
                    {isExpanded && (
                        <button
                            onClick={toggleSidebar}
                            className="text-gray-400 focus:outline-none focus:text-gray-500 ml-2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                    )}
                </div>
            </div>

            {/* Navigation Links */}
            <nav className={`flex-grow `}>
                <NavLink
                    exact
                    to="/"
                    className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white active:text-white"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                    </svg>
                    <span className={isExpanded ? 'ml-2' : 'hidden'}>Dashboard</span>
                </NavLink>
                <NavLink
                    exact="true"
                    to="/category"
                    className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                    </svg>
                    <span className={isExpanded ? 'ml-2' : 'hidden'}>Category</span>
                </NavLink>
                {/* Add more navigation links */}
            </nav>
        </div>
    );
}

export default Sidebar
