import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { FiBell, FiMessageCircle } from 'react-icons/fi';
import { logo } from '../../constants/Constant';
import { UseStateContext } from '../../contexts/ContextProvider';

function Header() {
    
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isMessageOpen, setIsMessageOpen] = useState(false);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const {user,token}= UseStateContext();
    // const { logout } = useAuth();

    const toggleProfile = () => {
        setIsProfileOpen(!isProfileOpen);
        setIsMessageOpen(false);
        setIsNotificationOpen(false);
    };

    const toggleMessage = () => {
        setIsMessageOpen(!isMessageOpen);
        setIsProfileOpen(false);
        setIsNotificationOpen(false);
    };

    const toggleNotification = () => {
        setIsNotificationOpen(!isNotificationOpen);
        setIsProfileOpen(false);
        setIsMessageOpen(false);
    };
    // const handleLogout = () => {
    //     logout(); // Call the logout function to clear user authentication
    //     navigate('/login'); // Redirect to the login page after logout
    // };
    return (
        <header className="bg-white shadow h-12">
            <div className="container mx-auto px-4 flex items-center justify-end h-full">
                {/* Notification Icon */}
                <div className="relative ml-4">
                    <button
                        onClick={toggleNotification}
                        className="text-gray-800 hover:text-gray-500 flex items-center relative"
                    >
                        <FiBell className="h-6 w-6" />
                        {/* Notification Dropdown */}
                        {isNotificationOpen && (
                            <div className="absolute right-0 -bottom-[61px] mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
                                <div className="py-1">
                                    <NavLink
                                        to="/notifications"
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                                        onClick={() => setIsNotificationOpen(false)}
                                    >
                                        Notifications
                                    </NavLink>
                                </div>
                            </div>
                        )}
                    </button>
                </div>
                {/* Message Icon */}
                <div className="relative ml-4">
                    <button
                        onClick={toggleMessage}
                        className="text-gray-800 hover:text-gray-500 flex items-center relative"
                    >
                        <FiMessageCircle className="h-6 w-6" />
                        {/* Message Dropdown */}
                        {isMessageOpen && (
                            <div className="absolute right-0 -bottom-[61px] mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
                                <div className="py-1">
                                    <NavLink
                                        to="/messages"
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                                        onClick={() => setIsMessageOpen(false)}
                                    >
                                        Messages
                                    </NavLink>
                                </div>
                            </div>
                        )}
                    </button>
                </div>
                {/* Profile Image */}
                <div className="relative ml-4">
                    <button
                        className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out"
                        onClick={toggleProfile}
                    >
                        <img className="h-8 w-8 rounded-full" src={logo} alt="Your profile" />
                    </button>
                    {/* Profile Dropdown */}
                    {isProfileOpen && (
                        <div className="absolute right-0  mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
                            <div className="py-1">
                                <NavLink
                                    to="/profile"
                                    exact
                                    className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                                    onClick={() => setIsProfileOpen(false)}
                                >
                                    Profile <span>{user.name}</span>
                                </NavLink>
                                <hr className="my-1 border-gray-200" />
                                <NavLink
                                    className="block px-4 py-2 text-gray-800 hover:bg-gray-300"
                                >
                                    Logout
                                </NavLink>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header
