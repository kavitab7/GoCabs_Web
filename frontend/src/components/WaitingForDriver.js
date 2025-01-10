import React from "react";

const WaitingForDriver = (props) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md relative">
            <button
                className="p-2 text-center absolute top-2 left-[50%] transform -translate-x-1/2"
                onClick={() => props.waitingForDriver(false)}
            >
                <i className="text-3xl text-gray-400 hover:text-gray-600 transition ri-arrow-down-wide-line"></i>
            </button>

            {/* Driver Info */}
            <div className="flex items-center justify-between mb-6">
                <img
                    className="h-14 w-14 rounded-md object-cover"
                    src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
                    alt="Driver's Vehicle"
                />
                <div className="text-right">
                    <h2 className="text-lg font-semibold capitalize">
                        {props.ride?.captain.fullname.firstname}
                    </h2>
                    <h4 className="text-xl font-bold text-gray-800">
                        {props.ride?.captain.vehicle.plate}
                    </h4>
                    <h1 className="text-lg font-semibold text-green-600">OTP: {props.ride?.otp}</h1>
                </div>
            </div>

            {/* Ride Details */}
            <div className="space-y-5">
                {/* Pickup */}
                <div className="flex items-center gap-4 border-b pb-3">
                    <i className="text-2xl text-blue-500 ri-map-pin-user-fill"></i>
                    <div>
                        <h3 className="text-lg font-medium text-gray-800">Pickup</h3>
                        <p className="text-sm text-gray-500">{props.ride?.pickup}</p>
                    </div>
                </div>

                {/* Destination */}
                <div className="flex items-center gap-4 border-b pb-3">
                    <i className="text-2xl text-green-500 ri-map-pin-2-fill"></i>
                    <div>
                        <h3 className="text-lg font-medium text-gray-800">Destination</h3>
                        <p className="text-sm text-gray-500">{props.ride?.destination}</p>
                    </div>
                </div>

                {/* Fare */}
                <div className="flex items-center gap-4">
                    <i className="text-2xl text-yellow-500 ri-currency-line"></i>
                    <div>
                        <h3 className="text-lg font-medium text-gray-800">Fare</h3>
                        <p className="text-sm text-gray-500">₹{props.ride?.fare}</p>
                        <p className="text-sm text-gray-400">Payment Method: Cash</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WaitingForDriver;
