import React, { useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import FinishRide from '../components/FinishRide'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import LiveTracking from '../components/LiveTracking'

const CaptainRiding = () => {
    const [finishRidePanel, setFinishRidePanel] = useState(false)
    const finishRidePanelRef = useRef(null)
    const location = useLocation()
    const rideData = location.state?.ride

    useGSAP(function () {
        if (finishRidePanel) {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(finishRidePanelRef, {
                transform: 'translateY(100%)'
            })
        }
    }, [finishRidePanel])

    return (
        <div className="h-screen relative flex flex-col bg-white-400 justify-end">
            <header className="fixed p-6 top-0 flex items-center justify-between w-full z-10  shadow-md">
                <img
                    className="w-16 rounded-full"
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFzq-OiKDq-RGQ4-8UB3SCxf26gNYBFcv9pw&s'
                    alt="Logo"
                />
                <Link
                    to="/captain-home"
                    className="h-10 w-10 bg-gray-200 flex items-center justify-center rounded-full hover:bg-gray-300 transition-all">
                    <i className="text-lg font-medium ri-logout-box-r-line"></i>
                </Link>
            </header>

            <section
                className="h-1/5 p-6 flex items-center justify-between relative bg-white-400 cursor-pointer"
                onClick={() => setFinishRidePanel(true)}>
                <i className="absolute top-3 right-[50%] translate-x-[50%] text-3xl text-gray-800 ri-arrow-up-wide-line"></i>
                <h4 className="text-xl font-semibold">4 KM away</h4>
                <button className="bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-green-500 transition-all">
                    Complete Ride
                </button>
            </section>

            <div
                ref={finishRidePanelRef}
                className="fixed w-full z-50 bottom-0 translate-y-full bg-white px-5 py-10 shadow-lg rounded-t-lg">
                <FinishRide ride={rideData} setFinishRidePanel={setFinishRidePanel} />
            </div>

            <div className="h-full fixed w-full top-0 z-[-1]">
                <LiveTracking />
            </div>
        </div>
    );
};

export default CaptainRiding;

