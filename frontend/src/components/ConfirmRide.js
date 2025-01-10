import React from "react";

const ConfirmRide = (props) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md relative">
            <button
                className="p-2  text-center absolute top-0 left-[50%] transform -translate-x-1/2"
                onClick={() => props.setConfirmRidePanel(false)}
            >
                <i className="text-3xl  text-gray-400 hover:text-gray-600 transition ri-arrow-down-wide-line"></i>
            </button>

            <h3 className="text-2xl font-bold text-center mb-6">Confirm Your Ride</h3>
            <div className="flex justify-center mb-6">
                <img
                    className="h-32 w-auto rounded-md object-cover"
                    src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
                    alt="Vehicle"
                />
            </div>

            <div className="space-y-5">
                {/* Pickup Location */}
                <div className="flex items-center gap-4 border-b pb-3">
                    <i className="text-2xl text-blue-500 ri-map-pin-user-fill"></i>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">Pickup</h3>
                        <p className="text-sm text-gray-500">{props.pickup}</p>
                    </div>
                </div>

                {/* Destination */}
                <div className="flex items-center gap-4 border-b pb-3">
                    <i className="text-2xl text-green-500 ri-map-pin-2-fill"></i>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">Destination</h3>
                        <p className="text-sm text-gray-500">{props.destination}</p>
                    </div>
                </div>

                {/* Fare Details */}
                <div className="flex items-center gap-4">
                    <i className="text-2xl text-yellow-500 ri-currency-line"></i>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">Fare</h3>
                        <p className="text-sm text-gray-500">₹{props.fare[props.vehicleType]}</p>
                        <p className="text-sm text-gray-400">Payment Method: Cash</p>
                    </div>
                </div>
            </div>

            {/* Confirm Button */}
            <button
                onClick={() => {
                    props.setVehicleFound(true);
                    props.setConfirmRidePanel(false);
                    props.createRide();
                }}
                className="w-full mt-8 bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition"
            >
                Confirm Ride
            </button>
        </div>
    );
};

export default ConfirmRide;
