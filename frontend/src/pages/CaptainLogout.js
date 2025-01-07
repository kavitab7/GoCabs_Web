import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const CaptainLogout = () => {
    const token = localStorage.getItem('captain-token')
    const navigate = useNavigate()

    axios.get(`${import.meta.env.BASE_URL}/captains/logout`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response) => {
        if (response.status === 200) {
            localStorage.removeItem('captain-token')
            navigate('/captain-login')
        }
    })

    return (
        <div>CaptainLogout</div>
    )
}

export default CaptainLogout