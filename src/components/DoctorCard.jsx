import React from "react";
import "./DoctorCard.css";

function DoctorCard() {
  return (
    <div>
      <div className="doctor_card">
        <div className="doctor_image">
          <img
            src="https://myupchar-banner.s3.ap-south-1.amazonaws.com/widget/avatar/doctor-avatar-male.png"
            alt=""
          />
        </div>
        <div className="doctor_details">
          <div className="doctor_name">
            <p>Tushar Sharma</p>
          </div>
          <div className="doctor_specialization">
            <p>Cardiologist</p>
          </div>
        </div>
        <div className="doctor_more_info">
          <p className="location">📍 1.5 km away</p>
          <p className="doctor_rating">⭐ 4.2</p>
        </div>
      </div>
    </div>
  );
}

export default DoctorCard;
