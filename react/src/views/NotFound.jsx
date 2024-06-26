import React from 'react'
import { Link } from 'react-router-dom'

function notfound() {
    return (
        <div>
            <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center">
                <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
                <p className="text-xl text-gray-600 mb-8">Page Not Found</p>
                <Link
                    to="/"
                    className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
                >
                    Go Back Home
                </Link>
            </div>
        </div>
    )
}

export default notfound
