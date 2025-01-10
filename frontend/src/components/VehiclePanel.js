import React from 'react';

const VehiclePanel = (props) => {
    return (
        <div className="p-4 bg-gray-50 rounded-lg shadow-lg">
            <button
                className="absolute top-2 left-2 p-2 rounded-full bg-gray-200 hover:bg-gray-300"
                onClick={() => {
                    props.setVehiclePanel(false);
                }}
            >
                <i className="text-2xl text-gray-700 ri-arrow-down-s-line"></i>
            </button>

            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Choose a Vehicle</h3>
            {/* Auto Option */}
            <div
                onClick={() => {
                    props.setConfirmRidePanel(true);
                    props.selectVehicle('auto');
                }}
                className="flex items-center justify-between p-4 bg-white rounded-lg shadow hover:shadow-md transition cursor-pointer"
            >
                <img
                    className="h-12 w-12 object-cover rounded-md"
                    src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
                    alt="Auto"
                />
                <div className="ml-4 flex-1">
                    <h4 className="text-lg font-semibold">
                        Auto <span className="text-gray-600 text-sm ml-2"><i className="ri-user-3-fill"></i> 3</span>
                    </h4>
                    <p className="text-sm text-gray-600">3 mins away</p>
                    <p className="text-xs text-gray-500">Affordable Auto rides</p>
                </div>
                <h2 className="text-lg font-bold text-gray-800">₹{props.fare.auto}</h2>
            </div>
            <div className="space-y-4">
                {/* Car Option */}
                <div
                    onClick={() => {
                        props.setConfirmRidePanel(true);
                        props.selectVehicle('car');
                    }}
                    className="flex items-center justify-between p-4 bg-white rounded-lg shadow hover:shadow-md transition cursor-pointer"
                >
                    <img
                        className="h-12 w-12 object-cover rounded-md"
                        src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
                        alt="Car"
                    />
                    <div className="ml-4 flex-1">
                        <h4 className="text-lg font-semibold">
                            Car <span className="text-gray-600 text-sm ml-2"><i className="ri-user-3-fill"></i> 4</span>
                        </h4>
                        <p className="text-sm text-gray-600">2 mins away</p>
                        <p className="text-xs text-gray-500">Affordable, compact rides</p>
                    </div>
                    <h2 className="text-lg font-bold text-gray-800">₹{props.fare.car}</h2>
                </div>

                {/* Motorcycle Option */}
                <div
                    onClick={() => {
                        props.setConfirmRidePanel(true);
                        props.selectVehicle('moto');
                    }}
                    className="flex items-center justify-between p-4 bg-white rounded-lg shadow hover:shadow-md transition cursor-pointer"
                >
                    <img
                        className="h-12 w-12 object-cover rounded-md"
                        src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png"
                        alt="Moto"
                    />
                    <div className="ml-4 flex-1">
                        <h4 className="text-lg font-semibold">
                            Motorcycle <span className="text-gray-600 text-sm ml-2"><i className="ri-user-3-fill"></i> 1</span>
                        </h4>
                        <p className="text-sm text-gray-600">3 mins away</p>
                        <p className="text-xs text-gray-500">Affordable motorcycle rides</p>
                    </div>
                    <h2 className="text-lg font-bold text-gray-800">₹{props.fare.moto}</h2>
                </div>


            </div>
        </div>
    );
};

export default VehiclePanel;
