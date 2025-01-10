import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const FinishRide = (props) => {
    const navigate = useNavigate()

    async function endRide() {
        const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/rides/end-ride`, {
            rideId: props.ride._id
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        if (response.status === 200) {
            navigate('/captain-home')
        }
    }

    return (
        <div className="relative">
            <h5 className="p-1 text-center w-[93%] absolute top-0 cursor-pointer" onClick={() => props.setFinishRidePanel(false)}>
                <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
            </h5>

            <h3 className="text-2xl font-semibold mb-5 text-center">Finish this Ride</h3>

            {/* Ride Details */}
            <div className="flex items-center justify-between p-4 border-2 border-green-400 rounded-lg mt-4">
                <div className="flex items-center gap-3">
                    <img className="h-12 w-12 rounded-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS7AiWKSLuNFQqtHEKxq6OgdTQYctWcUXR4g&s" alt="User Avatar" />
                    <h2 className="text-lg font-medium">{props.ride?.user.fullname.firstname}</h2>
                </div>
                <h5 className="text-lg font-semibold">3.1 KM</h5>
            </div>

            {/* Pickup & Destination */}
            <div className="w-full mt-5">
                <div className="flex items-center gap-5 p-3 border-b-2">
                    <i className="ri-map-pin-user-fill text-xl"></i>
                    <div>
                        <h3 className="text-lg font-medium">562/11-A</h3>
                        <p className="text-sm text-gray-600">{props.ride?.pickup}</p>
                    </div>
                </div>
                <div className="flex items-center gap-5 p-3 border-b-2">
                    <i className="ri-map-pin-2-fill text-xl"></i>
                    <div>
                        <h3 className="text-lg font-medium">562/11-A</h3>
                        <p className="text-sm text-gray-600">{props.ride?.destination}</p>
                    </div>
                </div>
                <div className="flex items-center gap-5 p-3">
                    <i className="ri-currency-line text-xl"></i>
                    <div>
                        <h3 className="text-lg font-medium">₹{props.ride?.fare}</h3>
                        <p className="text-sm text-gray-600">Cash Payment</p>
                    </div>
                </div>
            </div>

            <div className="mt-10 w-full">
                <button
                    onClick={endRide}
                    className="w-full mt-5 flex justify-center text-lg bg-green-600 text-white font-semibold p-3 rounded-lg"
                >
                    Finish Ride
                </button>
            </div>
        </div>
    )
}

export default FinishRide
