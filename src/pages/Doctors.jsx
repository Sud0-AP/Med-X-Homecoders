import React from "react";
import "./Doctors.css";
import DoctorCard from "../components/DoctorCard";
import { Link } from "react-router-dom";

function Doctors() {
  return (
    <div className="doctors">
      <div className="doctors_header">
      <Link to="/"><button>back</button></Link>
        <h1>OUR DOCTORS</h1>
      </div>
      <div className="doctor_cards_content">
      <Link to="/bookappointment"><DoctorCard /></Link>
      <Link to="/bookappointment"><DoctorCard /></Link>
      <Link to="/bookappointment"><DoctorCard /></Link>
      <Link to="/bookappointment"><DoctorCard /></Link>
      <Link to="/bookappointment"><DoctorCard /></Link>
      <Link to="/bookappointment"><DoctorCard /></Link>
      <Link to="/bookappointment"><DoctorCard /></Link>
      <Link to="/bookappointment"><DoctorCard /></Link>
      <Link to="/bookappointment"><DoctorCard /></Link>
      <Link to="/bookappointment"><DoctorCard /></Link>
      </div>
    </div>
  );
}

export default Doctors;
