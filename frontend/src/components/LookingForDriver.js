import React from 'react';

const LookingForDriver = (props) => {
    return (
        <div className="flex flex-col items-center p-5 bg-gray-50 h-full">
            <button
                className="absolute top-2 left-2 p-2 rounded-full bg-gray-200 hover:bg-gray-300"
                onClick={() => {
                    props.setVehicleFound(false);
                }}
            >
                <i className="text-2xl text-gray-700 ri-arrow-down-s-line"></i>
            </button>

            <h3 className="text-3xl font-bold mb-6 text-gray-800">Finding Your Driver...</h3>

            <div className="w-40 h-40 rounded-full bg-gray-200 overflow-hidden mb-6">
                <img
                    className="object-cover w-full h-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyfqauHE9lvdmWbn_qH1c3PVB7q52eCwMSGA&s"
                    alt="Driver Search"
                />
            </div>

            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-4">
                <div className="flex items-center gap-4 border-b pb-3">
                    <i className="text-2xl text-blue-600 ri-map-pin-user-fill"></i>
                    <div>
                        <h4 className="text-lg font-semibold text-gray-800">Pickup Location</h4>
                        <p className="text-sm text-gray-600">{props.pickup}</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 border-b py-3">
                    <i className="text-2xl text-green-600 ri-map-pin-2-fill"></i>
                    <div>
                        <h4 className="text-lg font-semibold text-gray-800">Destination</h4>
                        <p className="text-sm text-gray-600">{props.destination}</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 pt-3">
                    <i className="text-2xl text-yellow-500 ri-currency-line"></i>
                    <div>
                        <h4 className="text-lg font-semibold text-gray-800">Fare</h4>
                        <p className="text-sm text-gray-600">₹{props.fare[props.vehicleType]}</p>
                    </div>
                </div>
            </div>

            <p className="mt-8 text-gray-500 text-sm">
                Sit back and relax while we connect you with a driver!
            </p>
        </div>
    );
};

export default LookingForDriver;
