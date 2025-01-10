import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SocketContext } from '../context/SocketContext'
import { useNavigate } from 'react-router-dom'
import LiveTracking from '../components/LiveTracking'

const Riding = () => {
    const location = useLocation()
    const { ride } = location.state || {}
    const { socket } = useContext(SocketContext)
    const navigate = useNavigate()

    socket.on("ride-ended", (ride) => {
        navigate('/home')
    })


    return (
        <div className='h-screen flex flex-col'>
            <Link
                to='/home'
                className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full shadow-md'>
                <i className="text-lg font-medium ri-home-5-line"></i>
            </Link>

            {/* Live Map */}
            <div className='h-1/2'>
                <LiveTracking />
            </div>

            {/* Ride Details */}
            <div className='h-1/2 p-4 bg-white'>
                <div className='flex items-center justify-between'>
                    <img
                        className='h-12 rounded-lg object-cover'
                        src={ride?.captain.image || 'https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg'}
                        alt="Driver"
                    />
                    <div className='text-right'>
                        <h2 className='text-lg font-medium capitalize'>{ride?.captain?.fullname?.firstname || 'Driver Name'}</h2>
                        <h4 className='text-xl font-semibold'>{ride?.captain?.vehicle?.plate || 'ABC123'}</h4>
                    </div>
                </div>

                <div className='mt-5'>
                    {/* Destination */}
                    <div className='flex items-center gap-5 p-3 border-b'>
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <p className='text-sm text-gray-600'>{ride?.destination || 'Destination Address'}</p>
                        </div>
                    </div>

                    {/* Fare */}
                    <div className='flex items-center gap-5 p-3'>
                        <i className="ri-currency-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>₹{ride?.fare || '0.00'}</h3>
                            <p className='text-sm text-gray-600'>Cash Payment</p>
                        </div>
                    </div>
                </div>

                <button className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg shadow'>
                    Make a Payment
                </button>
            </div>
        </div>
    );
};

export default Riding;