import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import DateCard from "../components/DateCard";
import TimeCard from "../components/TimeCard";
import Navbar from "../components/Navbar";
import "./BookAppointment.css";

function BookAppointment() {
  return (
    <>
      <Navbar />
      <div className="BookAppointment">
        <div className="left_content">
          <div className="doctor_image">
            <img src="https://myupchar-banner.s3.ap-south-1.amazonaws.com/widget/avatar/doctor-avatar-male.png" alt="" />
          </div>
          <div className="doctor_details">
            <p className="name">Tushar Sharma</p>
            <p className="specialization">Cardiologist</p>
            <div className="contact_buttons">
              <PhoneIcon />
              <MailIcon />
            </div>
            <div className="doctor_more_info">
              <p className="location">📍 1.5 km away</p>
              <p className="doctor_rating">⭐ 4.2</p>
            </div>
          </div>
        </div>
        <div className="right_content">
          <h2>Book Appointment</h2>
          <div className="description">
            <p className="description_title">Description</p>
            <p className="description_content">
              Cardiologist hu bhai thodi to izzat banti hai
            </p>
          </div>
          <div className="select_date">
            <p className="select_date_title">Select Date</p>
            <div className="date_cards">
              <DateCard />
              <DateCard />
              <DateCard />
              <DateCard />
              <DateCard />
            </div>
          </div>
          <div className="select_time">
            <p className="select_time_title">Select Time</p>
            <div className="time_cards">
              <TimeCard />
              <TimeCard />
              <TimeCard />
              <TimeCard />
            </div>
          </div>
          <button>Book Appointment Now</button>
        </div>
      </div>
    </>
  );
}

export default BookAppointment;
