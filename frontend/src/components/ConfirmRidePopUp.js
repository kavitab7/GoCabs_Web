import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ConfirmRidePopUp = (props) => {
    const [otp, setOtp] = useState("");
    const navigate = useNavigate();


    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get(
                `${process.env.REACT_APP_BASE_URL}/rides/start-ride`,
                {
                    params: {
                        rideId: props.ride._id,
                        otp: otp,
                    },
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );

            if (response.status === 200) {
                props.setConfirmRidePopupPanel(false);
                props.setRidePopupPanel(false);
                navigate("/captain-riding", { state: { ride: props.ride } });
            }
        } catch (error) {
            console.error("Error starting the ride:", error);
        }
    };

    return (
        <div className="bg-white p-1  rounded-lg shadow-lg relative">
            <button
                className="p-2 absolute top-0 left-[50%] transform -translate-x-1/2"
                onClick={() => props.setRidePopupPanel(false)}
            >
                <i className="text-3xl text-gray-400 hover:text-gray-600 transition ri-arrow-down-wide-line"></i>
            </button>

            <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
                Confirm this Ride to Start
            </h3>

            {/* Ride Information */}
            <div className="flex items-center justify-between p-4 bg-yellow-100 rounded-lg shadow-sm">
                <div className="flex items-center gap-4">
                    <img
                        className="h-14 w-14 rounded-full object-cover"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS7AiWKSLuNFQqtHEKxq6OgdTQYctWcUXR4g&s"
                        alt="Rider"
                    />
                    <h2 className="text-lg font-medium text-gray-800 capitalize">
                        {props.ride?.user.fullname.firstname}
                    </h2>
                </div>
                <h5 className="text-lg font-bold text-gray-600">3.1 KM</h5>
            </div>

            <div className="mt-6 space-y-4">
                {/* Pickup Location */}
                <div className="flex items-center gap-4 p-3 border-b">
                    <i className="text-xl text-blue-500 ri-map-pin-user-fill"></i>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">Pickup Location</h3>
                        <p className="text-sm text-gray-500">{props.ride?.pickup}</p>
                    </div>
                </div>

                {/* Destination */}
                <div className="flex items-center gap-4 p-3 border-b">
                    <i className="text-xl text-green-500 ri-map-pin-2-fill"></i>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">Destination</h3>
                        <p className="text-sm text-gray-500">{props.ride?.destination}</p>
                    </div>
                </div>

                {/* Fare */}
                <div className="flex items-center gap-4 p-3">
                    <i className="text-xl text-yellow-500 ri-currency-line"></i>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">Fare</h3>
                        <p className="text-sm text-gray-500">₹{props.ride?.fare}</p>
                        <p className="text-sm text-gray-400">Payment Mode: Cash</p>
                    </div>
                </div>
            </div>

            {/* OTP Form */}
            <div className="mt-6 w-full">
                <form onSubmit={submitHandler}>
                    <input
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        type="text"
                        className="bg-gray-100 px-6 py-3 text-lg rounded-lg w-full placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter OTP"
                    />
                    <button
                        type="submit"
                        className="w-full mt-5 text-lg bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition"
                    >
                        Confirm
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            props.setConfirmRidePopupPanel(false);
                            props.setRidePopupPanel(false);
                        }}
                        className="w-full mt-3 text-lg bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition"
                    >
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ConfirmRidePopUp;
