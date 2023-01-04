import React from "react";
import './Navbar.css';

function Navbar() {
  return (
    <div className="Navbar">
      <div className="left">
        <img className="logo" src="./image 2.png" alt="" />
        <h1 className="medx">Med-X</h1>
      </div>
      <div className="right">
        <button className="about_us">About Us</button>
        <button className="Register">Doctors</button>
        <button className="appointments">Appointments</button>
        <button className="connect_wallet">Connect Wallet <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" className="wallet_pic" alt="" /></button>
      </div>
    </div>
  );
}

export default Navbar;
