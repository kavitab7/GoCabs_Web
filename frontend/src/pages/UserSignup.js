import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserDataContext } from '../context/UserContext';

const UserSignup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const navigate = useNavigate();

    const { setUser } = useContext(UserDataContext);

    const submitHandler = async (e) => {
        e.preventDefault();
        const newUser = {
            fullname: {
                firstname: firstName,
                lastname: lastName,
            },
            email: email,
            password: password,
        };

        const response = await axios.post(`${import.meta.env.BASE_URL}/users/register`, newUser);

        if (response.status === 201) {
            const data = response.data;
            setUser(data.user);
            localStorage.setItem('token', data.token);
            navigate('/home');
        }

        setEmail('');
        setFirstName('');
        setLastName('');
        setPassword('');
    };

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col justify-center items-center px-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
                <img
                    className="w-24 mx-auto mb-6 rounded-full"
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFzq-OiKDq-RGQ4-8UB3SCxf26gNYBFcv9pw&s'
                    alt="GoCabs Logo"
                />
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                    Create Your GoCabs Account
                </h2>
                <form onSubmit={submitHandler} className="space-y-4">
                    <div className="flex gap-4">
                        <input
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                            className="bg-gray-100 border rounded-lg w-1/2 p-2 text-gray-700 focus:outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                            className="bg-gray-100 border rounded-lg w-1/2 p-2 text-gray-700 focus:outline-none"
                        />
                    </div>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="bg-gray-100 border rounded-lg w-full p-2 text-gray-700 focus:outline-none"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="bg-gray-100 border rounded-lg w-full p-2 text-gray-700 focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="bg-green-500 text-white rounded-lg w-full py-2 hover:bg-green-600 transition"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="text-sm text-center mt-4">
                    Already have an account?{' '}
                    <Link to="/login" className="text-green-600 hover:underline">
                        Log in
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default UserSignup;
