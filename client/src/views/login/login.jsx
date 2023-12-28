import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authState, useAuth } from "../../store/auth/atoms/authState";
import StaySpotterLogo from "../../images/StaySpotterLogo.png";
import Home from "../home/Home";

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
    });

    const [authState, setAuthState] = useAuth();

    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        setAuthState((prev) => ({ ...prev, loading: true, error: null }));
        try {
            const res = await axios.post(
                "http://localhost:8800/api/auth/login",
                credentials
            );
            setAuthState({
                user: res.data,
                loading: false,
                error: null,
            });
            localStorage.setItem("user", JSON.stringify(res.data));
            navigate(-1);
        } catch (err) {
            setAuthState({
                user: null,
                loading: false,
                error: err.response.data,
            });
        }
    };

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <Link to={"/"} element={<Home />}>
                    <div className="absolute top-5 left-10">
                        <img
                            src={StaySpotterLogo}
                            alt="Logo"
                            className="h-20 w-20"
                        />
                    </div>
                </Link>
                <div className="bg-white p-8 rounded shadow-md w-96">
                    <h2 className="text-2xl font-semibold mb-4">Login</h2>
                    <input
                        type="text"
                        placeholder="Username"
                        id="username"
                        onChange={handleChange}
                        className="w-full px-3 py-2 mb-3 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        id="password"
                        onChange={handleChange}
                        className="w-full px-3 py-2 mb-3 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                    />
                    <p> demo-username : demoacc</p>
                    <p> demo-password : demoacc</p>
                    <button
                        disabled={authState.loading}
                        onClick={handleClick}
                        className="w-full mt-2 bg-green-500 text-white py-2 rounded hover:bg-green-600 focus:outline-none"
                    >
                        Login
                    </button>
                    {authState.error && (
                        <span className="text-red-500 mt-2">
                            {authState.error.message}
                        </span>
                    )}
                </div>
            </div>
        </>
    );
};

export default Login;
