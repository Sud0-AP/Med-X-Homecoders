import React, { useEffect, useState } from "react";
import "./Doctors.css";
import DoctorCard from "../components/DoctorCard";
import { Link } from "react-router-dom";

function Doctors(AppointmentsContract,PatientsContract) {

  async function getDoctorData() {
    const doc1 = await AppointmentsContract.functions.doctors("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
    console.log(doc1);
  }

  useEffect(()=>{
    getDoctorData()
  })

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
      </div>
    </div>
  );
}

export default Doctors;
