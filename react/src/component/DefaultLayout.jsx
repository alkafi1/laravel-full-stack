import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UseStateContext } from '../contexts/ContextProvider.jsx'
import Sidebar from './LayOutPartials/Sidebar';
import Header from './LayOutPartials/Header';

function DefaultLayout() {

    const { user, token } = UseStateContext();
    if (!token) {
        return <Navigate to="/login" />
    }

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
