import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "./views/login.jsx";
import Signup from "./views/signup.jsx";
import User from "./views/user.jsx";
import NotFound from "./views/NotFound.jsx";
import DefaultLayout from "./component/DefaultLayout.jsx";
import GuestLayout from "./component/GuestLayout.jsx";
import Dashboard from "./views/Dashborad.jsx";

const router = createBrowserRouter([
    {
        path: "*",
        element: <NotFound />
    },
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Navigate to="/dashboard" />
            },
            {
                path: "/dashboard",
                element: <Dashboard />
            },
            {
                path: "/user",
                element: <User />
            },
        ]
    },
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signup",
                element: <Signup />
            },
        ]
    },


])

export default router;