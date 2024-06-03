import { useState } from 'react'
import InputField from '../component/smallComponent/InputField';
import PasswordInput from '../component/smallComponent/PasswordInput';
import SocialLoginButtons from '../component/smallComponent/SocialLoginButton';
import SubmitButton from '../component/smallComponent/SubmitButton';
import LoadingSpinner from '../component/smallComponent/LoadingSpinner';
import { logo } from '../constants/Constant';
import { toast, ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import axios from 'axios';
import axiosClient from '../axios-client';

function login() {
    // const { login } = useAuth();
    // const location = useLocation();
    // const successMessage = location.state?.successMessage;

    // useEffect(() => {
    //     if (successMessage) {
    //         toast.success(successMessage);
    //     }
    // }, [successMessage]);
    const [formData, setFormData] = useState({
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
            const response = axiosClient.post('/login', {
                email: formData.email,
                password: formData.password
            });
            toast.success(response.data.message);
            setLoading(false);

            // const user = response.data; // Assuming your API returns user data upon successful login
            // const token = response.data.token; // Assuming your API returns user data upon successful login
            // login(user,token); // Call the login function from the AuthContext with the user data

            // navigate('/');
        } catch (error) {
            console.log("Error:", error);
            if (error.response && error.response.status === 401) {
                toast.error("Invalid email or password");
            } else {
                toast.error("An error occurred while logging in");
            }
            setLoading(false);
        }
    };

    return (
        <div className="bg-gradient-to-br from-purple-700 to-blue-500 h-screen overflow-hidden">
            <div className="flex justify-center items-center h-full">
                <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-md w-96 relative">
                    <div className="flex justify-center items-center mb-4">
                        <img src={logo} alt="Logo" className="w-8 h-8 mr-2" />
                        <h2 className="text-2xl font-semibold">Login</h2>
                    </div>
                    {loading && <LoadingSpinner />}
                    <form onSubmit={handleSubmit}>
                        <InputField label="Email" type="email" name="email" placeholder="Enter your email" onChange={handleChange} />
                        <PasswordInput label="Password" name="password" onChange={handleChange} />
                        <SocialLoginButtons></SocialLoginButtons>
                        <SubmitButton label="Login" />
                        <p>If you are not register, then <Link to="/signup">Signp</Link></p>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default login
