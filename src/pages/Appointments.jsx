import React from "react";
import UpcomingAppointment from "../components/UpcomingAppointment";
import RecentAppointment from "../components/RecentAppointment";
import './Appointments.css'

function Appointments() {
  return (
    <>
      <div className="Appointmentss">
        <h1>Appointments</h1>
        <h2>Upcoming Appointment(s):</h2>
        <div className="upcoming_appointments_list">
          <UpcomingAppointment />
          <UpcomingAppointment />
        </div>
        <h2>Recent Appointment(s):</h2>
        <div className="recent_appointments_list">
          <RecentAppointment />
          <RecentAppointment />
        </div>
      </div>
    </>
  );
}

export default Appointments;
