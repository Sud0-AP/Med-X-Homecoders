import React from 'react'
import './RecentAppointment.css'

function RecentAppointment() {
  return (
    <div className="recent_appointments">
        <div className="left_content">
            <p className="name">Tushar Sharma</p>
            <p className="specialization">Cardiologist</p>
            <p className="distance">📍 1.5 km away</p>
        </div>
        <div className="right_content">
            <p className="your_rating">Your Rating:</p>
            <p className="stars">⭐⭐⭐⭐</p>
        </div>
    </div>
  )
}

export default RecentAppointment
