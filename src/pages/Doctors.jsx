import React from "react";
import "./Doctors.css";
import Navbar from "../components/Navbar";
import DoctorCard from "../components/DoctorCard";

function Doctors() {
  return (
    <div className="doctors">
      <Navbar />
      <div className="doctors_header">
        <button>back</button>
        <h1>OUR DOCTORS</h1>
      </div>
      <div className="doctor_cards_content">
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
      </div>
    </div>
  );
}

export default Doctors;
