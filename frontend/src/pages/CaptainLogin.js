import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setCaptain } = useContext(CaptainDataContext);
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        const captain = { email, password };
        const response = await axios.post(
            `${import.meta.env.BASE_URL}/captains/login`,
            captain
        );
        if (response.status === 200) {
            const data = response.data;
            setCaptain(data.captain);
            localStorage.setItem("token", data.token);
            navigate("/captain-home");
        }
        setEmail("");
        setPassword("");
    };

    return (
        <div className="h-screen bg-gradient-to-br from-gray-800 to-gray-900 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                <img
                    className="w-24 mx-auto mb-6 rounded-full"
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFzq-OiKDq-RGQ4-8UB3SCxf26gNYBFcv9pw&s'
                    alt="Logo"
                />
                <form onSubmit={submitHandler}>
                    <h2 className="text-xl font-semibold mb-4 text-gray-800 text-center">
                        Captain Login
                    </h2>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="email@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-200"
                    >
                        Login
                    </button>
                </form>
                <p className="text-center text-sm text-gray-600 mt-4">
                    Don’t have an account?{" "}
                    <Link to="/captain-signup" className="text-blue-600 font-medium">
                        Register here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default CaptainLogin;
