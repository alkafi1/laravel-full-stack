import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UseStateContext } from '../contexts/ContextProvider.jsx'
import Sidebar from './LayOutPartials/Sidebar';
import Header from './LayOutPartials/Header';
import axiosClient from '../axios-client.js';

function DefaultLayout() {

    const { user, token, setUser } = UseStateContext();
    if (!token) {
        return <Navigate to="/login" />
    }
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axiosClient.get('/user');
                console.log(response);
                setUser(response.data.user);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };

        fetchUser();
    }, [setUser]);
    return (
        <div className="flex">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex flex-col w-full">
                {/* Header */}
                <Header />
                {/* Main Content */}
                <div className="p-6">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout
