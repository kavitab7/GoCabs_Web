import React, { useContext } from "react";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainDetails = () => {
    const { captain } = useContext(CaptainDataContext);

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                    <img
                        className="h-12 w-12 rounded-full border-2 border-gray-300 object-cover"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCACl9PpobKUlOB3rA5Lzsc99g49AVLiOklg&s"
                        alt="Captain Profile"
                    />
                    <div>
                        <h4 className="text-xl font-semibold capitalize text-gray-800">
                            {`${captain.fullname.firstname} ${captain.fullname.lastname}`}
                        </h4>
                        <p className="text-sm text-gray-500">Driver Partner</p>
                    </div>
                </div>
                <div className="text-right">
                    <h4 className="text-2xl font-bold text-green-600">₹332.15</h4>
                    <p className="text-sm text-gray-500">Today's Earnings</p>
                </div>
            </div>

            <div className="flex justify-between bg-gray-50 p-4 rounded-lg shadow-inner">
                <div className="text-center">
                    <i className="text-4xl text-blue-500 ri-timer-2-line"></i>
                    <h5 className="mt-2 text-lg font-bold text-gray-800">4.2</h5>
                    <p className="text-sm text-gray-500">Hours Online</p>
                </div>
                <div className="text-center">
                    <i className="text-4xl text-green-500 ri-speed-up-line"></i>
                    <h5 className="mt-2 text-lg font-bold text-gray-800">2</h5>
                    <p className="text-sm text-gray-500">Trips Completed</p>
                </div>
                <div className="text-center">
                    <i className="text-4xl text-orange-500 ri-booklet-line"></i>
                    <h5 className="mt-2 text-lg font-bold text-gray-800">4.1</h5>
                    <p className="text-sm text-gray-500">Rating</p>
                </div>
            </div>
        </div>
    );
};

export default CaptainDetails;
