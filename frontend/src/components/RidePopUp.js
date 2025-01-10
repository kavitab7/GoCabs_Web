import React from "react";

const RidePopUp = (props) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg relative">
            <button
                className="p-2 absolute top-2 left-[50%] transform -translate-x-1/2"
                onClick={() => props.setRidePopupPanel(false)}
            >
                <i className="text-3xl text-gray-400 hover:text-gray-600 transition ri-arrow-down-wide-line"></i>
            </button>

            <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">New Ride Available!</h3>

            <div className="flex items-center justify-between p-4 bg-yellow-100 rounded-lg shadow-sm">
                <div className="flex items-center gap-4">
                    <img
                        className="h-14 w-14 rounded-full object-cover"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS7AiWKSLuNFQqtHEKxq6OgdTQYctWcUXR4g&s"
                        alt="Rider"
                    />
                    <h2 className="text-lg font-medium text-gray-800 capitalize">
                        {props.ride?.user.fullname.firstname} {props.ride?.user.fullname.lastname}
                    </h2>
                </div>
                <h5 className="text-lg font-bold text-gray-600">3.1 KM</h5>
            </div>

            {/* Ride Details */}
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

            <div className="mt-6 space-y-3">
                <button
                    onClick={() => {
                        props.setConfirmRidePopupPanel(true);
                        props.confirmRide();
                    }}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition"
                >
                    Accept Ride
                </button>
                <button
                    onClick={() => props.setRidePopupPanel(false)}
                    className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 rounded-lg transition"
                >
                    Ignore
                </button>
            </div>
        </div>
    );
};

export default RidePopUp;
