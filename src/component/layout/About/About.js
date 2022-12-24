import React from "react";
import "./aboutSection.css";
import MRX from "../../../images/aboutUsCover.png";

const About = () => {
  return (
    <div className="about">
      <div className="content">
        <img src={MRX} alt="about cover image" />
        <div className="text">
          <h1>About Us</h1>
          <h5>Community or Organization</h5>
          <p>
            Our ultimate goal is to contribute something important to humanity
            and we work for it every day
          </p>
          <button type="button">{"More >>"}</button>
        </div>
      </div>
    </div>
  );
};

export default About;
