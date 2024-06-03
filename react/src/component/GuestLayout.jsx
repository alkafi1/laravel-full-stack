import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UseStateContext } from '../contexts/ContextProvider';

function GuestLayout() {
    const {user,token} = UseStateContext();
    if(token){
        return <Navigate to="/"/>
    }

    return (
        <div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default GuestLayout
