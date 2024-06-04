import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UseStateContext } from '../contexts/ContextProvider';

function Dashboard() {
    const { user, token } = UseStateContext();
    const location = useLocation();
    const successMessage = location.state?.successMessage;
    useEffect(() => {
        if (successMessage) {
            toast.success(successMessage);
        }
    }, [successMessage]);
    // const [formData, setFormData] = useState({
    //     email: '',
    //     password: '',
    // });

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h1 className="text-3xl font-bold mb-4">Welcome, {user.name}!</h1>
                <p className="text-gray-700">We're glad to have you here.</p>
                <button
                    className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                    onClick={() => toast.success('Welcome to our application!')}
                >
                    Show Welcome Toast
                </button>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Dashboard
