import React from 'react'
import "./UpcomingAppointment.css"

function UpcomingAppointment() {
  return (
    <div className="upcoming_appointments">
        <div className="left_content">
            <p className="name">Tushar Sharma</p>
            <p className="specialization">Cardiologist</p>
            <p className="distance">📍 1.5 km away</p>
        </div>
        <div className="right_content">
            <p className="date">12 Dec</p>
            <p className="time">9:30 AM</p>
        </div>
    </div>
  )
}

export default UpcomingAppointment
