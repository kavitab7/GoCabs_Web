import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainSignup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [vehicleColor, setVehicleColor] = useState("");
    const [vehiclePlate, setVehiclePlate] = useState("");
    const [vehicleCapacity, setVehicleCapacity] = useState("");
    const [vehicleType, setVehicleType] = useState("");
    const { setCaptain } = React.useContext(CaptainDataContext);
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        const captainData = {
            fullname: { firstname: firstName, lastname: lastName },
            email,
            password,
            vehicle: { color: vehicleColor, plate: vehiclePlate, capacity: vehicleCapacity, vehicleType },
        };
        const response = await axios.post(
            `${import.meta.env.BASE_URL}/captains/register`,
            captainData
        );
        if (response.status === 201) {
            const data = response.data;
            setCaptain(data.captain);
            localStorage.setItem("token", data.token);
            navigate("/captain-home");
        }
        setEmail("");
        setPassword("");
        setFirstName("");
        setLastName("");
        setVehicleColor("");
        setVehiclePlate("");
        setVehicleCapacity("");
        setVehicleType("");
    };

    return (
        <div className="h-screen bg-gradient-to-br from-gray-800 to-gray-900 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <img
                    className="w-24 mx-auto rounded-full mb-6"
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFzq-OiKDq-RGQ4-8UB3SCxf26gNYBFcv9pw&s'
                    alt="Logo"
                />
                <form onSubmit={submitHandler}>
                    <h2 className="text-xl font-semibold mb-4 text-gray-800 text-center">
                        Create Captain Account
                    </h2>
                    {/* Name */}
                    <div className="flex gap-4 mb-4">
                        <input
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                            className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                            className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    {/* Email */}
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    {/* Password */}
                    <div className="mb-4">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    {/* Vehicle Info */}
                    <h3 className="font-medium mb-2">Vehicle Details</h3>
                    <div className="flex gap-4 mb-4">
                        <input
                            type="text"
                            placeholder="Vehicle Color"
                            value={vehicleColor}
                            onChange={(e) => setVehicleColor(e.target.value)}
                            required
                            className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            placeholder="Vehicle Plate"
                            value={vehiclePlate}
                            onChange={(e) => setVehiclePlate(e.target.value)}
                            required
                            className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex gap-4 mb-6">
                        <input
                            type="number"
                            placeholder="Capacity"
                            value={vehicleCapacity}
                            onChange={(e) => setVehicleCapacity(e.target.value)}
                            required
                            className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <select
                            value={vehicleType}
                            onChange={(e) => setVehicleType(e.target.value)}
                            required
                            className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="" disabled>
                                Select Vehicle Type
                            </option>
                            <option value="car">Car</option>
                            <option value="auto">Auto</option>
                            <option value="moto">Moto</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-200"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="text-center text-sm text-gray-600 mt-4">
                    Already have an account?{" "}
                    <Link to="/captain-login" className="text-blue-600 font-medium">
                        Login here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default CaptainSignup;
