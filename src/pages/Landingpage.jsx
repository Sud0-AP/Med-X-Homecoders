import React from "react";
import Navbar from "../components/Navbar";
import "./Landingpage.css";

function Landingpage() {
  return (
    <div className="Landingpage">
      <Navbar />
      <div className="content">
        <div className="leftcontent">
          <img className="bg_img" alt="" src={require("./cropped2.png")} />
        </div>
        <div className="rightcontent">
          <div className="slogan">
            <h1 className="head">Welcome To Med-X .</h1>
            <h1 className="head">This Is A Slogan</h1>
            <p className="slogan_para">
              Record quick videos to update your team and cut down meetings by
              29%
            </p>
            <button className="appointment">Book An Appointment Now</button>
          </div>
          <div className="quality">
            <div className="leftquality">
              <u>
                <h1 className="quality_head">
                  24x7
                  <h2>available</h2>
                </h1>
              </u>
              <p className="quality_para">
                We are available 24x7 for your service. Book an appointment now
              </p>
            </div>
            <div className="rightquality">
              <u>
                <h1 className="quality_head">
                  Best
                  <h2>Doctors</h2>
                </h1>
              </u>
              <p className="quality_para">
                We ensure you that you will be treated by best doctors of the
                world
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
