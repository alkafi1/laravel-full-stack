import React, { useState } from 'react'
import LoadingSpinner from '../component/smallComponent/LoadingSpinner';
import InputField from '../component/smallComponent/InputField';
import PasswordInput from '../component/smallComponent/PasswordInput';
import SocialLoginButtons from '../component/smallComponent/SocialLoginButton';
import SubmitButton from '../component/smallComponent/SubmitButton';
import { logo } from '../constants/Constant';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

function signup() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [loading, setLoading] = useState(false);
    // const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/register', {
                name: formData.username,
                email: formData.email,
                password: formData.password
            });
            toast.success(response.data.message); // show success toast
            setLoading(false);
            setFormData({
                username: '',
                email: '',
                password: ''
            });
            // navigate('/login', { state: { successMessage: response.data.message } }); // Pass success message as state
        } catch (error) {
            console.log("Error:", error); // Log the error object to the console
            if (error.response && error.response.status === 422) {
                // Handle validation errors returned by the API
                const errors = error.response.data.errors;
                const validationErrors = {};
                for (const key in errors) {
                    toast.error(errors[key][0]);
                }
                console.log("Validation Errors:", validationErrors); // Log validation errors to the console
            } else {
                toast.error("An error occurred while registering the user");
            }
            setLoading(false);
        }
    };

    return (
        <div className="bg-gradient-to-br from-purple-700 to-blue-500 h-screen overflow-hidden">
            <div className="flex justify-center items-center h-full">
                <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-md w-96">
                    <div className="flex justify-center items-center mb-4">
                        <img src={logo} alt="Logo" className="w-8 h-8 mr-2" />
                        <h2 className="text-2xl font-semibold">Sign Up</h2>
                    </div>
                    {loading && <LoadingSpinner />}
                    <form onSubmit={handleSubmit}>

                        <InputField label="Username" type="text" name="username" placeholder="Enter your username" onChange={handleChange} />
                        <InputField label="Email" type="email" name="email" placeholder="Enter your email" onChange={handleChange} />

                        <PasswordInput label="Password" name="password" value={formData.password} onChange={handleChange} />
                        <SocialLoginButtons></SocialLoginButtons>
                        <SubmitButton label="Sign Up" />
                        <p>If you are already register, then <Link to="/login">Login</Link></p>
                        
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default signup
